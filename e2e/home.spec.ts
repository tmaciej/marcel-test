import { test, expect } from "@playwright/test";

test("should be able to search samples by their ID", async ({ page }) => {
  await page.goto("/");

  // Find the search input and enter sample id
  await page.getByRole("textbox").fill("testsample1");

  // Should see the card for given test sample
  const card = await page
    .getByRole("listitem")
    .filter({ hasText: "Blood Sample 123542134" });
  await expect(card).toBeVisible();

  // Should be able to navigate to sample details by clicking the button
  await card.getByRole("button", { name: "View Details" }).click();
  await expect(page).toHaveURL("/sample-details/testsample1");
});

test("should see empty results when inputing non existing sample ID", async ({
  page,
}) => {
  await page.goto("/");

  // Find the search input and enter sample id
  await page.getByRole("textbox").fill("nonexistingsampleid");

  // Should see the appropiate message
  await expect(
    page.getByText("No test samples found matching given criteria.")
  ).toBeVisible();
});
