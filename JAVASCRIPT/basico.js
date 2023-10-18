// const f = ["mandarina", "pera", "melón", "sandía", "manzana"]
// for(let i=0; i<f.length; i++) {
//   console.log(i, f[i])

//   if(f[i] === 'pera') {
//     console.log('encontrado');
//     break;
//   }
// };

function adivinarN () {
  alert('dime un número del 1 al 10:')
  const adivinar = Math.floor(Math.random()*10 + 1);
  // console.log(adivinar);

  let N;
  let intentos;
  let vidas = parseInt(prompt('dime un número de vidas: '))
  do {
    N= parseInt(prompt('dime un número'))
    intentos++;
    vidas--;
    console.log('intentos: '+intentos);
    console.log('vidas: '+vidas);

    if (N>adivinar && vidas>0) {
        alert('Es menor. Te quedan '+ vidas+ ' vidas') 
      } 
      else if (N<adivinar && vidas>0) {
        alert('Es mayor. Te quedan '+ vidas+ ' vidas') 
      } 
      else if (N===adivinar) {alert('congrats. Has necesitado ' +intentos+ ' intentos') 
      }  
      else if (vidas<=0) {alert('GAME OVER')}
    else {alert('Error de programa')}
  }
  while ( N != adivinar && vidas>0)
};

adivinarN ();

// main.js
const biblioteca = require('./biblio');

console.log(biblioteca);


const primero = parseInt(prompt('dime el primer número: '));
const operador = parseInt(prompt('dime el operador: 1- suma, 2- resta, 3- multi, 4- division, 5-raiz'));
const segundo = parseInt(prompt('dime el segundo número: '));

function operacion () {
  const operador = parseInt(prompt('dime el operador: 1- suma, 2- resta, 3- multi, 4- division, 5-raiz'));
  const primero = parseInt(prompt('dime un número: '));

    if (operador===1) {
      const sumando = parseInt(prompt('dime el segundo número: '));
      alert(primero+sumando)
    }
    else if (operador===2) {
      const restando = parseInt(prompt('dime el segundo número: '));
      alert(primero-restando)
    }
    else if (operador===3) {
      const multi = parseInt(prompt('dime el multiplicador: '));
      alert(primero*multi)
    }
    else if (operador===4) {
      const divisor = parseInt(prompt('dime el multiplicador: '));
      alert(primero/divisor)
    }
    else if (operador===5) {
      alert(Math.sqrt(primero))
    }
    else {alert('error')}
};

operacion ();
