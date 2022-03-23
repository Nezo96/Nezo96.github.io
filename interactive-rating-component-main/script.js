const main = document.querySelector('#main');
const lists = document.querySelectorAll('.rating__list');
const active = document.querySelector('.active');
const button = document.querySelector('#submit');
const thankYou = document.querySelector('#thank_you');

lists.forEach(list => {
    list.addEventListener('click', (e) => {

        const target = e.target;
        const active = document.querySelector('.active');

        // Check if there is any active and remove it
        if (active) {
            active.classList.remove('active');
        }

        // Add active class
        target.classList.add('active');
    })
})

button.addEventListener('click', () => {
    main.style.display = "none";
    thankYou.style.visibility = "visible";
    thankYou.style.opacity = 1;
    thankYou.style.height = "auto";
})