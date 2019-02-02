# record-union

## Steps
- clone this repo
- inside a folder { record-union } follow the steps bellow and have fun :)
- install yarn
- yarn install
- yarn dev { local server }
- yarn test { unit test & coverage }

## Requirements
- It should look like an icon in the lower right corner of the screen when minified. [done]

- It should expand into a modal dialog with an ability to append quick notes. [done]

- Appended notes are shown in the dialog just above the “Input field” and the ”Add note” button. [done]

- Every note can be deleted from the list. [done]

- The delay between the click on the “Add note” button and the update in the list inside the dialog window should be 1 second. [done]

- The contents of the list should also be displayed on the page itself even when the notepad dialog is minified. [done]

- The delay between the click on the “Add note” button and the update on the page itself should be 2 seconds.

- The task should be covered with tests. [done]

## Optional requirements
- Everything should be animated to the max possible extent. Be smart about how you set up you animations. [done]
- When a note is being appended it should be checked against a list of validation rules and they should be visible
under every instance of that particular note (inside the dialog as well as outside the dialog). List of rules to validate against:
Shouldn’t contain emojis [done]
Number of characters shouldn’t exceed 100 [done]
Shouldn’t be empty [done]