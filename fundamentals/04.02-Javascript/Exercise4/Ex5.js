//maior numero do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for(let num of numbers)
{
    if(num > maior)
    {
        maior = num;
    }
}

console.log(maior);