import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    checkoutButton = this.page.locator('#checkout');

    async verifyCartPage() {
        await expect(this.page).toHaveURL(/cart/);
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}