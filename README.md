# Stock Simulator

Comp426 Final Project

## Introduction

This web app is intended to provide a simulation of the real stock market. Every user is given an initial amount of 100000 dollars, which they can use to purchase a variety of stocks. For each stock, we provide a line chart of its price for the last three years so that user can do some analysis. We also provide the most recent market news for user to make better decisions.

## Tech Stack

we used React.js as our frontend framework, and Express, Node as the backend framework. We store user's information in Mongodb and the deploy the database on MongoDB Atlas.
The external API that we used are https://finnhub.io/ and https://www.tiingo.com/, one for retreiving the latest market news and one for retrieving the stock price.

## Available Scripts

In the project directory, you can run:

### `cd client && npm run build`

Builds the app for production. <br>
The build is minified and the filenames include the hashes. <br>
Your app is ready to be deployed! <br>

### `node server/server.js`

Renders the app using Express.js server.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console. <br>

This app is also deployed on Heroku. <br>
Go to https://comp426-final-project.herokuapp.com to view it online.
