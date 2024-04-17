import { test , expect} from '@playwright/test';

test("standard user is taken to the products page upon successful login",
    async ( { page }) => {
        await page.goto('https://www.saucedemo.com/');  
        await page.locator('#user-name').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        //Locate the element using css selector based on its text
        await expect(page.locator('text=Products')).toBeVisible();
        page.close();
    }
);