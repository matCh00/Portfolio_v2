# Portfolio

React + TypeScript

### [matCh00.github.io/Portfolio_v2](https://match00.github.io/Portfolio_v2/)

--------------------------

## App

React
+ `npx create-react-app appName`
+ `cd appName`
+ `npm start`


--------------------------

## Github Pages

config
+ _package.json_
    + "homepage": "https://match00.github.io/Portfolio_v2/",
+ `npm install --save gh-pages`
+ _package.json_ ➜ scripts
    + "predeploy": "npm run build",
    + "deploy": "gh-pages -d build",
+ `npm run predeploy`
+ `npm run deploy`

GitHub
+ Pages
    + _branch_  gh-pages