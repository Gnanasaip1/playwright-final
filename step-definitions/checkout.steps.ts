import { createBdd } from 'playwright-bdd';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const { When, Then } = createBdd();

let cartPage: CartPage;
let checkoutPage: CheckoutPage;

When('User proceeds to checkout', async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.clickCheckout();
});

When('User completes checkout information', async ({ page }) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutDetails('Sai', 'Gnana', '567341');
    await checkoutPage.verifyCheckoutOverview();
});

When('User finishes the order', async ({ page }) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.finishOrder();
});

Then('Order should be placed successfully', async ({ page }) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifyOrderSuccess();
});

Then('Checkout error message should be {string}', async ({ page }, expectedMessage: string) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifyErrorDisplayed();
    await checkoutPage.verifyErrorMessage(expectedMessage);
});