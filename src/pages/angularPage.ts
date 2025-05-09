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
    this.loginButton = page.getByTestId('login-button');
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
    // Ensure the login button is visible
    await expect(this.loginButton).toBeVisible();
    await expect(this.loginButton).toContainText('Loading...');

    // Wait for the button to become enabled
    await expect(this.loginButton).toBeEnabled({ timeout: 10000 });

    // Ensure the login button contains the text "Login"
    await expect(this.loginButton).toContainText('Login');

    // Confirm the button's background color is .bg-green-500
    const backgroundColor = await this.loginButton.evaluate((button) =>
        window.getComputedStyle(button).backgroundColor
    );
    expect(backgroundColor).toBe('rgb(34, 197, 94)');

    // Click the login button
    await this.loginButton.click();
}

  async validateOktaLogin() {
    await expect(this.signInButton).toBeVisible({ timeout: 10000 });
  }
}
