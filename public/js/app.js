const btnSwitch = document.querySelector('#switch');
const btnPortafolio = document.querySelector('#portafolio')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        btnSwitch.classList.add('btn-outline-light');
        btnSwitch.classList.remove('btn-outline-dark');
        btnPortafolio.classList.add('btn-outline-light');
        btnPortafolio.classList.remove('btn-outline-dark');
    } else {
        btnSwitch.classList.add('btn-outline-dark');
        btnSwitch.classList.remove('btn-outline-light');
        btnPortafolio.classList.add('btn-outline-dark');
        btnPortafolio.classList.remove('btn-outline-light');
    }
});