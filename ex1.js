const prompt = require('prompt-sync')();

const todosNum = []
const numPar = []
const numImpar = []

for (let numeros = 0; numeros < 20; numeros++) {
    const insNum = +prompt(`Insira um número! `)
    todosNum.push(insNum)
    if (insNum%2==0) {
        numPar.push(insNum)
    }else{
        numImpar.push(insNum)
    }

    
}

console.log(`Os números inseridos são ${todosNum}`);
console.log(`Os números pares são ${numPar}`);
console.log(`Os números ímpares são ${numImpar}`);