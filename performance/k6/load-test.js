import http from "k6/http";
import { check, sleep } from "k6";

export const options = { vus: 1, iterations: 3 };
const baseUrl = __ENV.TARGET_URL || "http://127.0.0.1:3000";

export default function () {
  const response = http.get(`${baseUrl}/health`);
  check(response, { "health returns 200": (result) => result.status === 200 });
  sleep(0.1);
}
