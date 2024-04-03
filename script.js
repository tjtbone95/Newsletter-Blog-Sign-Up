/* Create a function to navigates to the thank you page if the email address validation
 requirements are satisifed. So...

Click button -->
Check to see if email is valid -->
If email is VALID, then navigate to THANK YOU page -->
If email is INVALID, return error message to user to enter valid email and update CSS */

const subscribeCardEl = document.querySelector(".subscribe-card");
const successCardEl = document.querySelector(".success-card");

const emailInputEl = document.getElementById('email-input');
const errorElementEl = document.querySelector('.error-label');
const formEl = document.querySelector('.sign-up-form');
const submittedEmailEl = document.querySelector('.email-address');
const submitBtnEl = document.querySelector('.subscribe-btn');
const dismissBtnEl = document.querySelector('.dismiss-btn');

submitBtnEl.addEventListener("click", submitEmail);
dismissBtnEl.addEventListener("click", toggleCards);


function toggleCards() {
    subscribeCardEl.classList.toggle("hidden");
    successCardEl.classList.toggle("hidden");
}

function validateEmail(email) {
    return String(email).toLowerCase().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
}

function submitEmail(e) {
    e.preventDefault();

    //Validate Email
    if (validateEmail(emailInputEl.value)) {
        submittedEmailEl.innerHTML = emailInputEl.value;
        toggleCards();
        emailInputEl.value = "";
        formEl.classList.remove('error');
    } else {
        formEl.classList.add('error');
    }
}

