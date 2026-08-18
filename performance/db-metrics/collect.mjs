import fs from "node:fs";
const path = process.env.DB_METRICS_FILE || new URL("./sample-metrics.json", import.meta.url);
console.log(JSON.parse(fs.readFileSync(path, "utf8")));
