Product Search SPA
============

Assumptions
------------------------------------------------
* Requires node, a recent version like v18.15.0 should do the trick
* This SPA uses Vite, which is a brilliant dev server with an extremely quick hot reloading
* I will use React and typescript for the application
* The developer has basic knowledge of React and how to fetch APIs
* The design matches the fairly bare-bone styles of the mock-up. In a real application apply more styling
* There was a choice between using table and flex elements, I decided for flex for mobile-friendly display

Out of scope - what is not included
------------------------------------------------
* Search options for 
  * Different languages
  * Results per page
  * Endless scrolling (which can be implemented with the offset and limit api parameters)

Instructions to developer
------------------------------------------------
* First Identify the components on the page:
  * a title
  * a search bar
    * label
    * search field
    * search button
  * a results table
    * result headers
    * result rows
* Create React functional components for all these (this is now the recommended approach over classes)
* Optionally, first hard-code the data if desired before hooking it up to the API for quicker design - the api can be slow for some titles like disney
* Add Styling to match the design
* Add calls to the real API and link to the state 
* Add error handling for 404 errors when no results found
* Disable search button when a search is in progress to avoid multiple api calls
* Show a loading indicator


Install and run application locally
------------------------------------------------
Run following commands on the command line:

`npm install`

`npm run dev`


Open a browser window with the specified url, `http://127.0.0.1:8080/` 

Run application via docker
------------------------------------------------
Run following commands on the command line:
`make up`

Open a browser window with the specified url, `http://127.0.0.1:8080/` 

Run application via docker
------------------------------------------------
Run following command on command line:
`make up`

Open a browser window with the specified url, `http://127.0.0.1:8080/`


Run tests
------------------------------------------------
Run following command on one command line:
`make up`

Then run following command on another command line:
`make run-tests`