const form = document.querySelector('#newsletter');
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const errIcon = document.querySelector('.err-icon');
const errMsg = document.querySelector('.err-msg');

const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener('click', (e) => {

    // Prevent from submitting
    e.preventDefault();

    // Check if email is email
    if (!email.value.match(validRegex)) {

        // If no
        email.style.border = "solid 2px #F96464";
        errIcon.style.display = "block";
        errMsg.style.display = "block";
    } else {

        // If yes
        email.style.border = "";
        errIcon.style.display = "none";
        errMsg.style.display = "none";
    }
})