import fs from "node:fs";
const endpoint = process.env.PROMETHEUS_URL;
if (!endpoint) {
  console.log(JSON.parse(fs.readFileSync(new URL("./sample-response.json", import.meta.url), "utf8")));
} else {
  const response = await fetch(`${endpoint}/api/v1/query?query=${encodeURIComponent("up")}`);
  console.log(await response.json());
}
