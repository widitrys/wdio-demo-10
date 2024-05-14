import { $ } from '@wdio/globals'

class sauceLoginPage {

    get inputPassword () {
        return $('#password');
    }

    get userName () {
        return $('#user-name');
    }

    get loginButton () {
        return $('#login-button');
    }

    async login(username,password){
        await this.userName.setValue(username)
        await this.inputPassword.setValue(password)
        await this.loginButton.click()

    }

    async open (){
        await browser.url('https://www.saucedemo.com/')
    }
}

export default new sauceLoginPage();