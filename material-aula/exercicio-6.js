const estoque = [
  { nome: "Smartphone", quantidade: 10 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "TV", quantidade: 15 },
  { nome: "Fones de ouvido", quantidade: 20 },
  { nome: "Tablet", quantidade: 8 },
];

const contagemProdutosEstoque = () => {
  let quantidadeTotal = 0;
  for (let i = 0; i < estoque.length; i++) {
    quantidadeTotal += estoque[i].quantidade;
  }
  console.log(quantidadeTotal);
}