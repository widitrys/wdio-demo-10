import cartPage from "../pageobjects/sauce-cart.js"
import dashboardPage from "../pageobjects/sauce-dashboard.js"
import sauceLoginPage from "../pageobjects/sauce-login.js"


describe('Page Object  Demo Saucelabs', async () => {
    it('Login with Page Object', async () => {

        await sauceLoginPage.open()
        await sauceLoginPage.login("standard_user","secret_sauce")
        await dashboardPage.validateOnPage()
        await dashboardPage.clickAddCart()
        await dashboardPage.clickCartButton()
        await cartPage.validateOnCart()
    })
})

