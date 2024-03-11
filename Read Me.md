# Instructions
1. clone repo from here or CI-Dockerization-With-GithubActions Repo
2. cd to frontend run npm i
3. cd to backend run npm i
4. add secrets to  backend/config/config_sample.env
5. add secrets to frontend/config/config_sample.env or to the component/form.jsx 
6. npm run dev for fronend and nodemon start for backend

or 

1. pull the dockers repo from aliguahar/frontend and aliguahar/backend
2. run frontend on port 8080 and backend on 8000 <- ports config are necessary to integrate frontend with backend


# When Deploying
1. if cloned from here then just push again if not then follow the steps
  1. Add verecel-hosting.yml file in your project
  2. dont add config.json file in your gitignore rather chane he values to secretslike FRONTEND_URL = secrets.env.FRONTEND_URL
  3. add the frontend link to the backend config file
  4. add the backend link in component/form.jsx link (config file was not working else set there
  5. add the secrets in the github and vercel setting

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
