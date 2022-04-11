# Aspire Email Input

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Core Requirement

Create a production-ready email address input field component.
The custom input component should have the following features-

- [x] **autocomplete** - dropdown should show the list of valid email addresses from a mock API call
- [x] **multi-select** - enable the user to input multiple email addresses by typing the email address and pressing the enter / tab button to select
- [x] **modifiable** - allow the user to delete a previously entered email address - backspace or clicking the x button on hover
- [x] **validation** - display an error indicator if the user enters an invalid email address
- [x] It should be implemented with hooks preferably

## Known Issues

- Typing the same email address as the one selected causes it to appear twice again
- Missing tests cases
- The dropdown list does not scroll down on navigating with the up / down arrow
- Responsiveness Issues

## Further Enhancements

- Clicking on the outer autocomplete container should auto-select the input field
- Validate email addresses
- Improve accessibility
- Allow for creatable inputs if the email address that the user enters manually is valid. This requires more context on how this form is used - should it be modeled after an email client. Currently, I've assumed we're only allowing emails from the verified list and not letting them send to any other email they manually type in.
- Create a custom `useAutocomplete` hook like the one in [material-ui](https://github.com/mui/material-ui/blob/master/packages/mui-base/src/AutocompleteUnstyled/useAutocomplete.js)
- Possibly use [react-select](https://react-select.com/home) creatable multi-select, or some other maintained library for this feature. This would make sense and would be easier to maintain in the long-run if there are other components like this one throughout the application.

## UI / UX Design Suggestions and Assumptions

I've made some assumptions here. But realistically, I would have asked before starting.

- Retained the "Enter recipients" placeholder on the input when there are tags present, so the user knows that they can enter more values
- Add a "no options found" text when there are no results that match what the user has entered
- The dropdown in the design starts on the left instead of starting from the input cursor. Starting from the input cursor might not work for smaller screens and would need some additional work here.
- Currently the field just expands vertically when there are more options. I've based the layout on the react-select multi-select example. We can possibly make the component horizontally scrollable if we need to maintain the height of the container form.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
