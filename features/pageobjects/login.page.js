const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage{
    /**
     * define selectors using getter methods
     */
    get hamburgerMenuIcon () {
        return $('//*[@content-desc="View menu"]')
    }

    get loginOption () {
        return $('//android.widget.TextView[@text="Log In"]')
    }
    get inputUsername () {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]');
    }

    get btnSubmit () {
        return $('//*[@content-desc="Tap to login with given credentials"]');
    }

    get productPageView () {
        return $('//*[@text="Products"]')
    }

    async loginPage () {
        await driver.startActivity("com.saucelabs.mydemoapp.android","com.saucelabs.mydemoapp.android.view.activities.MainActivity")
    }

    async errorMessage (errorMessageType) {
        return $(`//*[@resource-id="com.saucelabs.mydemoapp.android:id/${errorMessageType}ErrorTV"]`)
    }
}

module.exports = new LoginPage();
