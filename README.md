[![Gitter](https://badges.gitter.im/covidnepalopensource/community.svg)](https://gitter.im/covidnepalopensource/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# COVID-19 NEPAL ADMIN

The project has 3 sub division to complete a full cycle
1) [COVID Nepal User](https://github.com/Fusemachines/covid-nepal-web)
2) [COVID Nepal Backend](https://github.com/Fusemachines/covid-nepal)
3) [COVID Nepal Admin for Data Validation](https://github.com/Fusemachines/covid-nepal-web-admin)

## Quick Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Frontend Tech Stack
- [React with react-hooks](https://reactjs.org/docs/hooks-intro.html)
- [Typescript](https://www.typescriptlang.org/)

### First time setup

After you have cloned the repo, move into the project directory and run the yarn command to install the dependencies
```
> cd covid-nepal-web
> yarn
```
The project needs .env file and you can now be started by running the start script
```
> yarn start
```

### Folder structure

```
covid-nepal-web
├── README.md
├── node_modules
├── OneSDK                            // push notification
├── package.json
├── .gitignore
├── editorconfig
├── .env                              // please check the sample env files
├── .sample.env
├── yarn.lock
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── @types                        // user defined interfaces
    ├── components                    // common components
    ├── config                        // environment configuration
    ├── constants                     // routes and other constants included
    ├── customHooks
    ├── i18n                          // multi-language setup
    ├── interface
    ├── routes                        // routes defined
    ├── scss                          // stylesheet and sass
    ├── services                      // api calls
    ├── utils                         // utility functions
    ├── App.tsx
    ├── index.scss
    ├── react-app-env.d.ts
    ├── Router.tsx
    ├── index.tsx
    └── serviceWorker.ts
    ├── setupTest.ts
```

### Available Scripts

#### `yarn start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

#### `yarn test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn format`
Run prettier to make your code look all pretty.
See the section about [prettier](https://prettier.io/) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

<!-- ## Changelog

[Learn about the latest improvements][changelog]. -->

## Want to help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our
guidelines for [contributing][contributing] and then check out one of our issues in the [hotlist: community-help](https://github.com/Fusemachines/covid-nepal-web/labels/hotlist%3A%20community-help).
[Thank you!](https://github.com/Fusemachines/covid-nepal-web/graphs/contributors)


[contributing]: https://github.com/Fusemachines/covid-nepal-web/blob/master/CONTRIBUTING.md
[changelog]: https://github.com/Fusemachines/covid-nepal-web/blob/master/CHANGELOG.md

Reference from:
1) [Angular](https://github.com/angular/angular)
1) [create-react-app](https://github.com/angular/angular)

## Stay In Touch

- [Twitter](https://twitter.com/covidnepalorg)
- [Facebook](https://www.facebook.com/covidnepalorg)
- [Github Project Board](https://github.com/Fusemachines/covid-nepal-web/projects/1)

## License

The source code is licensed under GPL v3. License is available [here](https://github.com/Fusemachines/covid-nepal-web/blob/master/LICENSE).

Copyright (c) 2020-present, Fusemachines

<h3 align="center">Started At and Supported By</h3>
<!--special start-->

<p align="center">
  <a href="https://fusemachines.com" target="_blank">
    <img width="260px" src="https://fusemachines.com/assets/img/fusemachines-logo.png">
  </a>
</p>

## Thanks to our Collaborators

### Maintainer

* [prashannajabara](https://github.com/prashannajabara) -
**Prashanna Ja Ba Ra** &lt;prashanna.rana@fusemachines.com&gt; (he/him)

### Maintainer

### <a name="collaborators"></a> Collaborators

* [jagatmachines](https://github.com/jagatmachines) -
**Jagatjyoti G Tuladhar** &lt;jagajyoti@fusemachines.com&gt; (he/him)
* [fuserabin](https://github.com/fuserabin) - **Rabin Bhandari**  &lt;rabin@fusemachines.com&gt; (he/him)
* [sanishkarmacharya](https://github.com/sanishkarmacharya) - **Sanish Karmacharya** &lt;sanish@fusemachines.com&gt; (he/him)
* [ashutoshdjoshi](https://github.com/ashutoshdjoshi) - **Ashutosh Joshi** &lt;ashutosh@fusemachines.com&gt; (he/him)
