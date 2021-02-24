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
        hideJobField()
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
console.log(registerForActivities)
const activitiesCostPTag = document.querySelector('.activities-cost');
let finalTotal = 0;

registerForActivities.addEventListener('change', (e) => {
 const targetDataAttribute = e.target.getAttribute('data-cost')
//  console.log(+targetDataAttribute)
//  console.log(typeof(+targetDataAttribute))

    function checked() {
        const activitiesLabels = registerForActivities.querySelectorAll('input');
        const targetDayAndTime = e.target.getAttribute('data-day-and-time');
    
        for (let i = 1; i < activitiesLabels.length; i++){
            const dayAndTimeAttribute = activitiesLabels[i].getAttribute('data-day-and-time');
        
            if (targetDayAndTime === dayAndTimeAttribute){
                activitiesLabels[i].disabled = true;
                activitiesLabels[i].parentElement.classList.add('disabled');
                e.target.disabled = false;
                e.target.parentElement.classList.remove('disabled');
            } if (!e.target.checked && targetDayAndTime === dayAndTimeAttribute) {
                activitiesLabels[i].disabled = false;
                activitiesLabels[i].parentElement.classList.remove('disabled');
            }
        }
    }   

    if (e.target.checked){
        finalTotal += +targetDataAttribute
        checked()
    } else { 
        finalTotal -= +targetDataAttribute
        checked()
    }

activitiesCostPTag.innerHTML = `Total: ${finalTotal}`

});


// "Payment Info" section

// The credit card payment option should be selected for the user by default. 

// Program the "I'm going to pay with" <select> element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.

//  Onload - hide sections

const payment = document.getElementById('payment')
const creditCardDiv = document.getElementById('credit-card')
const paypalDiv = document.getElementById('paypal')
const bitcoinDiv = document.getElementById('bitcoin')

payment.children[1].selected = true
paypalDiv.onload = hidePaymentField(paypalDiv)
bitcoinDiv.onload = hidePaymentField(bitcoinDiv)


function hidePaymentField(method){
    method.style.display = 'none';
}

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
const ccNum = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const form = document.querySelector("FORM");
// const button = document.querySelector("button");

// const ccBox = document.querySelector(".credit-card-box");
// console.log(ccBox)


// helper funtions - name, email, activity, credit card payment

const nameValidation = () => {
    const nameInputValue = nameInput.value
    const nameRegex = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInputValue);
    return nameRegex
  }
  
const emailValidation = () => {
    const emailInputValue = emailInput.value  
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInputValue);
    return emailRegex
  }
  
const activityValidation = () => {
    const activityValid = finalTotal > 0;
    return activityValid
  }

// original CC regex

// const ccValidation = () => {
//     const ccInput = ccNum.value
//     const ccRegex = /4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}/.test(ccInput);
//     return ccRegex
//   }

const ccValidation = () => {
    const ccInput = ccNum.value
    const ccRegex = /^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{1,4})\s?$/.test(ccInput);
    return ccRegex
  }

  const zipValidation = () => {
    const zipValue = zipCodeInput.value
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipValue);
    return zipRegex
  }

  const cvvValidation = () => {
    const cvvValue = cvvInput.value
    const cvvRegex = /^[0-9]{3,4}$/.test(cvvValue);
    return cvvRegex
  }

  function visualValidationPass(element){
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.display = 'none'
  }
  
  function visualValidationFail(element){
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.display = 'block';
  }

form.addEventListener('submit', (e) => {


    if (!nameValidation()){
        e.preventDefault()
        visualValidationFail(nameInput)
    } else {
        visualValidationPass(nameInput)
    }

    if (!emailValidation() || emailInput.value === ""){
        e.preventDefault()
        visualValidationFail(emailInput)
    } else {
        visualValidationPass(emailInput)
    }

    if (!activityValidation()){
        e.preventDefault()
        registerForActivities.classList.add('not-valid');
        console.log('activity field failed')
    } else {
        registerForActivities.classList.add('valid');
    }

        // CC PART

    if (!ccValidation()){
        e.preventDefault()
        visualValidationFail(ccNum)
    } else {
        visualValidationPass(ccNum)
    }

    if (!zipValidation()){
        e.preventDefault()
        visualValidationFail(zipCodeInput)
    } else {
        visualValidationPass(zipCodeInput)
    }

    if (!cvvValidation()){
        e.preventDefault()
        visualValidationFail(cvvInput)
    } else {
        visualValidationPass(cvvInput)
    }    
})


  // Real-time error message - CC Number
  
// ccNum.addEventListener('keyup', (e) => {
//     e.preventDefault()

//     if (!ccValidation()){
//         e.preventDefault()
//         visualValidationFail(ccNum)
//     } else {
//         visualValidationPass(ccNum)
//     }
// })


// Accessibility:

// Checkbox focus and blur


const checkbox = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkbox.length; i++){

        checkbox[i].addEventListener('focus', (e) => {
            checkbox[i].parentElement.classList.add('focus');
        })

        checkbox[i].addEventListener('blur', (e) => {
            checkbox[i].parentElement.classList.remove('focus');
        })
    }

    
    







