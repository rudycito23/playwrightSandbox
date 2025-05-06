import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page
    
    constructor (page: Page) {
        this.page = page;
    }

    async navigateToPage () {
        await this.page.goto('http://localhost:4200/');
    }
    
}