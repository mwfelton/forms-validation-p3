console.log('good morning')

// Set the focus property to true on the <input type="text"> element for the "Name" field.
const nameInput = document.getElementById('name');
nameInput.onload = setFocus();
    
function setFocus(){
    const nameInput = document.getElementById('name').focus();
}

// The "Job Role" section

// Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.

const otherJobRole = document.getElementById('other-job-role')

otherJobRole.onload = hideJobField()

function hideJobField(){
    const otherJobRole = document.getElementById('other-job-role').style.display = 'none';
}

// Program the "Job Role" <select> element to listen for user changes. When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.

const jobRoleMenu = document.getElementById('title');

jobRoleMenu.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
        otherJobRole.style.display = 'block';
    } else {
        hideJobField
    }
});

// "T-Shirt Info" section

// The options in the "Color" drop down menu are not available for each t-shirt design. So the user shouldn’t be able to see or choose a color option until they have chosen a design.

// Disable the "Color" <select> element.

// Program the "Design" <select> element to listen for user changes. When a change is detected:
// The "Color" <select> element should be enabled.
// The "Color" <select> element should display an available color.

const designSelect = document.getElementById('design')
const colorSelect = document.getElementById('color')
const colorOption = colorSelect.children
console.log(colorOption);



colorSelect.disabled = true;

designSelect.addEventListener('change', (e) => {
    colorSelect.disabled = false;

    for (let i = 1; i < colorOption.length; i++){
       
        const value = e.target.value;
        const objectDataAttribute = colorOption[i].getAttribute("data-theme");        

        if (value === objectDataAttribute){
            colorOption[i].hidden = false;
            colorOption[i].selected
        } else {
            colorOption[i].hidden = true;
            colorOption[i].selected = false
        }
    }
});

// "Register for Activities" section

const registerForActivities = document.getElementById('activities');
const activitiesCostPTag = document.querySelector('.activities-cost');

let finalTotal = 0;

registerForActivities.addEventListener('change', (e) => {
 const targetDataAttribute = e.target.getAttribute('data-cost')
 console.log(+targetDataAttribute)
 console.log(typeof(+targetDataAttribute))

 if (e.target.checked){
    finalTotal += +targetDataAttribute 
} else { 
    finalTotal -= +targetDataAttribute
}

activitiesCostPTag.innerHTML = `Total: ${finalTotal}`

});

// "Payment Info" section

// The credit card payment option should be selected for the user by default. 

// Program the "I'm going to pay with" <select> element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.

const payment = document.getElementById('payment')
const creditCardDiv = document.getElementById('credit-card')
const paypalDiv = document.getElementById('paypal')
const bitcoinDiv = document.getElementById('bitcoin')

payment.children[1].selected = true

// Use the payment variable above to listen for the change event on this element. When a change is detected, display the <div> element with the id that matches the value of the event.target element. And hide the other two <div> elements.

payment.addEventListener('change', (e) => {
    if (e.target.value === 'credit-card'){
        creditCardDiv.style.display = 'block'
        paypalDiv.style.display = 'none'
        bitcoinDiv.style.display = 'none'
    } else if(e.target.value === 'paypal'){
        paypalDiv.style.display = 'block'
        creditCardDiv.style.display = 'none'
        bitcoinDiv.style.display = 'none'
    } else {
        bitcoinDiv.style.display = 'block'
        paypalDiv.style.display = 'none'
        creditCardDiv.style.display = 'none'
}
});

// Form Validation:

// Elements requiring validation

nameInput
const emailInput = document.getElementById('email');
registerForActivities
const ccNum = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const form = document.querySelector("FORM");
console.log(form)


/* Helper function to validate email input */
const nameValidation = () => {

    const nameInputValue = nameInput.value
    const nameRegex = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInputValue);

    console.log(`Name validation test on "${nameInputValue}" evaluates to ${nameRegex}`);

    return nameRegex
  }
  
const emailValidation = () => {

    const emailInputValue = emailInput.value
    console.log("Email value is: ", `"${emailInputValue}"`);
  
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValueInput);
    console.log(`Email validation test on "${emailValueInput}" evaluates to ${emailRegex}`)
  
    return emailRegex
  }
  
  /* Helper function to validate language section */
  const languageValidation = () => {
  
  const languageSectionIsValid = languageTotal > 0;
  
  console.log(`Language section validation test evaluates to ${languageSectionIsValid}`);
  
  return languageSectionIsValid
  }


form.addEventListener('submit', (e) => {

    e.preventDefault()

    nameValidator()
    emailValidator()
    languageValidator()

    e.preventDefault()




//   Still in the event listener, use the name validation test variable and an if statement to check if the name value is valid. If false, prevent the form from submitting with an event.preventDefault() statement. Otherwise, do nothing and allow the form to submit.

});










