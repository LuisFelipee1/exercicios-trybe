const biggerSmallerNumber = (ArrayNumeros) => {
   let bigger = ArrayNumeros[0];
   let samaller = ArrayNumeros[0]; 
    
    for (let index = 0; index < ArrayNumeros.length; index += 1) {
        if (ArrayNumeros[index] > bigger) {
            bigger = ArrayNumeros[index]
        } else if (ArrayNumeros[index] < samaller) {
           samaller = ArrayNumeros[index];
        }
    }
    let mensagem = `Maior: ${bigger}
                    Menor: ${samaller}`      
    return mensagem;
};

biggerSmallerNumber ([0, 34, 56, 100, 2])