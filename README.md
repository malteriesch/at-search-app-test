Product Search SPA
============

Assumptions
------------------------------------------------
* Requires node, a recent version like v18.15.0 should do the trick
* This SPA uses Vite, which is a brilliant dev server with an extremely quick hot reloading
* I will use React and typescript for the application
* The developer has basic knowledge of React and how to fetch APIs
* The design matches the fairly bare-bone styles of the mock-up. In a real application apply more styling
* There was a choice between using table and flex elements, I decided for flex to leave room for mobile-friendly design

Out of scope - what is not included
------------------------------------------------
* Tests
* Search options for 
  * Different languages
  * Results per page
  * Endless scrolling (which can be implemented with the offset and limit api parameters)
  * Mobile-friendly version - flex instead of tables are used for this implementation - apply media-selectors for mobile-friendly layout

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


Install and run application
------------------------------------------------
Run following commands on the command line:

`npm install`

`npm run dev`

You should see something like 

```

> at-search@0.0.0 dev /home/malte/projects/at-search
> vite


  VITE v4.1.4  ready in 697 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help


```
Open a browser window with the specified url, `http://127.0.0.1:5173/` in this case

