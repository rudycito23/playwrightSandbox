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

    await test.step('Validate Explore the Docs link contains text & is visible', async () => {
      await angularPage.validateDisplayExploreDocsLink();
    });

    await test.step('Navigate to url', async () => {
      await angularPage.validateUrl('https://angular.dev/');
    });
  });
});
