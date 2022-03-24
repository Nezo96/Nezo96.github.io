const main = document.querySelector('#main');
const lists = document.querySelectorAll('.rating__list');
const active = document.querySelector('.active');
const button = document.querySelector('#submit');
const thankYou = document.querySelector('#thank_you');
const message = document.querySelector('span');

lists.forEach(list => {
    list.addEventListener('click', (e) => {

        const active = document.querySelector('.active');

        // Check if there is any active and remove it
        if (active) {
            active.classList.remove('active');
        }

        const target = e.target;

        // Add active class
        target.classList.add('active');

        // Save rating to variable
        let rating = target.innerText;

        button.addEventListener('click', (e) => {
            main.style.display = "none";
            thankYou.style.display = "block";

            message.innerText = `You selected ${rating} of 5`;
        })
    })
})