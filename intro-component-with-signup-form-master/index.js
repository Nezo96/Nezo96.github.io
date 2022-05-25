const form = document.querySelector('#form');
const fName = document.querySelector('#name');
const errName = document.querySelector('.err-fname');
const errLname = document.querySelector('.err-lname');
const errEmail = document.querySelector('.err-email');
const errPass = document.querySelector('.err-pass');
const lName = document.querySelector('#last');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicked');

    if (fName.value === "") {
        console.log('Empty firstname');
        errName.style.display = "block";
        fName.style.border = "solid 1px #FF7979";
    } else {
        errName.style.display = "none";
        fName.style.border = "";
    }
    if (lName.value === "") {
        console.log('Empty lastname');
        errLname.style.display = "block";
        lName.style.border = "solid 1px #FF7979";
    } else {
        errLname.style.display = "none";
        lName.style.border = "";
    }
    if (email.value === "") {
        console.log('Empty email');
        errEmail.style.display = "block";
        email.style.border = "solid 1px #FF7979";
    } else {
        errEmail.style.display = "none";
        email.style.border = "";
    }
    if (pass.value === "") {
        console.log('Empty password');
        errPass.style.display = "block";
        pass.style.border = "solid 1px #FF7979";
    } else {
        errPass.style.display = "none";
        pass.style.border = "";
    }
})