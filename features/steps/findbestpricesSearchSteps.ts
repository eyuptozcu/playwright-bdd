import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
import HomePage from '../pages/homepage';
import { getEnv } from '../../helper/env/env';

let homePage: HomePage;

Given('I navigate to home page', async ({page}) => {
    console.log(getEnv());
    console.log("...");
    console.log(process.env.BASEURL);
    homePage = new HomePage(page);
    await homePage.navigateTo();
  });
  
  When('I input {string} into search box', async ({}, product: string) => {
    await homePage.searchForProduct(product);
  });
  
  Then('I click on Let\'s Find Best Deals button', async ({}) => {
    
  });
  
  Then('I click on Sort by Prices button', async ({}) => {
    // Step: And I click on Sort by Prices button
    // From: features/homepage.feature:13:5
  });
  
  Then('I see the first item\'s price in Wickes column is {int}', async ({}, arg: number) => {
    // Step: Then I see the first item's price in Wickes column is 70
    // From: features/homepage.feature:14:5
  });