const main = document.querySelector('.main');
const box1 = document.querySelector('#box1');

let color;

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        color = 'red';
    } else if (event.key === 's') {
        color = 'blue';
    } else if (event.key === 'd') {
        color = 'aqua';
    }});


main.addEventListener('click',(event) => {
    if (event.target.className !== 'main') {
        event.target.style.backgroundColor = color;
    }
});




