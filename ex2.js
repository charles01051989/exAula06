const prompt = require('prompt-sync')();
const age = []
const h = []
for (let i = 0; i < 3; i++) {
    const insAge = +prompt(`Insira a idade: `)
    age.push(insAge)
    const insH = +prompt(`Insira a altura: `)
    h.push(insH)
mediaAge= 0    
for (let i = 0; i < age.length; i++){
    mediaAge += age[i]/(age.length)
}
mediaH=0
for (let i = 0; i < h.length; i++) {
    mediaH += h[i]/(h.length)
}
}
console.log(`A média das idades é ${mediaAge.toFixed(2)}`);
console.log(`A média das alturas é ${mediaH.toFixed(2)}`);