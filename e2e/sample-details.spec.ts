import { test, expect } from "@playwright/test";

test("should be able to search samples by their ID", async ({ page }) => {
  await page.goto("/sample-details/testsample1");

  // Should see heading with the name of the test sample
  await expect(
    page.getByRole("heading", { name: "Blood Sample 123542134" })
  ).toBeVisible();
});
