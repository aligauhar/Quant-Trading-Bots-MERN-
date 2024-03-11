# Instructions
1. clone repo from here or CI-Dockerization-With-GithubActions Repo
2. cd to frontend run npm i
3. cd to backend run npm i
4. follow backend/config/config_sample.env
5. follow frontend/config/config_sample.env
6. npm run dev for fronend and backend

or 

1. pull the dockers repo from aliguahar/frontend and aliguahar/backend
2. run frontend on port 8080 and backend on 8000 <- ports config are necessary to integrate frontend with backend


# When Deploying
1. Set the vercel variables in secrets
2. if cloned from here then just push again if not the follow the steps
  1. Add verecl-hosting.yml file in your project
  2. go through the vercel-changes file and implement the changes

# *****What will you get here?
# Backend and Database
This is a basic tamplet that make the initial mern stack website building setup easy
It includes JSON API for handling frontend contend
Mongoose DataBase integration with Atlas
Express bakend with controller, routes, Models and errorHandlers with simple form implementation

# Frontend
Vite-React frontend with components and api callind for connecting the backend through axon

# CD - Deploymet on vercel hosting
Automatic Web Hosting on  Vercel with Github Action
