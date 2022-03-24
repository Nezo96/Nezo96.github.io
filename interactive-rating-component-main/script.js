const main = document.querySelector('#main');
const lists = document.querySelectorAll('.rating__list');
const button = document.querySelector('#submit');
const thankYou = document.querySelector('#thank_you');
const message = document.querySelector('span');

lists.forEach(list => {
    list.addEventListener('click', (e) => {

        // Save active class to const active
        const active = document.querySelector('.active');

        // Check if there is any active and remove it
        if (active) {
            active.classList.remove('active');
        }

        // Save event target to const target for better code clarity
        const target = e.target;

        // Add active class
        target.classList.add('active');

        // Save rating to variable
        let rating = target.innerText;

        // Add event listener (click) to submit button
        button.addEventListener('click', (e) => {

            // Handle sections visibility
            main.style.display = "none";
            thankYou.style.display = "block";

            // Change span text in thankYou section
            message.innerText = `You selected ${rating} of 5`;
        })
    })
})