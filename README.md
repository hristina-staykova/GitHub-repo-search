# GitHub-repo-search

Browser based React app that serarches for a given repository name and displays details about it via data received from GitHub GraphQL APIv4.

### Requirements: 

- the user should provide a repository name, its owner and user's GitHub personal token for authorization

- the app displays details about:

  - pull requests - title, state, author, created at, description, URL
  
  - open issues - title, author, created at, comments (author & text), URL
  
  - closed issues - title, author, created at, comments (author & text), URL
  
- others:

  - clicking on issue title displays extra information - author, created at, comments (author & text), URL, search form (through acordion component)
  
  - the user is able to search within the comments (search while typing)
  
  ### Technologies used:
  
  - #### JavaScript
  
  - #### React.js & Ant Design
  
  - #### Node.js
  
  ### Useful Instructions:
  
  - clone the GitHub repo
  
  - run "npm install"
  
  - run "npm start"
  
  or check the deployed app on Heroku - https://react-github-graphql.herokuapp.com/
