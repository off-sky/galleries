# Galleries

The project was created as an example of an Angular+NGRX file structure.

Demo [here](https://galleries-d1158.web.app/).

[Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

##Main folders and concepts

###Api
Contains the types and logic directly related to server interaction.

###Convertors
Functions that convert the entities provided by the server to the entities utilized by the app (when needed).

###Features
Proper angular modules. They consume store, routes and types.

####Common folder in features
Components consumed by multiple features. They differ from shared in that they are aware of the store and app types.

###Routes
Abstractions over app routes.

###Shared
Component libraries (store-agnostic), used by features

###Store
This is where ALL app-wide state management lives (ngrx). Exposed via facades

###Types
Typescript types describing all entities utilized by the app.
Note that we don't use the types from /api. In case we want to use the same type as provided by the server, we still re-export it from this folder.

###Utils
Useful functions, both generic and those that operate on app entities.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
