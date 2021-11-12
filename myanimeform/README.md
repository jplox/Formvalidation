# project name
Form Validation

An application is used for registering new user and if your already an existing user you can login into it

# Project Status
This project is currently in development. New users can sucessfully registered himself and if hes already an existing user he can login into his account.

# Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install this will install node_module 
note that install node_modules both in myanimeform(front end) and server(backend)
nodemon module is installed as dev dependencies here
you can install package.json using command npm init --y

To Run Test Suite:
npm test .

To Start Server:
npm start . and this application runs on http://localhost:1108
 


# folder structure
 contains two folder i.e myanimeform(front end part) and server(backend part).
 In myanimeform(folder):
 assets contains images.
 MyComponent folder contain all the JSX Components which can be reusable.
 Helper folder contains all the helper files which is used for from validation and to post data to backend.

 In server folder:
 models folder contain schema part.
 index file contain connection to mongodb.


