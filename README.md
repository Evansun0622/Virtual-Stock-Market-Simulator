# Stock Simulator
  
Comp426 Final Project
  
## Introduction
  
This web app is intended to provide a simulation of the real stock market. Every user is given an initial amount of 100,000 dollars, which they can use to purchase a variety of stocks. User can also search for a particular stock and view its information. For each stock, we provide a line chart of its price for the last three years so that user can do some analysis. We also provide the most recent market news for user to make better decisions.
   
## Tech Stack
 
We used React.js as our frontend framework, and Express, Node as the backend framework. We store user's information in Mongodb and the deploy the database on MongoDB Atlas.
The 3rd party API that we used are https://finnhub.io/ and https://www.tiingo.com/, one for retreiving the latest market news and one for retrieving the stock price.

## API Documentation

### Market News
Sample Requests:
/news?category=general
/news?category=forex&minId=10

Sample Response:
```
[
  {
    "category": "technology",
    "datetime": 1596589501,
    "headline": "Square surges after reporting 64% jump in revenue, more customers using Cash App",
    "id": 5085164,
    "image": "https://image.cnbcfm.com/api/v1/image/105569283-1542050972462rts25mct.jpg?v=1542051069",
    "related": "",
    "source": "CNBC",
    "summary": "Shares of Square soared on Tuesday evening after posting better-than-expected quarterly results and strong growth in its consumer payments app.",
    "url": "https://www.cnbc.com/2020/08/04/square-sq-earnings-q2-2020.html"
  },
  {
    "category": "business",
    "datetime": 1596588232,
    "headline": "B&G Foods CEO expects pantry demand to hold up post-pandemic",
    "id": 5085113,
    "image": "https://image.cnbcfm.com/api/v1/image/106629991-1595532157669-gettyimages-1221952946-362857076_1-5.jpeg?v=1595532242",
    "related": "",
    "source": "CNBC",
    "summary": "\"I think post-Covid, people will be working more at home, which means people will be eating more breakfast\" and other meals at home, B&G CEO Ken Romanzi said.",
    "url": "https://www.cnbc.com/2020/08/04/bg-foods-ceo-expects-pantry-demand-to-hold-up-post-pandemic.html"
  },
  {
    "category": "top news",
    "datetime": 1596584406,
    "headline": "Anthony Levandowski gets 18 months in prison for stealing Google self-driving car files",
    "id": 5084850,
    "image": "https://image.cnbcfm.com/api/v1/image/106648265-1596584130509-UBER-LEVANDOWSKI.JPG?v=1596584247",
    "related": "",
    "source": "CNBC",
    "summary": "A U.S. judge on Tuesday sentenced former Google engineer Anthony Levandowski to 18 months in prison for stealing a trade secret from Google related to self-driving cars months before becoming the head of Uber Technologies Inc's rival unit.",
    "url": "https://www.cnbc.com/2020/08/04/anthony-levandowski-gets-18-months-in-prison-for-stealing-google-self-driving-car-files.html"
  }
  }]
```
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
