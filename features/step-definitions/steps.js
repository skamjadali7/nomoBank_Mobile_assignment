const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

// const pages = {
//     login: LoginPage
// }

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });
Given('I Land to login page',async()=>{
    await loginPage.loginPage()
})
Given('I click to menu for login',async()=>{
    await loginPage.hamburgerMenuIcon.click()
})

Then('I click Login option',async()=>{
    await loginPage.loginOption.click()
})

Then('I enter username {string}',async(userName)=>{
    await loginPage.inputUsername.addValue(userName)
})

Then('I enter password {string}',async(password)=>{
    await loginPage.inputPassword.addValue(password)
})

When('I click submit button',async()=>{
    await loginPage.btnSubmit.click({force:true})
})

Then('I verify success login',async()=>{
    await expect(loginPage.productPageView).toHaveText('Products')
})

Then('I verify username error message',async()=>{
    const message = await loginPage.errorMessage('name')
    const isDisplayed = await message.isDisplayed()
    expect(isDisplayed).toBe(true)
})

Then('I verify password error message',async()=>{
    const message = await loginPage.errorMessage('password')
    const isDisplayed = await message.isDisplayed()
    expect(isDisplayed).toBe(true)
})

