import test from '@playwright/test';
import { AngularPage } from '../src/pages/angularPage';
import { BasePage } from '../src/pages/basePage';

test.describe('Angular test', () => {
  test('Angular home page validation', async ({ page, context }) => {
    const angularPage = new AngularPage(page, context);
    const basePage = new BasePage(page);

    await test.step('Navigate to page', async () => {
      await basePage.navigateToPage();
    });

    await test.step('Validate Login button, its color, state & is visible', async () => {
      await angularPage.validateLoginButton();
      await angularPage.validateOktaLogin();
    });
  });
});
