import { test, expect } from '@playwright/test';

test.describe('Dashboard Page - OTP Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/dashboard');
  });

  test('should display Logout button', async ({ page }) => {
    const logoutButton = page.locator('button:has-text("Logout")');
    await expect(logoutButton).toBeVisible();
  });

  test('should navigate to login page after logout', async ({ page }) => {
    await page.click('button:has-text("Logout")');

    await expect(page).toHaveURL('http://localhost:5173/');
  });

  test('should prevent right-click on the image', async ({ page }) => {
    const image = page.locator('img');
  
    await image.click({ button: 'right' });
  
    await expect(page).toHaveURL('http://localhost:5173/dashboard');
  });
  
});
