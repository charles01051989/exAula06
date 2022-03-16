const prompt = require('prompt-sync')()
const valoresLancados = []

for (quantidade = 0; quantidade < 100; quantidade++ ) {
    function randomNumberInterval(a, b){
        return Math.floor(Math.random()* (b- a + 1)) +a 
        //esse .PUSH NÃO DEU CERTO//talvez seja por que está dentro da função.
        //valoresLancados.push(randomNumberInterval(1, 6)) 
    }
    valoresLancados.push(randomNumberInterval(1 ,6));
    
}//ESSE DEU CERTO//
console.log(valoresLancados)  

let quantidadeNum1 = valoresLancados.filter(x => x === 1).length
let quantidadeNum2 = valoresLancados.filter(x => x === 2).length
let quantidadeNum3 = valoresLancados.filter(x => x === 3).length
let quantidadeNum4 = valoresLancados.filter(x => x === 4).length
let quantidadeNum5 = valoresLancados.filter(x => x === 5).length
let quantidadeNum6 = valoresLancados.filter(x => x === 6).length
    
    console.log(`Obteve-se ${quantidadeNum1} vezes o número [1]`);
    console.log(`Obteve-se ${quantidadeNum2} vezes o número [2]`);
    console.log(`Obteve-se ${quantidadeNum3} vezes o número [3]`);
    console.log(`Obteve-se ${quantidadeNum4} vezes o número [4]`);
    console.log(`Obteve-se ${quantidadeNum5} vezes o número [5]`);
    console.log(`Obteve-se ${quantidadeNum6} vezes o número [6]`);