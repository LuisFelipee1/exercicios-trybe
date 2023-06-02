const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumeros = 0;
// 1 - EXERCÍCIO FEITO!
//for (let index = 0; index < numbers.length; index += 1) {
// console.log(numbers[index]);
//} 

// 2 - EXERCÍCIO FEITO!
//for (let index = 0; index < numbers.length; index += 1) {
//    somaNumeros += numbers[index]
//}
//console.log(somaNumeros);
// 3 - EXERCÍCIO FEITO !

//for (let index = 0; index < numbers.length; index += 1) {
//   somaNumeros += numbers[index]
//}
//let divisao = somaNumeros / numbers.length
//console.log(divisao);
//OU console.log(somaNuumeros / 10);

// 4 - EXERCICIOS FEITO!
//for (let index = 0; index < numbers.length; index += 1) {
//   somaNumeros += numbers[index]
//}

//let divisao = somaNumeros / numbers.length

//if (divisao >= 20) {
// console.log('O valor da média aritmética é maior que 20');
//} else { 
//console.log('O valor da média arítmética é menor que 20');
//}
//console.log(divisao);

//5 - EXERCICIO FEITO!
//let maiorNumero = 0;
//for (let index = 0; index < numbers.length; index += 1) {
//    somaNumeros += numbers[index]
//    if (maiorNumero < numbers[index]) {
//        maiorNumero = numbers[index]
//    }
//} 
//console.log(maiorNumero);

//let resultado = 0;

//for (let index = 0; index < numbers.length; index += 1) {
//}   if (numbers % 2 !== 0) {
//       resultado += 1;
//} 
//if (resultado === 0) {
//    console.log('Nenhum valor ímpar encontrado');
//} else {
//   console.log(resultado);
//}


let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
};

if (result === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(result);
};


