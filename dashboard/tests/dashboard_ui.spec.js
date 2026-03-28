import { test, expect } from '@playwright/test';

test('dashboard renders correctly', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Check for the main title (heading)
  await expect(page.getByRole('heading', { name: 'لوحة التحكم', exact: true })).toBeVisible();

  // Check for Sidebar items
  await expect(page.getByRole('navigation').getByText('لوحة التحكم')).toBeVisible();
  await expect(page.getByText('العمال', { exact: true })).toBeVisible();
  await expect(page.getByText('الكفلاء', { exact: true })).toBeVisible();

  // Check for summary cards
  await expect(page.getByText('إجمالي العمال')).toBeVisible();
  await expect(page.getByText('16,000')).toBeVisible();

  // Check for the inspections table
  await expect(page.getByText('آخر عمليات التفتيش')).toBeVisible();
  await expect(page.getByText('محمد أحمد علي')).toBeVisible();

  // Take a screenshot
  await page.screenshot({ path: 'dashboard-screenshot.png', fullPage: true });
});
