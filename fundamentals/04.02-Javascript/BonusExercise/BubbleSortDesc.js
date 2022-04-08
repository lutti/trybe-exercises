let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let k = 1; k < numbers.length; k++) {
    // Dentro de cada iteração
    // percorremos novamente o vetor
    // em busca dos pares
    for (let j = 0; j < numbers.length - k; j++) {
        // Comparamos
        if (numbers[j] < numbers[j + 1]) {
            // swap (trocamos)
            aux          = numbers[j];
            numbers[j]     = numbers[j + 1];
            numbers[j + 1] = aux;
        }
    }
}

console.log(numbers);