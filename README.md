# AngularWithDjango

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

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

## Typescript Tips
```js
// property can be of two types
imageURL: string | null;

// can be undefined
introduction?: string;

// property is a number
export interface Evaluation {
  [key: number]: string;
}

// values must this interface
export interface QuestionnaireAnswersBlock {
  key: string;
  questions: QuestionAnswers[];
}
export interface QuestionAnswers {
  answers: string[];
  questionKey: string;
}

// Value can only be one of the enum keys ->
export enum DATE_FORMATS {
  SHORT_DATE = 'L',
  LONG_DATE = 'LL',
  SHORT_TIME = 'HH:mm',
  LONG_TIME = 'HH:mm:ss',
  SHORT_DATE_SHORT_TIME = 'L HH:mm',
  SHORT_DATE_LONG_TIME = 'L HH:mm:ss',
  LONG_DATE_SHORT_TIME = 'LL HH:mm',
  LONG_DATE_LONG_TIME = 'LL HH:mm:ss',
}

export type DateFormatKeys<T extends { [key: number]: string }> = {
  [P in keyof T]: string
};

format?: keyof DateFormatKeys<typeof DATE_FORMATS>;


export type StatusKeys<T extends { [key: number]: string }> = {
  [P in keyof T]: string;
};
color: keyof StatusKeys<typeof STATUS>;

// Type constructor
export class UiPerspective {
  constructor(public perspective: Perspective, public selected: boolean) {}
}

export class UiPerspectiveIcon {
  constructor(public icon: PerspectiveIcon, public selected: boolean) {}
}
```
