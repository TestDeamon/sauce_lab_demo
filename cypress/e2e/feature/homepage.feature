Feature: https://www.saucedemo.com/v1/

  Background: 
    Given I visit saucedemo
  Scenario: visiting the homepage
    Then I should see the swablabs logo

  Scenario: Login as standard user
    When I login as a standard user
      |username   | password |
      |standard_user  | secret_sauce|
    Then I should be logged into the application

  Scenario: Login as a locked out user
    When I login as a logged out user
      |username   | password |
      |locked_out_user  | secret_sauce|
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."


@focus   
  Scenario Outline: Login with different details
    Then The user enters the username as "<username>" and password as "<password>"

  Examples:
      |username   | password |
      |standard_user  | secret_sauce|
      |locked_out_user  | secret_sauce|