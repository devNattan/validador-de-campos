import validator from 'validator';

const input = document.querySelector('#input');
const select = document.querySelector('#options');
const btn = document.querySelector('button');
const output = document.querySelector('p');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const fields = {
        email: validator.isEmail(input.value),
        phone: validator.isNumeric(input.value)
    };
    output.innerHTML =  `The validation returned ${fields[select.value]}`
});