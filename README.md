![43301cff81334c92a19bbe9b98b251d4](https://user-images.githubusercontent.com/3163892/114476406-c4ef2d80-9bbf-11eb-9c7a-e1eea57d1a27.png)

Changing the way people think about porfolio websites. Spark the revolution!

## Tech Stack
 - Django
 - React
 - Postgres
 - Heroku




# Blltn-brd

- [Blltn-brd](blltn-brd)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Font-end](#front-end)
    - [Technologies Used](#technologies-used)
    - [Dependencies](#dependencies)
  - [Back-end](#back-end)
    - [Technologies Used](#technologies-used-1)
    - [Dependencies](#dependencies-1)
    - [Authentication](#authentication)
    - [Routes Available](#routes-available)

##Installation

Information and instructions on setting up a development enviornment can be found in the [wiki](https://github.com/SEI-2121/blltn-brd/wiki).

##Deployment

For information on Netify deployment see the [wiki @ Netify](https://github.com/SEI-2121/blltn-brd/wiki)

For Heroku deployment see the [wiki @ Heroku Url](https://github.com/SEI-2121/blltn-brd/wiki)

##Front-end

###Technologies Used

- [ReactJS](https://reactjs.org/)
- [React-bootstrap](https://react-bootstrap.github.io/)
- [Netlify](https://www.netlify.com/)


Dependencies

- [ReactJS](https://reactjs.org/) - A client-side JavaScript library for building interfaces
 - A package providing dynamic routing functionality for web apps
 - [React-Router](https://www.npmjs.com/package/react-router) - A package providing dynamic routing functionality for web apps
 - [React-Router-Dom](https://www.npmjs.com/package/react-router-dom) - A package containing the DOM bindings for react-router

- [React-bootstrap](https://react-bootstrap.github.io/) - React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

## Back-end


### Technologies Used

- [Python](https://www.python.org/)
- [Heroku](https://www.heroku.com/) - to host a deployed version of the API remote
- [PostgreSQL](https://www.postgresql.org/) - An open source SQL database

### Dependencies

- [Django](https://www.djangoproject.com/) - A high level Python Web Framework
- [Django Rest Framework](https://www.django-rest-framework.org/) - A Django extension for building APIs

### Authentication

In order to authenticate, you need to create an account or log in with an email and password on the route `users/create`

Once created, you will recieve a token as a response

Add that token to your request headers in this format:



| **Key** | **Value** |
| ------- | --------- |
| Authorization | token *your token here* |

And you will have full access to the API!

### Routes Available

              
The following routes are available

| **Route name**  | **URL**                 | **HTTP Verb** | **Description**                                                         |
| --------------- | ----------------------- | ------------- | ----------------------------------------------------------------------- |
| Index*          | /{resource}             | GET           | Display a list of all Project or Comment                                |
| Show ID*        | /{resource}/{:id}       | GET           | Display a specific Project or Comment based on their ID                 |
| Create*         | /{resource}/create      | POST          | Add new Project or Comment to the database, returns the newly created entry |
| Edit By Id*     | /{resource}/{:id}       | PATCH         | Update a particular Game or Review, returns the new entry               |
| Delete By Id*   | /{resource}/{:id}       | DELETE        | Delete a particular Game or Review                                      |
| Login           | /users/login            | POST          | Logs in with a username and password, returns an authentication token   |
| Create          | /users/create           | POST          | Creates a user and returns an authentication token                      |

Routes marked with `*` need authentication to be accessed
