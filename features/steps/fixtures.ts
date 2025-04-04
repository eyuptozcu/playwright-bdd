import { test as base, createBdd } from 'playwright-bdd';
import winston, { Logger } from "winston";
import { Page } from "@playwright/test";




type Fixtures = {
  // @ts-ignore
  // page: Page,
  // logger: Logger
}

export const fixture = base.extend<Fixtures>({
    // add fixtures here
    // logger: async ({}, use) => {
    //     const logger = new Logger({
    //         level: 'info',
    //         format: winston.format.json(),
    //         transports: [
    //             new winston.transports.Console()
    //         ]
    //     });
    //     await use(logger);
    // },
    // page: async ({logger}, use) => {
    //     const { chromium } = await import('playwright');
    //     const browser = await chromium.launch();
    //     const page = await browser.newPage();
    //     await use(page);
    // }
});

export const { Given, When, Then } = createBdd(fixture);
