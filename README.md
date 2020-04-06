[![Gitter](https://badges.gitter.im/covidnepalopensource/community.svg)](https://gitter.im/covidnepalopensource/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# COVID-19 NEPAL

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
The project can now be started by running the start script
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

## Changelog

[Learn about the latest improvements][changelog].

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

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Fusemachines

<h3 align="center">Special Sponsors</h3>
<!--special start-->

<p align="center">
  <a href="https://fusemachines.com" target="_blank">
    <img width="260px" src="data:image/png;base64,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">
  </a>
</p>

## Thanks to our Collaborators

### Maintainer

* [jagatmachines](https://github.com/jagatmachines) -
**Jagatjyoti G Tuladhar** &lt;jagat.tula@gmail.com&gt; (he/him)

### Collaborators
