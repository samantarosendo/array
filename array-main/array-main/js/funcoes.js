//se o arquivo estiver em uma pasta diferente deve referencia-la, exemplo: js/mensagem.js, se na mesma pasta ./mensagem.js
import {mensagemTxtNum} from './mensagem.js'

function exibirMensagem(){
    console.log('Olá')
}
//exibirMensagem()

//msg pode ser qualquer texto
function calcNum(msg){
    console.log(msg)
}

calcNum('Uma mensagem')

function somaNum(num1, num2, num3){
    return num1 + num2 / num3
}

console.log(somaNum(10, 8, 2))

const multiplicacao = function(num1, num2){
    return num1 * num2
}
console.log(multiplicacao(8, 2))

console.log('--------> ARROW FUNCTION <----------')

const lerMsg = () => {
    console.log('Minha mensagem')
}

lerMsg()

const somaValores = (valor1, valor2)=>{
    console.log(valor1 + valor2)
}
somaValores(150, 230)

const multiplicacaoValores = (valor1, valor2) => {
    return valor1 * valor2
}

console.log(multiplicacaoValores(15, 3))

console.log(parseInt(Math.random() * 100))

let cont = 0

setTimeout(() => {
    console.log('Executou')
}, 3000);

const intervalo = setInterval(()=>{
    cont++
    console.log('Teste', cont)

    if (cont == 5){
        clearInterval(intervalo)
    }
}, 2000)

const objPessoa = {nome: 'Maria'}

console.log(mensagemTxtNum(objPessoa), ', parabéns pelo seu dia!!')