import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the header logo', async ({ page }) => {
    const logo = page.locator('img[alt="header logo"]');
    await expect(logo).toBeVisible();
  });

  test('should navigate to pages when page items are clicked', async ({ page }) => {
    const pageItems = page.locator('.pageItem');
    const pageCount = await pageItems.count();

    for (let i = 0; i < pageCount; i++) {
      const pageItem = pageItems.nth(i);
      await pageItem.click();
      const url = await page.url();
      expect(url).toContain('/');
      await page.goBack();
    }
  });

  test('should display notification count', async ({ page }) => {
    const badgeContent = page.locator('span[class*="badgeContent"]');
    await expect(badgeContent).toHaveText('1');
  });

});