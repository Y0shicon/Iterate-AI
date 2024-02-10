const { test, expect } = require("@playwright/test");

test.describe("Playwright", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Iterate AI/);
  });
});
