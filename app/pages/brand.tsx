import { clsx } from "clsx";
import type { Route } from "./+types/brand";

export const meta: Route.MetaFunction = () => {
  return [{ title: "React Router 素材与品牌使用指南" }];
};

const BRAND_DIR = "/_brand/React Router Brand Assets";

export default function Brand() {
  return (
    <div className="prose container my-8 flex max-w-full flex-col gap-8 text-base sm:text-lg lg:my-24 lg:max-w-4xl">
      <h1 className="text-2xl font-extrabold dark:text-gray-200 md:text-5xl">
        React Router 品牌
      </h1>
      <p>
        这些素材可用于文章、视频教程等场景。
      </p>
      <AssetHeader>商标使用协议</AssetHeader>
      <p>React Router 的名称和标识是 Shopify Inc. 的商标。</p>
      <p>
        您不得以任何可能暗示与 Shopify Inc.
        存在官方关联或获得其背书的方式使用 React Router
        的名称或标识。任何可能导致用户混淆的使用方式均不被允许。
      </p>
      <p>
        此外，未经明确书面同意，您不得将我们的商标用于 T
        恤、贴纸或其他周边商品。
      </p>

      <AssetHeader>下载素材</AssetHeader>
      <p>
        您可以下载包含所有 React Router 品牌素材的 zip 压缩包：
      </p>
      <p>
        <a
          href="/_brand/React Router Brand Assets.zip"
          className="underline hover:text-red-brand"
          download
        >
          React Router Brand Assets
        </a>
      </p>

      <AssetHeader>组合标识</AssetHeader>
      <div className="grid grid-cols-2 gap-4 gap-x-6">
        <Logos title="Lockup" />
        <Logos title="Lockup" oneColor />
      </div>

      <AssetHeader>文字标识</AssetHeader>
      <AssetsGrid>
        <Logos title="Wordmark" />
      </AssetsGrid>

      <AssetHeader>图标</AssetHeader>
      <AssetsGrid>
        <Logos title="Logo" />
        <Logos title="Logo" oneColor />
      </AssetsGrid>
    </div>
  );
}

function AssetHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-extrabold dark:text-gray-200 md:text-3xl">
      {children}
    </h2>
  );
}

function AssetsGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4 gap-x-6">{children}</div>;
}

/**
 * 为给定素材创建深色和浅色主题的标识。
 */
function Logos({
  title,
  subTitle,
  oneColor,
}: {
  title: "Lockup" | "Wordmark" | "Logo";
  subTitle?: string;
  oneColor?: boolean;
}) {
  let filePath = `${BRAND_DIR}/React Router ${title}`;
  if (subTitle) {
    filePath += `/${subTitle}`;
  }
  if (oneColor) {
    filePath += `/One Color`;
  }

  let downloadFilePath = `rr_${title}`;
  if (subTitle) {
    downloadFilePath += `_${subTitle}`;
  }
  downloadFilePath = downloadFilePath.toLocaleLowerCase();

  return (
    <>
      <LogoBox
        filePath={`${filePath}/Light`}
        theme="light"
        downloadFilePath={downloadFilePath + "_light"}
      />
      <LogoBox
        filePath={`${filePath}/Dark`}
        theme="dark"
        downloadFilePath={downloadFilePath + "_dark"}
      />
    </>
  );
}

let background = {
  light:
    "bg-white bg-[linear-gradient(45deg,theme(colors.gray.100)_25%,transparent_25%,transparent_75%,theme(colors.gray.100)_75%,theme(colors.gray.100)),linear-gradient(45deg,theme(colors.gray.100)_25%,transparent_25%,transparent_75%,theme(colors.gray.100)_75%,theme(colors.gray.100))] bg-[length:24px_24px] bg-[position:0_0,12px_12px]",
  dark: "bg-black bg-[linear-gradient(45deg,theme(colors.gray.800)_25%,transparent_25%,transparent_75%,theme(colors.gray.800)_75%,theme(colors.gray.800)),linear-gradient(45deg,theme(colors.gray.800)_25%,transparent_25%,transparent_75%,theme(colors.gray.800)_75%,theme(colors.gray.800))] bg-[length:24px_24px] bg-[position:0_0,12px_12px]",
};

function LogoBox({
  filePath,
  theme,
  downloadFilePath,
}: {
  filePath: string;
  theme: "dark" | "light";
  downloadFilePath: string;
}) {
  // replace / with - for the alt text
  const alt = filePath.replace(/\//g, " - ");

  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          `flex aspect-[16/9] items-center justify-center rounded-md`,
          background[theme],
        )}
      >
        <img
          className="max-h-[33%] max-w-[50%]"
          src={`${filePath}.svg`}
          alt={alt}
        />
      </div>
      <div className="mt-1 flex items-end gap-4 text-sm">
        {["svg", "png"].map((format) => (
          <a
            className="uppercase underline opacity-50 hover:opacity-100"
            href={`${filePath}.${format}`}
            download={`${downloadFilePath}.${format}`}
            key={format}
          >
            {format}
          </a>
        ))}
      </div>
    </div>
  );
}
