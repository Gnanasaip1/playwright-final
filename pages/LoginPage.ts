import { Page, expect } from '@playwright/test';


export class LoginPage {

    constructor(private page: Page) {}

    usernameInput = this.page.locator('#user-name');
    passwordInput = this.page.locator('#password');
    loginButton = this.page.locator('#login-button');
    productsTitle = this.page.locator('.title');
    errorMessage = this.page.locator('[data-test="error"]')

    // async openApplication() {
    //     await this.page.goto('/');
    // }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyProductsPage() {
        await expect(this.productsTitle).toHaveText('Products');
    }


    async verifyErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}