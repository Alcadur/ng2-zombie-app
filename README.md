# ng2-zombie-app

Simple application with <a href="https://angular.io/" target="_blank">Angular 2.0</a>, <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a> and <a href="https://webpack.github.io/" target="_blank">webpack</a>

This application is very similar to Angular 1.x version (<a href="https://github.com/Alcadur/angular-zombie-app">this</a>)

To create data I user <a href="http://www.json-generator.com/">JSON generator</a> and picture from google.

--

To run application You need <a href="https://nodejs.org/">node</a> in version >= 4.x (with ES6 support)

Run `npm install` and when all dependencies will be downloaded just run `webpack` and `node server.js`, it will run server on `localhost:3000`

--

If you want shadule for Youre app remove:

- dev/sass/config
- dev/sass/parsials
- dev/scripts/cemeteries
- dev/scripts/services
- dev/scripts/zombies

Remove all from `dev/sass/all.scss`, rename `dev/scripts/zombie-app/ZombieApp.ts`, remove unnecessary imports and route configuration 
