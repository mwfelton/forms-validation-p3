# unit-3-project-forms
 
- Real-time error message

Providing form validation error indications at the moment they occur better serves your user.

Program at least one of the required fields to listen for user interaction like a keyup. When then user interaction occurs, run the validation check for that input. If you created helper functions to validate the required form inputs and sections, you can call those helper functions inside of a field’s event listener.

apply to cc number
addEventListener('keyup')

run validation check 

call helper funtions

- Conditional error message

Providing additional information for certain types of errors can be very helpful to your user. For example, if the email address field is empty, it would be enough to inform the user that they should add an email address. But if they’ve already added an email address, but formatted it incorrectly, that message wouldn’t be helpful.

For at least one required form section, provide one error message if the field fails on one of its requirements, and a separate message if it fails on one of its other requirements.
Detail this specific feature in your README.md file.