# my-monorepo/my-lib

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.
 
 ## How to build your library in angular project by this steps:
 1/ Create a New Workspace: Use the Angular CLI to create a new workspace without an application
 ng new my-workspace --no-create-application
 2/ Generate the Library: Create your library within the workspace:
 ng generate library my-lib
 3/ Develop Your Library
Add Components or Services: Inside your library, you can generate components, services, or other features. For example, to create a new component:
ng generate component my-component --project=my-lib  my-lib//remove it by your library name.
4/ Export Public API :
export * from './lib/my-component/my-component.component';
export * from './lib/my-lib.module';
5/ Build Your Library
To prepare your library for use in applications, build it using:
ng build my-lib

## How to integrate the library into your application
1/In the same workspace, you can create a demo application to test your library:
ng g application demo-app // you can name it whatever you want.
2/ You have to import your library inside the demo-application you created above 
eg: you can import your library in app.module.ts 
import { MyLibModule } from 'my-lib'; //replace my-lib by your library name. 
3/ Publish your library(optional)
you can publish your library if you want to share your library with others. To publish it run the following command.
ng build my-lib
cd dist/my-lib
npm publish.


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```



## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
