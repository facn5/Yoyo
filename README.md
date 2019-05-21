# **yoyo app**
Helping parents find classes and events suited to their child's age and superpowers!

<img src="https://user-images.githubusercontent.com/32282170/58073375-0d0b9e00-7bab-11e9-937f-d812fcbb1c87.png" alt="yoyo app" width="300px" height="auto">

## How to run locally
* Clone this repo
* **npm i** (or **sudo npm i**) in both home directory and /server directory (there are 2 package.json files)
* back in home directory, **npm run dev** to compile React/Webpack/Babel front-end and start Node/Express server.

## Stakeholders
* Parents
* Teachers
* Creative Professionals (Artists, Actors, Clowns, DJs, etc)

## Problems
* Parents often don't know what kinds of activities will help in their child's development or where to find them.
* Independent teachers and creative professionals often don't have entrepreneurial or marketing skills to help them build their clientele and business.

## Solution
With **yoyo app** we hope to help parents and teachers by providing an online platform for event listings, filtered by age, location, and special skills (we call them superpowers!), as well as child developmental information.

## Users Can:
* [] Easily understand the House Rules of **yoyo app**
* [] Sign-up and Sign-in to their account
* [] Parents and Teachers can see and edit their own profile page
* [] Parents can see the profile page of teacher(s) for a given event
* [] Teachers can add new events to the Database
* [] Parents can receive a full list of available Events and click to receive more detailed information about the Event.
* [] Parents can filter event list by their home area or another given area
* [] Parents can receive a customized/suggested list of events according to their child(ren)'s language, age and/or superpowers
* [] Parents can receive free developmental info according to their child's age
* [] Parents can book an event: one-time or per term (usually 8 to 12 weeks)

## Design
TBA

## Technology Stack
*  [x] Full MERN stack application with separate ports/routing for front-end (React) and back-end (Node/Express server)

### Front-end
* [x] React
* [x] React DOM
* [x] React Router
* [x] Bundler and Transpiler: Webpack 4 and Babel 7 implemented from scratch
* [x] ESLint
* [] Jest

### Back-end
* [x] Node.js/Express server
* [] JSON Web Token (JWT), cookies, bcrypt
* [x] Axios, Async/Await
* [] Travis CI

### Database
* [] Mongo DB with Atlas/mlab (Database as a service)

### Hosting
* [] Heroku (or AWS)

## Stretch Goals
* Add calendar feature and filter by timeframe (i.e. by day or week)
* As a parent I can give feedback and rating for teachers and Events
* Photo Gallery for Events: allow teachers to post and parents to download
* Choose the language of the app.  Desired support for Israeli market: Arabic, English, Hebrew, Russian
* Easy signup with Google/Facebook
