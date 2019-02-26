
const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const locators = client.page.webElements();
/*import { client } from 'nightwatch-api';
import { Given, When, Then } from 'cucumber';*/

Given('I open Amazon website', async function () {
  await client.url('https://www.amazon.in/?ref=icp_country_us').maximizeWindow();
  /*await client.assert.visible('//a[@id="icp-touch-link-country"]').click('//a[@id="icp-touch-link-country"]');
  await client.click("//span[@class='a-button-text a-declarative']");
  await client.click("//li[@class='a-dropdown-item' and @tabindex='0']//a[@tabindex='-1' and @id='icp-selected-country_6']");
  await client.waitForElementVisible("//div[@class='a-popover-wrapper']//input[@class='a-button-input' and @type='submit']", 4000).click("//div[@class='a-popover-wrapper']//input[@class='a-button-input' and @type='submit']");
  */
});

When('{string} is the title', async function (text) {
    await client.assert.title(text);
  
});

Then('Search box is there', async function () {
  await locators.assert.visible('@searchBox');

});

Given('I am on home page', async function () {
  await client.assert.title('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
});

When('I search for {string} product and click on submit', async function (product) {
    await locators.setValue('@searchBox', product).click('@goButton');    
});

Then('Results of the search are displayed', async function () {
  await locators.waitForElementPresent('@onResultspage',7000).assert.visible('@onResultspage');
});

Given('I am on results page and filter section is present', async function () {
  
  await locators.assert.visible('@filterSection');

});

When('I set the Maximum price as {string} in filter section and also sort in an order', async function (productMaxprice) {
  await locators.setValue('@maxPriceFilter', productMaxprice).click('@goButtonFilter').waitForElementVisible('@priceSortFilter', 5000)
                          .click('@priceSortFilter');
  
});

Then('Get the price of the first product having price < {int}', async function (price) {
  //await locators.waitForElementVisible('@goButton', 5000);
  await locators.waitForElementVisible('@firstProdPrice', 5000).getText('@firstProdPrice', (v) => {   //
    
    var x = parseInt(v.value.replace(',',''),10);
      console.log(" INTEGER" + x)
      client.assert.ok(x <= price);  
  })
    

});

