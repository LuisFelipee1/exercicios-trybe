const sortNumbers = (arrayNumeros) => {
   let aux;
    for (let index = 0; index < arrayNumeros. length; index += 1 ) {
        for (let indexdentro = index + 1; indexdentro < arrayNumeros.length; indexdentro += 1) {
           if (arrayNumeros[index] > arrayNumeros[indexdentro]) {
             aux = arrayNumeros[index];
             arrayNumeros[index] = arrayNumeros[indexdentro];
             arrayNumeros[indexdentro] = aux;
}
        }
   }
};
sortNumbers([99, 5, 6, 1, 0]);