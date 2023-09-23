const produtos = [
  { nome: "Celular", quantidade: 10 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "TV", quantidade: 3 },
  { nome: "Fone de Ouvido", quantidade: 20 },
  { nome: "Câmera", quantidade: 8 },
];

const quantidadeProdutosEstoque = () => {
  console.log("A quantidade de produtos em estoque é: " + produtos.length);
};
