// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome
// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Olá ' + info.personagem + ' seja bem vindx')

info.recorrente = 'Sim';

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(let key in info)
{
  console.log(key);
}