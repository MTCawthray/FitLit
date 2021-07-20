# FitLit
An app to track and display fitness data.

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Learning Goals](#learning-goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [Setup instructions](#setup-instructions)
+ [Contributors](#contributors)
+ [Challenges & Wins](#challenges-and-wins)

## Overview
FitLit is an app to display a user's fitness data in one easy to read dashboard.
There are three _'cards'_ where a user can keep track of their steps, hydration and sleep information and see this info displayed as numbers and graphs.
+ The _Steps_ card displays the user's daily step goal and stride length, as well as the average step goal for all users.
+ The _Hydration_ card displays the amount of water(in ounces) a user drank on the current day, as well as a graph that shows the amount of water consumed each day for the most recent week.
+ The _Sleep_ card displays the number of hours slept and the quality of sleep for a user on the most recent day, as well as graphing these values for the most recent week. It also displays the average number of hours slept and quality of sleep for a user over the whole use of the app!

+ The user can also see their friend's listed on the right side of the Desktop display.

FitLit can be used at home on a user's computer or on the go with a mobile sized dashboard.

## Examples
This is the the app on a laptop screen:

![1219 x 771](https://user-images.githubusercontent.com/81891209/126407239-eca78c2f-b7f4-478f-91d7-c6b5470f85a5.png)

This is the app on a mobile screen (iphone X):

![375 x 812](https://user-images.githubusercontent.com/81891209/126407322-393d6ed0-af3c-4821-a0dd-5ef8838bd09b.png)

## Learning goals
+ Implement ES6 classes that communicate to each other as needed
+ Use object and array prototype methods to perform data manipulation
+ Create a dashboard that is easy to use and displays information in a clear way on multiple screens
+ Write modular, reusable code that follows SRP (Single Responsibility Principle)
+ Implement a robust testing suite using TDD
+ Make network requests to API endpoints to retrieve and manipulate data

## Future features
Here is a short list of functionality that we would like to implement in the future:
  + User login and a New User Account sign up form.
  + All users can upload a profile picture.
  + User can select a date and date range to display their data from.
  + A light mode/ dark mode toggle switch.
  + Draggable _card_ layout.

## Technologies used
  + HTML
  + CSS
  + ES6 javaScript
  + Node
  + NPM
  + Charts.js
  + GitHub and GitHub projects
  + Mocha
  + Chai
  + Linter

## Setup Instructions
For the FitLit APP:
1. Fork this repo by clicking the fork button on the top right corner of the page.
2. Next, ```git clone [ssh key]``` in your terminal to add this repo to your local machine.
3. Run ```npm install``` to install all of this projects dependencies.
4. Run ```npm start``` in your terminal and paste ```http://localhost:8080/``` into your browser to view your page in the browser.
For the FitLit API:
1. Clone the [FitLit API repository](https://github.com/turingschool-examples/fitlit-api) on your local machine (be sure to do this outside of the FitLit directory that your app runs in) and ```CD``` into that directory.
2. Type ```npm install``` into a _new terminal window_ to install all of the necessary dependencies.
3. Type ```npm start``` into your _new terminal window_ to start this local server. (Be sure to leave this running while you use the FitLit app so that it has access to the API data.)



*For those who would like to contribute to this FitLit repository:
+ We have provided test files to help create our classes and class methods. You can run these tests by typing the command ```npm test test/[selected test file]``` in your terminal.
+ Please run ```npm run lint``` and fix any suggestions it returns before pushing to the repo!

Our Class Structure is set up like this:
![FitLit Class Structure](https://user-images.githubusercontent.com/81891209/126389791-0f436b72-d630-4849-8250-4a653468e96d.png)

## Contributors
  + Maria DelSignore (code)
  + Mark Cawthray (code)
  + Stacey Potten (reviewer)
  + Nik Seif (Project Manager)

## Challenges and Wins
Wins:
  + Using TDD (Test Driven Development) to create our classes and class methods ensured almost seamless integration into our ```scripts.js``` functions.
  + Creating Media Queries to render our app on different screen sizes.
  + Fetching API data and inputing that into our classes.
  + Connecting data to charts from the Chart.js package

Challenges:
  + Determining best practices for styling media queries.
  + Finding out where to access the data returned by our fetch calls.

  [Return to top](#fitlit)
