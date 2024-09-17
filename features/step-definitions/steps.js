import { Given,When,Then } from '@wdio/cucumber-framework';
import {expect} from '@wdio/globals'
import {LoginPage} from '../pageobjects/login.page'
const loginPage = new LoginPage()
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

