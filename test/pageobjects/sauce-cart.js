import { $ } from '@wdio/globals'

class cartPage {
    get buttonCheckOut () {
        return $('#checkout');
    }
    async validateOnCart (){
        await expect(this.buttonCheckOut).toHaveText("Checkout")
    }
}

export default new cartPage();