import { Page, expect } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    cartIcon = this.page.locator('.shopping_cart_link');
    cartBadge = this.page.locator('.shopping_cart_badge');


    async addRandomProductsToCart() {

        const addButtons = this.page.locator('button:has-text("Add to cart")');

        const totalProducts = await addButtons.count();

        const randomCount = Math.floor(Math.random() * totalProducts) + 1;

        for (let i = 0; i < randomCount; i++) {
            const button = addButtons.first();
            await expect(button).toBeVisible();
            await expect(button).toBeEnabled();
            await button.click();
        }

        return randomCount.toString();
    }

    async verifyCartCount(count: string) {
        await expect(this.cartBadge).toHaveText(count); //
    }

    async openCart() {
        await this.cartIcon.click();
    }
}