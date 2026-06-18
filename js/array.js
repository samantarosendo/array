//DECLARAR ARRAY
const numeros = [10, 50, 60, 300, 70, 900, 850]

console.log(numeros[1])

numeros[2] = 124

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

for (i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

numeros.forEach((elem, i)=>{
    console.log(i, elem)

})

let cont = 0

for(let elem of numeros){
    cont++
    console.log(cont, elem)
}