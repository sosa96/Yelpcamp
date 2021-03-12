# Yelpcamp
Yelpcamp is a full-stack (M.E.N.), RESTful web application project created alongside the Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/course/the-web-developer-bootcamp/).

## Live Demo

You can preview a [live demo on heroku](https://powerful-plains-81049.herokuapp.com/)

## Features

* All guests can view site

* Guests can login and signup

* Only authorizated users can create, edit and delete posts or reviews

* Edit, Update, and Delete routes have authentication and authorization

* Every campgrounds location is showed on a map

## Getting started

Create an `.env` file and add values to the following variables:

```
CLOUDINARY_CLOUD_NAME=<cloudinary name>
CLOUDINARY_KEY=<cloudinary key>
CLOUDINARY_SECRET=<cloudinary secret>
MAPBOX_TOKEN=<mapbox token>
```

In a terminal window, initialize a MongoDB

Install all dependencies using npm:

`npm install`

And then run the application with

`npm start`
