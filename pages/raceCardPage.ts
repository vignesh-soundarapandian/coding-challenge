import { Page, Locator, expect } from "@playwright/test"
export default class raceCardPage {
    readonly page: Page
    readonly betName1: Locator
    readonly betName2: Locator
    readonly betPrice1: Locator
    readonly betPrice2: Locator
    readonly close: Locator
    readonly betSlip: Locator
    readonly betTitle: Locator
    readonly betOdds: Locator

    constructor(page: Page) {
        this.page = page
        this.betName1 = this.page.getByTestId('racecard-outcome-name').nth(1)
        this.betPrice1 = this.page.getByTestId('racecard-outcome-0-L-price').nth(1)
        this.betName2 = this.page.getByTestId('racecard-outcome-name').nth(2)
        this.betPrice2 = this.page.getByTestId('racecard-outcome-0-L-price').nth(2)
        this.close = this.page.getByTestId('betslip-header-hide')
        this.betSlip = this.page.getByTestId('header-betslip-touchable')
        this.betTitle = this.page.getByTestId('betslip-bet-title')
        this.betOdds = this.page.getByTestId('betslip-bet-odds')

    }

    async addBets() {
        const name1 = await this.betName1.textContent();
        const price1 = await this.betPrice1.textContent();
        await this.betPrice1.click()
        await this.close.click()

        const name2 = await this.betName2.textContent();
        const price2 = await this.betPrice2.textContent();
        await this.betPrice2.click()

        await expect(this.betSlip).toContainText('2')
        await this.betSlip.click()
        expect(this.betTitle.filter({has: this.page.getByText(name1)})).toHaveCount(1)
        expect(this.betOdds.filter({has: this.page.getByText(price1)})).toHaveCount(1)
        expect(this.betTitle.filter({has: this.page.getByText(name2)})).toHaveCount(1)
        expect(this.betOdds.filter({has: this.page.getByText(price2)})).toHaveCount(1)
    }

}