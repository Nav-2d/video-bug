const { test } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForSelector(".navbar__title1");
});