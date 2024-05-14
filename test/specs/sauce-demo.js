describe ('Sauce Demo login', async () => {
    it('Login Valid User', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextBox = await browser.$('#user-name')
        const passwordTextBox = await browser.$('#password')
        const loginButton = await browser.$('#login-button')

        await usernameTextBox.setValue("problem_user")
        await passwordTextBox.setValue("secret_sauce")
        await loginButton.click()


        const pageText = await browser.getElementText('body')
        expect(pageText).toHaveText(expect.stringContaining('Add to Cart'))

    })

    it('Login Failed User', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextBox = await browser.$('#user-name')
        const passwordTextBox = await browser.$('#password')
        const loginButton = await browser.$('#login-button')

        await usernameTextBox.setValue("problem_user")
        await passwordTextBox.setValue("salah user")
        await loginButton.click()


        const pageText = await browser.getElementText('body')
        expect(pageText).toHaveText(expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))

    })
})