import { $ } from '@wdio/globals'

class dashboardPage {
    get buttonAddToCart () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get buttonCart (){
        return $('#shopping_cart_container')
    }

    async validateOnPage (){
        await expect(this.buttonAddToCart).toHaveText("Add to cart")
    }

    async clickAddCart(){
        await this.buttonAddToCart.click()
    }

    async clickCartButton (){
        await this.buttonCart.click()
    }
}

export default new dashboardPage();