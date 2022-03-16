const prompt = require ('prompt-sync')()
let nome = []
let nota =[]
const quantNotas = +prompt('Digite a quantidade de notas a serem lançadas: ')

for (let i = 0; i < quantNotas; i++){
    const insNome = prompt("Insira o nome do aluno: ")
    nome.push(insNome)
    const insNota = +prompt("Insira a nota do aluno: ")
    nota.push(insNota);
    console.log(nome[i], nota[i])
}
media = 0
for (let i = 0; i < nota.length; i++){
    media += nota[i]/(nota.length)
}
console.log(`A média das notas foi ${media}`);

