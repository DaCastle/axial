# Axial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.
This project uses NodeJS version 20.17.0.

## Dakota's Notes

##### Component Structure
I usually mimic my folder structure to the project UI design. As the prompt references two simple components, each on their own route, I created the components as siblings.

I created a (shared) custom pipe to handle formatting a money value, as this is a great use case to do so.

##### Input Validation
For the money input element, setting maxLength - helps prevent buffer & DoS attack, reduces XSS max-payload size, also helpful for (backend) data integrity.

I added FormControl validators - one to simply mark the field as required, and the other to validate allowing a fractional value, and a single letter 'k/m/b/t' (case insensitive) for thousand/million/etc.

The money-input service value only gets updated if the input field is in a valid state.

Since I'm only utilizing the input value through string interpolation, which angular always renders as plaintext, there is not a concern of XSS for the context of this prompt.

##### Passing Data
As form data frequently has a reason to be persisted, I decided to utilize a money-input service to manage the money input value, as opposed to using the angular router to pass the input value around.

I prefer to only utilize route params to identify uniqueness, like an id, to keep url links as clean/simple as possible.

The service and components use the observe/subscribe pattern.

The money-results component uses the async pipe to auto-handle subscribe/unsubscribe.

##### Unit Tests
Step 1 - use GPT

Step 2 - verify tests are logical

Step 3 - have a test point out that the money input was not being validated on every keystroke, which I wanted, and updated the component to match my desire

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
