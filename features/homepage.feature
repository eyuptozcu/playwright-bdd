Feature: Playwright Home Page

  # Scenario: Check title
  #   Given I am on Playwright home page
  #   When I click link "Get started"
  #   Then I see in title "Installation"


  @timeout:60000
  Scenario: Search 
    Given I navigate to home page
    When I input "chainsaw" into search box
    Then I click on Let's Find Best Deals button
    And I click on Sort by Prices button
    Then I see the first item's price in Wickes column is 70
