const texto = "O gato preto pulou o muro e o gato branco ficou parado";

function frequenciaPalavras () {
  const palavras = texto.split(" ");
  const frequencia = {};
  for (let i = 0; i < palavras.length; i++) {
    if (frequencia[palavras[i]]) {
      frequencia[palavras[i]]++;
    } else {
      frequencia[palavras[i]] = 1;
    }
  }
  console.log (frequencia);
}