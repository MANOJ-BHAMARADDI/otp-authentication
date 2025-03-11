import { test, expect } from '@playwright/test';

test.describe('Login Page - OTP Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('should navigate to OTP entry page when valid email is entered', async ({ page }) => {

    await page.fill('input[type="email"]', 'test@example.com');

    await page.click('button:has-text("Send Otp")');

    await expect(page).toHaveURL('http://localhost:5173/otp-enter');
  });

  test('should show an alert when an invalid email is entered', async ({ page }) => {
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Please enter a valid email address.');
      await dialog.dismiss();
    });

    await page.fill('input[type="email"]', 'invalidemail');

    await page.click('button:has-text("Send Otp")');
  });
});
