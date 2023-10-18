window.addEventListener('DOMContentLoaded', () => {

    console.log('DOM cargado');
    const h1 = document.querySelector('h1');
    console.log(h1);
    console.log(h1.innerText);

    h1.innerText = 'Hola Mundo';

    const lis = document.querySelectorAll('li');
    console.log(lis);
    lis.forEach(li => {
        console.log(li.innerText);
    });

    const nuevoLi = document.createElement('li');
    
    nuevoLi.innerText = 'nuevo li';
    
    document.querySelector('ul').appendChild(nuevoLi);
    
    console.log(nuevoLi);

    const ul = document.querySelector('ul');

    ul.appendChild(nuevoLi);

    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        const span = document.createElement('span');

        span.innerText = 'Hola '+ input.value;

        button.insertAdjacentElement("afterend", span);
    });
});