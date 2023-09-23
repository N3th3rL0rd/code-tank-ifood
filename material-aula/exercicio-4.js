const numeros = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1, 10];

let removerNumerosRepetidos = () => {
  let arraySemRepeticao = [];
  for (let i = 0; i <= numeros.length; i++) {
    if (arraySemRepeticao.indexOf(numeros[i]) === -1) {
      arraySemRepeticao.push(numeros[i]);
    }
  }
  console.log(arraySemRepeticao);
};
