# Introduction

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/mgechev/angular-seed.svg?branch=master)](https://travis-ci.org/mgechev/angular-seed)
[![Build Status](https://ci.appveyor.com/api/projects/status/jg5vg36w0klpa00e/branch/master?svg=true)](https://ci.appveyor.com/project/mgechev/angular2-seed)
[![Join the chat at https://gitter.im/mgechev/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mgechev/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/mgechev/angular-seed.svg)](https://david-dm.org/mgechev/angular-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular-seed/dev-status.svg)](https://david-dm.org/mgechev/angular-seed#info=devDependencies)

Provides fast, reliable and extensible starter for the development of Angular projects.

`angular-seed` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Supports multiple Angular applications with shared codebase in a single instance of the seed.
- Official Angular i18n support.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- **Ahead-of-Time** compilation support.
- **Tree-Shaking** production builds with Rollup.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using @types.
- Has autoprefixer and css-lint support.
- Provides full Docker support for both development and production environment
- Support for Angular Mobile Toolkit

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
$ git clone --depth 1 https://github.com/mgechev/angular-seed.git
$ cd angular-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc


# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod

# dev build of multiple applications (by default the value of --app is "app")
$ npm start -- --app baz
$ npm start -- --app foo
$ npm start -- --app bar
```
_Does not rely on any global dependencies._

# How to start with AoT compilation

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start the seed with AoT use:

```bash
# prod build with AoT compilation, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.aot
```

# Tree-shaking with Rollup

This application provides full support for tree-shaking your production builds with Rollup, which can drastically reduce the size of your application. This is the highest level of optimization currently available.

To run this optimized production build, use:

```bash
# prod build with AoT compilation and Rollup tree-shaking, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.rollup.aot
```

Your project will be compiled ahead of time (AOT), and then the resulting bundle will be tree-shaken and minified. During the tree-shaking process Rollup statically analyses your code, and your dependencies, and includes the bare minimum in your bundle.

**Notes**
- Beware of non-static/side-effectful imports. These cannot be properly optimized. For this reason, even though tree-shaking is taking place the developer still needs to be careful not to include non-static imports that are unnecessary, as those referenced imports will always end up in final bundle. Special attention should be given to RxJs, which makes heavy use of non-static/side-effectful imports: make sure you only add the operators you use, as any added operators will be included in your final production bundle.
- UMD modules result in code that cannot be properly optimized. For best results, prefer ES6 modules whenever possible. This includes third-party dependencies: if one is published in both UMD and ES6 modules, go with the ES6 modules version.
- During a production build, CommonJs modules will be automatically converted to ES6 modules. This means you can use them and/or require dependencies that use them without any issues.

# Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

## How to build and start the dockerized version of the application

The Dockerization infrastructure is described in the `docker-compose.yml` (respectively `docker-compose.production.yml`.
The application consists of two containers:
- `angular-seed` - In development mode, this container serves the angular app. In production mode it builds the angular app, with the build artifacts being served by the Nginx container
- `angular-seed-nginx` - This container is used only production mode. It serves the built angular app with Nginx.

## Development build and deployment

Run the following:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at http://localhost:5555

## Production build and deployment

Run the following:

```bash
$ docker-compose -f docker-compose.production.yml build
$ docker-compose -f docker-compose.production.yml up angular-seed   # Wait until this container has finished building, as the nginx container is dependent on the production build artifacts
$ docker-compose -f docker-compose.production.yml up -d angular-seed-nginx  # Start the nginx container in detached mode
```

Now open your browser at http://localhost:5555

# Table of Contents

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [How to start with Aot](#how-to-start-with-aot-compilation)
- [Tree-shaking with Rollup](#tree-shaking-with-rollup)
- [Dockerization](#dockerization)
  + [How to build and start the dockerized version of the application](#how-to-build-and-start-the-dockerized-version-of-the-application)
  + [Development build and deployment](#development-build-and-deployment)
  + [Production build and deployment](#production-build-and-deployment)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [Tools documentation](#tools-documentation)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Advanced Seed Option](#advanced-seed-option)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)
  - [Wiki Contributors](#wiki-contributors)
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
$ npm start -- --env-config ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# How to extend?

Visit the [Wiki page](https://github.com/mgechev/angular-seed/wiki) of the project.

# How to update?
```
git remote add upstream https://github.com/mgechev/angular-seed
git pull upstream master
```

# Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# Make sure you do have Java in your PATH (required for webdriver)

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Advanced Seed Option

An [advanced option to this seed exists here](https://github.com/NathanWalker/angular-seed-advanced) which mirrors the latest changes here but adds core support for:

- [ngrx/store](https://github.com/ngrx/store) RxJS powered state management, inspired by **Redux**
- [ngrx/effects](https://github.com/ngrx/effects) Side effect model for @ngrx/store
- [ng2-translate](https://github.com/ocombe/ng2-translate) for i18n
  - Usage is optional but on by default
  - Up to you and your team how you want to utilize it. It can be easily removed if not needed.
- [angulartics2](https://github.com/angulartics/angulartics2) Vendor-agnostic analytics for Angular applications.
  - Out of box support for [Segment](https://segment.com/)
    - When using the seed, be sure to change your `write_key` [here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/index.html#L24)
  - Can be changed to any vendor, [learn more here](https://github.com/angulartics/angulartics2#supported-providers)
- [lodash](https://lodash.com/) Helps reduce blocks of code down to single lines and enhances readability
- [NativeScript](https://www.nativescript.org/) cross platform mobile (w/ native UI) apps. [Setup instructions here](#nativescript-app).
- [Electron](http://electron.atom.io/) cross platform desktop apps (Mac, Windows and Linux). [Setup instructions here](#electron-app).

You may use it to learn how to extend this seed for your own use cases or use the advanced seed if your project needs those features.

# Examples

Forks of this project demonstrate how to extend and integrate with other libraries:

 - https://github.com/mgechev/switching-to-angular2 - code samples for the book ["Switching to Angular 2"](https://www.packtpub.com/web-development/switching-angular-2).
 - https://github.com/DeviantJS/angular2-seed-postcss - Extending PostCSS with precss / cssnext for Sass-like features.
 - https://github.com/AngularShowcase/angular2-sample-app - sample Angular application.
 - https://github.com/AngularShowcase/ng2-bootstrap-sbadmin - ng2-bootstrap-sbadmin.
 - https://github.com/AngularShowcase/angular2-seed-ng2-highcharts - Simple application including a [Highcharts](http://www.highcharts.com) graph.
 - https://github.com/tarlepp/angular-sailsjs-boilerplate-frontend-angular2 - Example application for [Sails.js](http://sailsjs.org/) integration.
 - https://github.com/ludohenin/ng2-wp-blog - Angular application using Wordpress [JSON-API](http://v2.wp-api.org) backend..
 - https://github.com/AngularShowcase/angular2-seed-example-mashup - Angular application demonstrating the use of [Redux](http://redux.js.org/), [D3](https://github.com/mbostock/d3), [socket io](https://github.com/socketio), [Google Charts](https://developers.google.com/chart/), and [RxJs](https://github.com/Reactive-Extensions/RxJS).
 - https://github.com/tiagomapmarques/angular2-seed-phaser/tree/releases - integration with [Phaser](http://phaser.io/).
 - https://github.com/vyakymenko/angular2-seed-express - integration with [Express](https://expressjs.com/) full-stack development.
 - https://github.com/UIUXEngineering/angular2-jspm-typescript-seed - integration with [JSPM](http://jspm.io/).
 - http://ngbot.io - a chat bot built with angular-seed.
 - [angular-seed-inspinia](https://github.com/DmitriyPotapov/angular-seed-inspinia) - integration with custom design template

# Directory Structure

```
.
├── .docker
│   ├── dist-build.development.dockerfile  <- Dockerfile for development environment
│   └── dist-build.production.dockerfile   <- Dockerfile for production environment
├── .dockerignore              <- ignore file for the docker builds
├── LICENSE
├── README.md
├── appveyor.yml
├── docker-compose.production.yml  <- docker-compose file for production environment
├── docker-compose.yml.        <- docker-compose file for development environment
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── about
│       │   │   ├── about.component.css
│       │   │   ├── about.component.e2e-spec.ts
│       │   │   ├── about.component.html
│       │   │   ├── about.component.spec.ts
│       │   │   ├── about.component.ts
│       │   │   ├── about.module.ts
│       │   │   ├── about.routes.ts
│       │   │   └── index.ts
│       │   ├── app.component.e2e-spec.ts
│       │   ├── app.component.html
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── home
│       │   │   ├── home.component.css
│       │   │   ├── home.component.e2e-spec.ts
│       │   │   ├── home.component.html
│       │   │   ├── home.component.spec.ts
│       │   │   ├── home.component.ts
│       │   │   ├── home.module.ts
│       │   │   ├── home.routes.ts
│       │   │   └── index.ts
│       │   ├── i18n.providers.ts
│       │   ├── main-prod.ts
│       │   ├── main.ts
│       │   ├── operators.ts
│       │   ├── shared
│       │   │   ├── config
│       │   │   │   └── env.config.ts
│       │   │   ├── index.ts
│       │   │   ├── name-list
│       │   │   │   ├── index.ts
│       │   │   │   ├── name-list.service.spec.ts
│       │   │   │   └── name-list.service.ts
│       │   │   ├── navbar
│       │   │   │   ├── index.ts
│       │   │   │   ├── navbar.component.css
│       │   │   │   ├── navbar.component.html
│       │   │   │   └── navbar.component.ts
│       │   │   ├── shared.module.ts
│       │   │   └── toolbar
│       │   │       ├── index.ts
│       │   │       ├── toolbar.component.css
│       │   │       ├── toolbar.component.html
│       │   │       └── toolbar.component.ts
│       │   └── system-config.ts
│       ├── assets
│       │   ├── data.json
│       │   └── favicon
│       │       ├── favicon-DEV.ico
│       │       └── favicon-PROD.ico
│       │   └── svg
│       │       └── more.svg
│       ├── css
│       │   └── main.css
│       ├── index.html
│       └── tsconfig.json
├── test-config.js             <- testing configuration
├── test-main.js               <- karma test launcher
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── banner-256.txt
│   │   ├── banner.txt
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── project.tasks.json <- override composite gulp tasks
│   │   ├── seed.config.ts     <- generic configuration of the seed project
│   │   ├── seed.config.interfaces.ts
│   │   ├── seed.tasks.json    <- default composite gulp tasks
│   │   └── seed.tslint.json   <- generic tslint configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── env                    <- environment configuration
│   │   ├── base.ts
│   │   ├── dev.ts
│   │   ├── env-config.interface.ts
│   │   └── prod.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── autoprefixer.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── operators.d.ts
│   │       ├── slash.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       └── tildify.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── assets_task.ts
│   │   ├── css_task.ts
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │   │   ├── build.assets.dev.ts
│   │   │   ├── build.assets.prod.ts
│   │   │   ├── build.bundle.rxjs.ts
│   │   │   ├── build.bundles.app.exp.ts
│   │   │   ├── build.bundles.app.ts
│   │   │   ├── build.bundles.ts
│   │   │   ├── build.docs.ts
│   │   │   ├── build.html_css.ts
│   │   │   ├── build.index.dev.ts
│   │   │   ├── build.index.prod.ts
│   │   │   ├── build.js.dev.ts
│   │   │   ├── build.js.e2e.ts
│   │   │   ├── build.js.prod.exp.ts
│   │   │   ├── build.js.prod.ts
│   │   │   ├── build.js.test.ts
│   │   │   ├── build.tools.ts
│   │   │   ├── check.tools.ts
│   │   │   ├── check.versions.ts
│   │   │   ├── clean.all.ts
│   │   │   ├── clean.coverage.ts
│   │   │   ├── clean.dev.ts
│   │   │   ├── clean.prod.ts
│   │   │   ├── clean.tools.ts
│   │   │   ├── clear.files.ts
│   │   │   ├── compile.ahead.prod.ts
│   │   │   ├── copy.prod.ts
│   │   │   ├── e2e.ts
│   │   │   ├── generate.manifest.ts
│   │   │   ├── karma.run.ts
│   │   │   ├── karma.run.with_coverage.ts
│   │   │   ├── karma.watch.ts
│   │   │   ├── minify.bundles.ts
│   │   │   ├── print.banner.ts
│   │   │   ├── serve.coverage.ts
│   │   │   ├── serve.coverage.watch.ts
│   │   │   ├── serve.docs.ts
│   │   │   ├── server.prod.ts
│   │   │   ├── server.start.ts
│   │   │   ├── start.deving.ts
│   │   │   ├── tslint.ts
│   │   │   ├── watch.dev.ts
│   │   │   ├── watch.e2e.ts
│   │   │   ├── watch.test.ts
│   │   │   └── webdriver.ts
│   │   ├── task.ts
│   │   └── typescript_task.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── karma.start.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
└── yarn.lock
```

# Contributors

[<img alt="oelabed" src="https://avatars2.githubusercontent.com/u/19292748?v=3&s=117" width="117">](https://github.com/oelabed) |
:---: |:---: |:---: |:---: |:---: |:---: |


# Change Log

You can follow the [Angular change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
