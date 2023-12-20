# Google-Dynamic-form

## Overview

This project involves creating a Google Form with dynamic choices based on user responses. The main functionality includes the creation of a form, adding form items (text and multiple-choice), and dynamically updating the choices of a multiple-choice item based on user input.

## Structure

- **createform.js**: This script contains functions for creating a new Google Form, adding form items (Name and Choose one number), and installing a trigger for updating choices on form submit.

- **installtrigger.js**: This script installs a trigger that runs the `updateFormChoices` function on form submission.

- **updateformchoices.js**: This script handles the dynamic update of choices in the multiple-choice item based on the user's selected number.
  
- Run `createForm()` to create a new Google Form titled 'Demo Form' with Name and Choose one number items.

- It runs `installTrigger(formId)` to install a trigger that runs on form submission.

- Upon form submission, the `updateFormChoices` function is triggered to update the choices of the 'Choose one number' item dynamically.

## How It Works

1. The form is created with a Name text item and a multiple-choice item ('Choose one number') with values from 1 to 10.

2. A trigger is installed to execute `updateFormChoices` on form submission.

3. When a user submits the form, the selected number is retrieved, and the choices of the 'Choose one number' item are updated dynamically.

4. The script removes the selected number from choices, adds the next sequential number, and updates the choices in the form.

## Example

If a user selects '3' as the number, the next form will have choices from 1 to 10 excluding '3'. The choices will be updated dynamically based on user responses.

## Demo Video

Check out the demo video [here](https://drive.google.com/file/d/1hN4W5h3KRkXkK6W_Wt26dicc7kKzeBKm/view?usp=sharing) to see the project in action!

## Dependencies

- Google Apps Script

Thanks to Google Apps Script for providing a platform to automate and extend Google Workspace applications.
