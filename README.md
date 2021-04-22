![43301cff81334c92a19bbe9b98b251d4](https://user-images.githubusercontent.com/3163892/114476406-c4ef2d80-9bbf-11eb-9c7a-e1eea57d1a27.png)

Changing the way people think about porfolio websites. Spark the revolution!

## Tech Stack
 - Django
 - React
 - Postgres
 - Heroku


Blltn-brd

Installation

Information and instructions on setting up a development enviornment can be found in the wiki.

Deployment

For information on Netify deployment see the wiki @ Netify

For Heroku deployment see the wiki @ Heroku Url

Front-end

Technologies Used

React
React bootstrap
Netify


Dependencies

React - A client-side JavaScript library for building interfaces
React-Router - A package providing dynamic routing functionality for web apps
React-Router-Dom - A package containing the DOM bindings for react-router
React-bootstrap - React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

Back-end


Technologies Used

Python
Heroku - to host a deployed version of the API remote
PostgreSQL - An open source SQL database

Dependencies

Django - A high level Python Web Framework
Django Rest Framework - A Django extension for building APIs

Authentication

In order to authenticate, you need to create an account or log in with an email and password on the route users/create

Once created, you will recieve a token as a response

Add that token to your request headers in this format:

Key	                           Value
Authorization	       token your token here

And you will have full access to the API!

Routes Available

The following routes are available

Route name	 URL	          HTTP Verb	           Description


Index*	      /{resource}	       GET	   Display a list of all Project or Comment
Show ID*	  /{resource}/{:id}	   GET     Display a specific Project or Comment
                                           based on their ID
Create*	      /{resource}/create   POST	   Add new Project or Comment to the
                                           database, returns the newly created entry
Edit By Id*	  /{resource}/{:id}	   PATCH   Update a particular Game or Review,
                                           returns the new entry
Delete By Id* /{resource}/{:id}	   DELETE  Delete a particular Game or Review
Login	      /users/login	       POST	   Logs in with a username and password,
                                           returns an authentication token
Create	      /users/create	       POST	   Creates a user and returns an
                                            authentication token
                                            
Routes marked with * need authentication to be accessed
