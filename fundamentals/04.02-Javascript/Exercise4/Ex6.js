//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
// imprima a mensagem: "nenhum valor ímpar encontrado"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for(let num of numbers)
{
    if(num % 2 != 0)
    {
        cont++;
    }
}

console.log(cont);