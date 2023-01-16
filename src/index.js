import validator from 'validator';
import "./style.css";

const input = document.querySelector('#input');
const select = document.querySelector('#options');
const btn = document.querySelector('button');
const output = document.querySelector('p');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const fields = {
        email: validator.isEmail(input.value)
    };
    output.innerHTML =  `The validation returned ${fields[select.value]}`
});