import http from "node:http";

const port = Number(process.env.FIXTURE_PORT || 3000);
const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  response.setHeader("content-type", "application/json");
  if (url.pathname === "/health") {
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }
  if (url.pathname === "/add") {
    const a = Number(url.searchParams.get("a"));
    const b = Number(url.searchParams.get("b"));
    response.end(JSON.stringify({ result: a + b }));
    return;
  }
  response.statusCode = 404;
  response.end(JSON.stringify({ error: "not found" }));
});

server.listen(port, "127.0.0.1", () => console.log(`fixture server listening on ${port}`));
