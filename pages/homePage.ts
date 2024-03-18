import { Page, Locator } from '@playwright/test';

export default class HomePage {
    readonly page: Page;
    readonly eventTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.eventTitle = this.page.getByTestId('carousel-1-cell-1-event-title').nth(1);
    }

    async navigateToRaceCard() {
        await this.eventTitle.click();
    }
}