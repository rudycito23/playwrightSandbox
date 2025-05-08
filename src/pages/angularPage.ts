import { BrowserContext, Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class AngularPage extends BasePage {
  // buttons
  readonly exploreDocsLink: Locator;
  readonly loginButton: Locator;
  readonly signInButton: Locator;

  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    super(page);
    // buttons
    this.exploreDocsLink = page.getByRole('link', {
      name: 'Explore the Docs',
    });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.signInButton = page.getByRole('button', {
      name: 'Sign in',
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

  async validateLoginButton() {
    await expect(this.loginButton).toBeVisible({ timeout: 10000 });
    await expect(this.loginButton).toContainText('Login');
    await this.loginButton.click();    
  }

  async validateOktaLogin() {
    await expect(this.signInButton).toBeVisible({ timeout: 10000 });
  }
}
