import {fixture} from './../steps/fixtures';
import { expect, Page} from "@playwright/test";


export default class HomePage {

    private page;

    constructor(page: Page) { 
        this.page = page;
    }

    async navigateTo(){
        await this.page.goto('https://findbestprices.co.uk/');
    }

    async searchForProduct(product: string){
        await this.page.getByRole('textbox', { name: 'Find best prices for DIY' }).fill(product);
    }

    async clickOnLetsFindBestDealsButton(){
        await this.page.getByRole('button', { name: 'Let\'s Find Best Deals' }).click();
    }

    async clickOnSortByPricesButton(){
        await this.page.getByRole('button', { name: 'Sort by Prices' }).click();
    }

    async getFirstItemPriceInWickesColumn(){
        const price =   await this.page.getByRole('cell', { name: '£70.0 Product Image Hyundai HYC1600E Bar Electric Chainsaw', exact: true }).locator('span').innerText();
        await expect(price).toBe('£70.0');
    }

}