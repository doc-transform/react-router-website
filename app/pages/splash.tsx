import { Await, Link } from "react-router";
import { Suspense } from "react";

import iconsHref from "~/icons.svg";
import { getStats } from "~/modules/stats";
import type { Route } from "./+types/splash";

export let loader = async () => {
  const stats = getStats();
  return { stats };
};

// TODO: target="_blank" for discord?

export const meta: Route.MetaFunction = ({ matches }) => {
  let { isProductionHost } = matches[0].data;
  let robots = isProductionHost ? "index,follow" : "noindex, nofollow";
  return [
    { title: "React Router 中文文档" },
    { name: "robots", content: robots },
    { name: "googlebot", content: robots },
  ];
};

type QuickLink = {
  icon: string;
  title: string;
  to: string;
};
const quicklinks: QuickLink[] = [
  {
    icon: "atom",
    title: "文档",
    to: "home",
  },
  {
    icon: "github-outline",
    title: "GitHub",
    to: "https://github.com/remix-run/react-router",
  },
  {
    icon: "discord-outline",
    title: "Discord",
    to: "https://discord.gg/xwx7mMzVkA",
  },
  {
    icon: "x-logo",
    title: "@ReactRouter",
    to: "https://x.com/reactrouter",
  },
];

type Highlight = {
  icon: string;
  title: string;
  description: string;
};
const highlights: Highlight[] = [
  {
    icon: "chain",
    title: "无破坏性升级",
    description:
      "从 v6 升级到 v7 是一次无破坏性的升级。你可以继续以现有的方式使用 React Router。",
  },
  {
    icon: "box",
    title: "通往 React 19 的桥梁",
    description:
      "全新的打包、服务端渲染、预渲染和流式传输特性，让你能够从 React 18 渐进式迁移到 19。",
  },
  {
    icon: "cd",
    title: "类型安全",
    description:
      "全新的类型生成功能为路由参数、loader 数据、action 等提供了一流的类型支持。",
  },
];

type Adventure = {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
};
const adventures: Adventure[] = [
  {
    title: "我是新手！",
    description: "了解如何充分发挥 React Router 的能力",
    linkText: "从这里开始",
    linkTo: "home",
  },
  {
    title: "我在用 v6",
    description: "只需几步即可升级到 v7",
    linkText: "立即升级",
    linkTo: "upgrading/v6",
  },
  {
    title: "我想启用框架特性",
    description: "了解如何在现有的 React Router 应用中启用新的框架特性",
    linkText: "启用框架特性",
    linkTo: "upgrading/component-routes",
  },
  {
    title: "我遇到问题了",
    description: "加入 GitHub 讨论获取帮助",
    linkText: "获取帮助",
    linkTo: "https://discord.gg/xwx7mMzVkA",
  },
];

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-full w-full flex-col items-center justify-center dark:bg-gray-900">
      <section className="from-23% via-82% flex w-full flex-col items-center gap-y-12 bg-gradient-to-b from-[#CCD2DE] via-[#D9DDE6] to-white to-100% py-[96px] dark:from-[#595F6C] dark:via-[#202228] dark:via-65% dark:to-gray-900 md:py-[160px]">
        <h1>
          <picture className="aspect-[32/5] w-[360px] md:w-[480px] lg:w-[640px] 2xl:w-[960px]">
            <source
              srcSet="/splash/hero-3d-logo.webp"
              media="(prefers-color-scheme: light)"
            />
            <source
              srcSet="/splash/hero-3d-logo.dark.webp"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/splash/hero-3d-logo.webp"
              alt="React Router 标识，六个圆点排列成向上的三角形（顶部一个、中间两个、底部三个），其中三个从上到下高亮连接形成路径，旁边是 React Router 文字"
              className="aspect-[32/5] w-[360px] md:w-[480px] lg:w-[640px] 2xl:w-[960px]"
            />
          </picture>
        </h1>
        <p className="mx-12 max-w-[540px] text-center text-xl text-gray-700 dark:text-gray-200 md:mx-0">
          以用户体验为核心、遵循 Web
          标准、支持多种部署策略的路由方案，可部署到任何地方。
        </p>
        <div className="flex flex-col divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 md:h-[72px] md:flex-row md:divide-x md:divide-y-0">
          {quicklinks.map(({ icon, title, to }) => (
            <Link
              key={title}
              to={to}
              prefetch="intent"
              className="flex justify-center gap-x-2 px-9 py-6 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg className="h-6 w-6">
                <use href={`${iconsHref}#${icon}`} />
              </svg>
              {title}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col items-center gap-y-24 px-12 pb-12 dark:bg-gray-900 md:gap-y-16 lg:gap-y-12">
        <div className="grid gap-x-16 gap-y-6 md:grid-flow-col">
          <img
            src="/splash/v7-badge-1.svg"
            className="h-[52px] w-[140px] md:h-[72px] md:w-[194px]"
          />
          <img
            src="/splash/v7-badge-2.svg"
            className="h-[52px] w-[140px] md:h-[72px] md:w-[194px]"
          />
        </div>
        <h2 className="text-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
          这个版本有哪些亮点：
        </h2>
        <dl className="grid max-w-[540px] gap-x-12 gap-y-6 lg:max-w-5xl lg:grid-flow-col">
          {highlights.map(({ icon, title, description }) => (
            <div key={title} className="relative flex flex-col gap-2 pl-14">
              <dt className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                <svg className="absolute left-0 top-0 h-8 w-8">
                  <use href={`${iconsHref}#${icon}`} />
                </svg>
                {title}
              </dt>
              <dd className="text-[#757575]">{description}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="flex flex-col gap-y-12 p-12">
        <h2 className="mx-[-10px] text-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
          选择你的路线：
        </h2>
        <div className="grid max-w-[1200px] gap-6 md:grid-cols-2 2xl:grid-cols-4">
          {adventures.map(({ title, description, linkText, linkTo }) => (
            <Link
              key={title}
              to={linkTo}
              prefetch="intent"
              className="flex flex-col justify-between gap-y-6 rounded-lg border border-[#D9D9D9] p-8 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col gap-y-4">
                <h3 className="text-2xl font-semibold dark:text-gray-100">
                  {title}
                </h3>
                <p className="text-[#757575] dark:text-gray-300">
                  {description}
                </p>
              </div>
              <p className="flex h-10 place-content-center place-items-center rounded-lg bg-gray-900 text-gray-50 dark:bg-white dark:text-gray-900">
                {linkText}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid w-full place-content-center p-12">
        <Suspense fallback={null}>
          <Await resolve={loaderData.stats} errorElement={null}>
            {(stats) => (
              <dl className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
                {stats.map(({ svgId, count, label }) => (
                  <div key={svgId} className="flex w-[308px] gap-2">
                    <svg className="h-8 w-8 text-gray-600">
                      <use href={`${iconsHref}#${svgId}`} />
                    </svg>
                    <div className="flex flex-col">
                      <dd className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        {count?.toLocaleString("en-US")}
                      </dd>
                      <dt className="text-gray-400">{label}</dt>
                    </div>
                  </div>
                ))}
              </dl>
            )}
          </Await>
        </Suspense>
      </section>
      <section className="grid h-[205px] w-full place-content-center place-items-center gap-y-6 bg-gray-50 p-12 dark:bg-black">
        <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/splash/shopify-badge.svg"
            alt="由 Shopify 开发"
            className="h-[68px] w-[190px]"
          />
        </a>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shopify, Inc.
        </p>
      </section>
    </main>
  );
}
