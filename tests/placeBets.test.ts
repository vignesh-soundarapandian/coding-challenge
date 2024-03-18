import test, { expect } from "@playwright/test"

import HomePage from "../pages/homePage"
import RaceCardPage from "../pages/raceCardPage"

test.describe('Place bets', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    //validate 2 bets added successfully to the bet slip
    test("Place 2 bets for the racecard", async ({ page }) => {
        const homePage = new HomePage(page)
        const raceCardPage = new RaceCardPage(page)
        await homePage.navigateToRaceCard()
        await raceCardPage.addBets()
    })

})
