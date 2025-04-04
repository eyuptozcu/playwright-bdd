import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
import HomePage from '../pages/homepage';

let homePage: HomePage;


Given('I am on Playwright home page', async ({ page}) => {
  await page.goto('https://playwright.dev');
});

When('I click link {string}', async ({ page }, name: string) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, text: string) => {
  await expect(page).toHaveTitle(new RegExp(text));
});
