import { BrowserContext, Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class AngularPage extends BasePage {
  readonly exploreDocsLink: Locator;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    super(page);
    this.exploreDocsLink = this.page.getByRole('link', {
      name: 'Explore the Docs',
    });
    this.context = context;
  }

  async clickExploreDocsLink() {
    await this.exploreDocsLink.click();
  }

  async validateUrl(url: string) {
    const pagePromise = this.context.waitForEvent('page');

    await this.clickExploreDocsLink();

    const newPage = await pagePromise;

    await expect(newPage).toHaveURL(url);

    await newPage.close();
  }

  async validateDisplayExploreDocsLink() {
    await expect(this.exploreDocsLink).toBeVisible({ timeout: 10000 });
    await expect(this.exploreDocsLink).toContainText('Explore the Docs');
  }
}
