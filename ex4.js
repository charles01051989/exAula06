//Faça um programa que simule um lançamento de dados.
//Lance o dado 100 vezes e armazene os resultados em um array.
//Depois, mostre quantas vezes cada valor foi conseguido.
const prompt = require('prompt-sync')()
const drawValues = [];
for (amount = 0; amount < 100; amount++ ) {
    function randomNumberInterval(a, b){
        return Math.floor(Math.random()* (b- a + 1)) +a 
    }
    drawValues.push(randomNumberInterval(1 ,6));
}
console.log(">>>>>Dado sorteado 100 vezes<<<<<");
console.log(drawValues);
console.log();  
for(let i = 1 ; i <= 6; i++){
    const amountNum = drawValues.filter(x => x === i).length
    console.log(`Obteve-se ${amountNum} vezes o nº [${i}]`);
}    

// Esse é o modo braçal feito da primeira vez.
/*
let quantidadeNum1 = drawValues.filter(x => x === 1).length
let quantidadeNum2 = drawValues.filter(x => x === 2).length
let quantidadeNum3 = drawValues.filter(x => x === 3).length
let quantidadeNum4 = drawValues.filter(x => x === 4).length
let quantidadeNum5 = drawValues.filter(x => x === 5).length
let quantidadeNum6 = drawValues.filter(x => x === 6).length
    
    console.log(`Obteve-se ${quantidadeNum1} vezes o número [1]`);
    console.log(`Obteve-se ${quantidadeNum2} vezes o número [2]`);
    console.log(`Obteve-se ${quantidadeNum3} vezes o número [3]`);
    console.log(`Obteve-se ${quantidadeNum4} vezes o número [4]`);
    console.log(`Obteve-se ${quantidadeNum5} vezes o número [5]`);
    console.log(`Obteve-se ${quantidadeNum6} vezes o número [6]`);
    */