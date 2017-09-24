# EKA TECHNICAL CHALLENGE - 2

## DEMO

## SETUP

$ brew install dockerformac
$ brew install docker-compose
$ git clone ...
$ cd ...
$ docker-compose up -d

go to localhost:3000

## TECHNOLOGIES USED

### Required
* React
* Redux
* Webpack
* Babel
* React-Router
* Node
* Express
* Bookshelf
* PostgreSQL

### OTHER
* knex
* feathers
* docker/docker-compose
* passport

## SPECIFICS
1. When the User requests the homepage, the user is taken to a generic landing page. On the landing page, there should be a button that redirects the user to the FIRST form of the onboarding process.
  - Complete
2. There should be a total of 3 forms in the onboarding process. For reference, we'll refer to these 3 forms as Form1, Form2, and Form3.
  - Complete
3.  Each form will collect a specific set of information:
  * Form1 will collect username, password, and e-mail address.
  * Form2 will collect first name, last name, and telephone number.
  * Form3 will collect address (street address, city, state, zip).
    - Complete
4.  At the bottom of each form should be a SAVE button that saves the information that the user just entered.
  - Complete
5.  When the user clicks on the SAVE button on each form (Form1, Form2, Form3), it should send a request to your API/server that saves that user's information into the PostgreSQL DB that it is hooked up to.
  - Complete
6.  When the user clicks on the SAVE button on each form, it should take them to the next form in the series.
  * eg. User fills out Form1 and clicks save. Info should be saved in DB and user is then taken to Form2.
  * eg. User fills out Form3 (last in the series) and clicks save. Info should be saved in DB and User is then taken back to the landing page.
    - Complete

OPTIONAL: Form validation. All of this data that we're collecting is necessary to make our future features work, so we need all this information! Prevent users from putting in gibberish information like 'haha' for their e-mail address (should be a proper e-mail address), password validation, and also prevent them from continuing to the next form until they've filled out all the fields in the current form.
  - Almost Complete
  - Client Side Form Validation is complete
  - TODO: AsyncValidation For Username input does not currently have proper error handling, however email does.

OPTIONAL: Users don't like being restricted. What if the user doesn't have time to sit through our lengthy onboarding process all at one go? Devise a way for a user to save their progress and continue onboarding at a later time.
  - Almost Complete
  - TODO: User can go back and update their progress, however the previous information is not loaded up into the forms 

OPTIONAL: Passwords should never be stored in databases unencrypted. Encrypt the user's password before it ever hits the database.
  - Complete

OPTIONAL: Oops. I'm a silly user. I finished Form2 but realized that I just gave you the wrong information! Devise a way for users to move back to forms that they have previously completed in order to modify their information.
  * eg. I finished Form1 and am now on Form2. I should be able to go back to Form1 and change my information there. I should _not_ be able to move forward to Form3 without first completing Form2.
  - Complete

OPTIONAL: Is your code working the way it should be? Write some tests using Nighwatch.js that covers the full onboarding process.
  - Did not attempt
  - TODO: Write tests

OPTIONAL: Deploy your application on Heroku.



