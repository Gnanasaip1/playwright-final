import { createBdd } from 'playwright-bdd';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

const { When, Then } = createBdd();

let inventoryPage: InventoryPage;
let cartPage: CartPage;
let selectedCount: string;

When('User adds random products to cart', async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    selectedCount = await inventoryPage.addRandomProductsToCart();
});

Then('Cart badge should match selected product count', async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    await inventoryPage.verifyCartCount(selectedCount);
});

When('User opens cart', async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    await inventoryPage.openCart();

    cartPage = new CartPage(page);
    await cartPage.verifyCartPage();
});