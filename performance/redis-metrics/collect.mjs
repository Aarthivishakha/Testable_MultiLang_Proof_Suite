import fs from "node:fs";
const path = process.env.REDIS_INFO_FILE || new URL("./sample-info.txt", import.meta.url);
const text = fs.readFileSync(path, "utf8");
const values = Object.fromEntries(text.split(/\r?\n/).filter(line => line.includes(":"))
  .map(line => line.split(":")));
console.log(values);
