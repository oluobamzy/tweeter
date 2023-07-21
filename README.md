# Tweeter Project

# Tweeter - Twitter Clone Single-Page App

Tweeter is a single-page app designed as a clone of Twitter, created purely for educational purposes. 
The primary goal of this app is to help master essential concepts such as jQuery, Ajax, HTTP servers, 
modular programming, and front-end design. It serves as an excellent exercise for client-side programming 
and understanding the basics of web development.

## Dependencies
To run the Tweeter app, you will need the following dependencies:

1. Express: A minimalist web framework for Node.js, which simplifies the process of building web applications and APIs.

2. Body Parser: A middleware for Express that parses incoming request bodies in a middleware before handlers, making it easy to handle form data.

3. Chance: A library that generates random data, useful for creating mock content in the app.

4. md5: A hashing function used for generating MD5 hash signatures. In this app, it might be used for secure password storage (even though this is not a production-ready security solution).
5. Node 5.10.x or above

### Installation
Follow these steps to set up and run Tweeter:

1. Clone this repository to your local machine.

2. Make sure you have Node.js and npm (Node Package Manager) installed on your system.

3. Navigate to the project's root directory using the terminal/command prompt.
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.

### Features
Tweeter aims to replicate some of the core features of Twitter while keeping it simple. The app may include the following functionalities:

1. Creating new tweets with a character limit.
2. Displaying tweets in reverse-chronological order.
3. Liking and retweeting tweets.

### The primary technologies used are:

1. jQuery: A popular JavaScript library for DOM manipulation and event handling.
2. Ajax: Asynchronous JavaScript and XML, used for making API calls without page refresh.
3. HTTP Servers: The backend is built using Express, providing a RESTful API for the client-side app.
4. Modular Programming: The codebase is structured into modular components to improve code organization and maintainability.
5. Front-end Design: While the focus is on functionality rather than aesthetics, basic CSS styling was applied for a pleasant user experience.

## Screenshots
["A screenshot of the Desktop screen size supporting sizes above 1024px"]("https://github.com/oluobamzy/tweeter/blob/e7da6afc8fed2b0913452659d5ec8d1095e0331a/Docs/Desktop-screen-sized%20view.png")
["Error message screen for input limit"]("https://github.com/oluobamzy/tweeter/blob/e7da6afc8fed2b0913452659d5ec8d1095e0331a/Docs/Error-message%20screen%20for%20exceeding%20input%20limit.png")
