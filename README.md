# MyReads Project

## Overview

This app was built for the [Udacity Front-End Web Developer Nanodegree Program](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001). The purpose of the project is to demonstrate understanding of the basic structure and operation of a React-based app.

The project is built on a [starter repo](https://github.com/udacity/reactnd-project-myreads-starter) containing all the CSS and HTML markup that may be used but omits the React code that is required to complete the project. The provided code will demonstrate a static HTML page of the finished application, but with no interactive functionality.

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

## Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## How to Load the App

The project uses Node.js and the Create-React-App starter. 

Once Node is installed, navigate to the directory where you want to store the app

* `git clone https://github.com/ChiaraTorta/my-reads-react.git`  

* `npm install`

Once all of the dependencies have been installed you can launch the app with

* `npm start`

A new browser window should automatically open displaying the app. If it doesn't, navigate to http://localhost:3000/ in your browser.


**This project is licensed under the terms of the MIT license.**
