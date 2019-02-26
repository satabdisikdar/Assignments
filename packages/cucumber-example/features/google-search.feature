Feature: Amazon

Scenario: Open Amazon Home Page
  Given I open Amazon website
  When "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in" is the title
  Then Search box is there

Scenario: Search for ECHO Dot Product
  Given I am on home page
  When I search for "jbl earphones" product and click on submit
  Then Results of the search are displayed

Scenario: Validate the price
  Given I am on results page and filter section is present
  When I set the Maximum price as "2500" in filter section and also sort in an order
  Then Get the price of the first product having price < 2000
  

