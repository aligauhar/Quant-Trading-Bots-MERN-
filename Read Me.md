# Instructions
1. clone repo from here or CI-Dockerization-With-GithubActions Repo
2. cd to frontend run npm i
3. cd to backend run npm i
4. add secrets to  backend/config/config.env
5. add secrets to frontend/config/config.env or to the component/form.jsx 
6. npm run dev for fronend and nodemon start for backend

# When Deploying
After complete development for pushing again
  1. Add Github/workflow/verecel-hosting.yml file in your project
  2. change the value of FRONTEND_URL of the deployed frontend url of vercel 
  3. if you want to resrict the url for pirticular you can config in the cors present in backend/app.js
  4. Install MongoDB and set the URL to your database from Atlas <span style="color:red;">(make sure to do it correctly; I wasted a day solving it as a bug)</span>
  5. set the enviornment variable of the config file in vercel and github secrets as config file will not be dumped on repo

# *****What will you get here?
# Backend and Database
This is a basic tamplet that make the initial mern stack website building setup easy
It includes JSON API for handling frontend content
Mongoose DataBase integration with Atlas
Express bakend with controller, routes, Models and errorHandlers with simple form implementation

# Frontend
Vite-React frontend with components and api calling for connecting the backend through axon

# CD - Deploymet on vercel hosting
Automatic Web Hosting on  Vercel with Github Action
*** For Auto Dockerization CI, see [Auto Dockerization](https://github.com/aligauhar/MERN-Templet-with-CI-Dockerization-with-GithubActions).
