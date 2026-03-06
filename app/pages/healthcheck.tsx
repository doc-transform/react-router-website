// 了解更多：https://fly.io/docs/reference/configuration/#services-http_checks

export function loader() {
  return new Response("OK");
}
