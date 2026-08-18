import { test, expect } from "@playwright/test";

test("consent is required before analytics", async ({ page }) => {
  await page.setContent(`
    <button id="accept">Accept analytics</button>
    <output id="status">not-consented</output>
    <script>
      accept.onclick = () => { status.textContent = "consented"; };
    </script>
  `);
  await expect(page.locator("#status")).toHaveText("not-consented");
  await page.locator("#accept").click();
  await expect(page.locator("#status")).toHaveText("consented");
});
