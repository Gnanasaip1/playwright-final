import { createBdd } from 'playwright-bdd';
import users from '../test-data/users.json';
import { LoginPage } from '../pages/LoginPage';

const { When, Then } = createBdd();

let loginPage: LoginPage;
let currentUser: any;

When('User logs in as {string}', async ({ page }, userType: string) => {
    loginPage = new LoginPage(page);

    currentUser = users.users.find((u: any) => u.userType === userType);

    if (!currentUser) {
        throw new Error(`User not found in users.json: ${userType}`);
    }

    await loginPage.login(currentUser.username, currentUser.password);
});

Then('Login result should be {string}', async ({ page }, expected: string) => {
    loginPage = new LoginPage(page);

    if (expected === 'success') {
        await loginPage.verifyProductsPage();
    } else {
        await loginPage.verifyErrorMessage(currentUser.errorMessage);
    }
});