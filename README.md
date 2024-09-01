# AngularAdventureGame

This simple web application allows users to choose their path based on the choices on the question displayed on the screen to progress to the next set of choices until they get to one of the endings.

<img src="https://github.com/chrisnumber49/angular-adventure-game/blob/main/screen%20shot/Screenshot%202024-09-01%20125407.png" width="700" >
<img src="https://github.com/chrisnumber49/angular-adventure-game/blob/main/screen%20shot/Screenshot%202024-09-01%20125422.png" width="700" >
<img src="https://github.com/chrisnumber49/angular-adventure-game/blob/main/screen%20shot/Screenshot%202024-09-01%20125436.png" width="700" >

At the end of the question path, the user can see the full route map with a tree diagram showing which decision the user has made for each question and highlighting the path the user chose.

<img src="https://github.com/chrisnumber49/angular-adventure-game/blob/main/screen%20shot/Screenshot%202024-09-01%20125446.png" width="700" >

The core technology of this project revolves around using **ngRx**, a Redux state management library to keep tracking the user decision route in the store, then in the result view screen the decision route map is generated and displayed by using the external library component **tree-view**.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit test specs in **selection-view.component.spec.ts**, **result-view.component.spec.ts**, **routeSelect.reducer.spec.ts**, and **routeSelect.selector.spec.ts** via [Karma](https://karma-runner.github.io), to validate the functionalities in components and state management.
