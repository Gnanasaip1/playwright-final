import { Page, expect } from '@playwright/test';


export class CheckoutPage {

    constructor(private page: Page) {}

    firstName = this.page.locator('#first-name');
    lastName = this.page.locator('#last-name');
    postalCode = this.page.locator('#postal-code');
    continueButton = this.page.locator('#continue');
    finishButton = this.page.locator('#finish');
    completeHeader = this.page.locator('.complete-header');
    errorMessage = this.page.locator('[data-test="error"]');

    // async enterCheckoutDetails() {
    //     await this.firstName.fill('Sai');
    //     await this.lastName.fill('Gnana');
    //     await this.postalCode.fill('');
    //     await this.continueButton.click();
    // }

    async enterCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async verifyCheckoutOverview() {
        await expect(this.page).toHaveURL(/checkout-step-two/);
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async verifyOrderSuccess() {
        await expect(this.completeHeader)
            .toHaveText('Thank you for your order!');
    }

    async verifyErrorDisplayed() {
        await expect(this.errorMessage).toBeVisible();
    }

    async verifyErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}