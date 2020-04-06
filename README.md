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
    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="24.266" viewBox="0 0 166 24.266">
        <path id="logo" d="M1.615,8.791H0v-3.5H1.615V4.979C1.615.583,5.607,0,7.76,0A9.037,9.037,0,0,1,9.105.09V3.857a5.642,5.642,0,0,0-.718-.045c-.9,0-2.243.135-2.243,1.3v.179H8.612v3.5H6.145V18.973H1.66L1.615,8.791ZM84.951,18.973V10.182a4.574,4.574,0,0,0-.762-2.871,2.941,2.941,0,0,0-2.332-.9,3.8,3.8,0,0,0-3.05,1.121,5.226,5.226,0,0,0-.987,3.543v7.849H76.564V9.778c0-2.243-1.032-3.409-3.095-3.409a3.645,3.645,0,0,0-3.05,1.211,6.4,6.4,0,0,0-.942,3.9v7.4H68.266V5.337H69.3L69.567,7.4h.09a3.68,3.68,0,0,1,1.57-1.525,4.732,4.732,0,0,1,2.243-.538c2.108,0,3.454.807,4.082,2.377H77.6a4.676,4.676,0,0,1,1.749-1.749,5.088,5.088,0,0,1,2.512-.628A4.279,4.279,0,0,1,85.131,6.5a5.35,5.35,0,0,1,1.076,3.723v8.746Zm7.984-1.121A4.547,4.547,0,0,0,96.3,16.64a4.679,4.679,0,0,0,1.256-3.409v-1.3l-2.332.09a8.93,8.93,0,0,0-4.037.9,2.518,2.518,0,0,0-1.211,2.332,2.634,2.634,0,0,0,.762,1.974,3.556,3.556,0,0,0,2.2.628Zm4.934,1.076L97.555,16.6h-.09A6.43,6.43,0,0,1,95.4,18.434a5.594,5.594,0,0,1-2.512.538,4.323,4.323,0,0,1-3.05-1.032,3.649,3.649,0,0,1-1.076-2.781,3.472,3.472,0,0,1,1.615-3.05,8.852,8.852,0,0,1,4.71-1.166l2.557-.09v-.673a4.664,4.664,0,0,0-.762-2.871,3.109,3.109,0,0,0-2.512-.987,8.577,8.577,0,0,0-3.857,1.032l-.449-1.076a10.453,10.453,0,0,1,4.351-1.032,4.279,4.279,0,0,1,3.274,1.166A5.123,5.123,0,0,1,98.766,10v8.926Zm9.509.045a5.655,5.655,0,0,1-4.485-1.794,7.316,7.316,0,0,1-1.615-5.068,6.864,6.864,0,0,1,1.7-4.934,5.827,5.827,0,0,1,4.62-1.839,9.072,9.072,0,0,1,3.319.583L110.607,7a9.265,9.265,0,0,0-3.005-.583,4.5,4.5,0,0,0-3.723,1.525,5.978,5.978,0,0,0-1.256,4.126,6.52,6.52,0,0,0,1.256,4.261,4.309,4.309,0,0,0,3.543,1.525,8.721,8.721,0,0,0,3.409-.673V18.3a7.9,7.9,0,0,1-3.454.673Zm15.205,0v-8.7a4.246,4.246,0,0,0-.852-2.96,3.384,3.384,0,0,0-2.646-.9,4.468,4.468,0,0,0-3.5,1.211,5.612,5.612,0,0,0-1.121,3.947v7.4h-1.211V0h1.211V5.876l-.045,1.7h.09a4.4,4.4,0,0,1,1.884-1.749,6.616,6.616,0,0,1,2.826-.538c3.05,0,4.575,1.615,4.575,4.889v8.746l-1.211.045Zm16.82,0v-8.7a4.246,4.246,0,0,0-.852-2.96,3.384,3.384,0,0,0-2.646-.9,4.468,4.468,0,0,0-3.5,1.211,5.612,5.612,0,0,0-1.121,3.947v7.4h-1.211V5.293H131.1l.224,2.108h.09c.852-1.39,2.422-2.108,4.665-2.108,3.05,0,4.575,1.615,4.575,4.889v8.746H139.4Zm9.509-12.6a3.929,3.929,0,0,0-3.095,1.256,5.841,5.841,0,0,0-1.346,3.678h8.3a5.743,5.743,0,0,0-1.032-3.633,3.413,3.413,0,0,0-2.826-1.3Zm.359,12.559a5.752,5.752,0,0,1-4.53-1.794,6.68,6.68,0,0,1-1.615-4.8,7.823,7.823,0,0,1,1.57-5.113,5.142,5.142,0,0,1,4.261-1.929,4.506,4.506,0,0,1,3.723,1.66,6.944,6.944,0,0,1,1.346,4.485v.987h-9.643a5.431,5.431,0,0,0,1.3,3.947,4.514,4.514,0,0,0,3.633,1.435,9.123,9.123,0,0,0,2.018-.179,14.189,14.189,0,0,0,2.2-.673v1.121a11.364,11.364,0,0,1-2.108.673,11.01,11.01,0,0,1-2.153.179ZM166,15.205a3.247,3.247,0,0,1-1.346,2.781,6.758,6.758,0,0,1-3.9.987,9.358,9.358,0,0,1-4.261-.807v-1.3a9.474,9.474,0,0,0,4.261,1.032,5.524,5.524,0,0,0,3.005-.673,2.051,2.051,0,0,0,1.032-1.749c0-3.274-5.921-2.6-7.58-5.248a3.082,3.082,0,0,1-.4-1.615,2.734,2.734,0,0,1,1.256-2.377,6.171,6.171,0,0,1,3.543-.9,10.74,10.74,0,0,1,4.126.807l-.449,1.121a9.76,9.76,0,0,0-3.678-.807A5.347,5.347,0,0,0,159,7a1.662,1.662,0,0,0-.942,1.525c0,3.185,5.876,2.512,7.535,5.2a2.51,2.51,0,0,1,.4,1.48Zm-38.484,3.768h-1.211V5.293h1.211ZM126.933.942a.9.9,0,1,1-.9.9A.9.9,0,0,1,126.933.942ZM59.968.045h1.48v24.22h-1.48ZM48.71,10.271a1.629,1.629,0,0,0-1.525-1.66,2.16,2.16,0,0,0-2.2,1.66ZM47.14,5.293c3.857,0,6.01,2.691,6.01,6.324,0,.449-.09,1.3-.09,1.3H44.853a2.9,2.9,0,0,0,3.05,2.377,6.016,6.016,0,0,0,3.454-1.346l1.749,2.915a8.442,8.442,0,0,1-5.562,2.063,6.762,6.762,0,0,1-7.176-6.818A6.509,6.509,0,0,1,47.14,5.293ZM29.648,13.77s1.884,1.884,3.9,1.884c.628,0,1.032-.179,1.032-.628,0-1.076-6.683-1.435-6.683-5.7,0-2.826,2.691-4.037,5.517-4.037,2.2,0,5.2.628,5.2,2.96v1.3h-3.9V9.195c0-.359-.583-.628-1.211-.628s-1.211.224-1.211.628c0,1.346,6.773,1.166,6.773,5.562,0,2.646-2.377,4.216-5.472,4.216A8.149,8.149,0,0,1,27.674,16.6l1.974-2.826Zm-18.121-4.4a.542.542,0,0,0-.583-.583H9.957v-3.5h4.171c1.3,0,1.884.583,1.884,1.884V13.1c0,2.826,4.261,2.6,4.261,0v-7.8h4.485v9.015a.542.542,0,0,0,.583.583h.987v4.082H22.382A1.827,1.827,0,0,1,20.5,17.134V16.64h-.045a4.575,4.575,0,0,1-4.171,2.287c-2.646,0-4.754-1.256-4.754-5.024V9.374Z">
      </path>
    </svg>
  </a>
</p>

## Thanks to our Collaborators

### Maintainer

* [jagatmachines](https://github.com/jagatmachines) -
**Jagatjyoti G Tuladhar** &lt;jagat.tula@gmail.com&gt; (he/him)

### Collaborators
