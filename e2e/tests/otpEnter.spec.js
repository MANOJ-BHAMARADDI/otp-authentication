import { test, expect } from '@playwright/test';

test.describe('OTP Entry Page - OTP Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/otp-enter');

    await page.evaluate(() => {
      localStorage.setItem('otp', '123456'); 
    });

    await page.reload();
  });

  test('should enable Resend OTP button after 30 seconds', async ({ page }) => {
    const resendOtpButton = page.locator('button:has-text("Resend OTP")');

    await expect(resendOtpButton).toBeDisabled();

    test.setTimeout(40000);

    await page.waitForTimeout(31000);

    await expect(resendOtpButton).toBeEnabled();
  });

  test('should allow resending OTP only after 30 seconds', async ({ page }) => {
    const resendOtpButton = page.locator('button:has-text("Resend OTP")');

    await expect(resendOtpButton).toBeDisabled();

    test.setTimeout(40000);

    await page.waitForTimeout(31000);

    await resendOtpButton.click();

    const newOtp = await page.evaluate(() => localStorage.getItem('otp'));
    expect(newOtp).not.toBe('123456'); 
  });
});
