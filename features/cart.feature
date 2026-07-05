
@cart @regression
Feature: Cart

  Scenario: Add random products to cart
#    Given User launches SauceDemo
    When User logs in as "validUser"
    And User adds random products to cart
    Then Cart badge should match selected product count
    When User opens cart
