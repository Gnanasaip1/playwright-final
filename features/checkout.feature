
@checkout @regression
Feature: Checkout

  Scenario: Complete checkout
#    Given User launches SauceDemo
    When User logs in as "validUser"
    And User adds random products to cart
    And User opens cart
    And User proceeds to checkout
    And User completes checkout information
    And User finishes the order
    Then Order should be placed successfully
