const vendedores = [ 
  {
    "nome": "João",
    "vendas": [5000, 6000, 7000]
  },
  {
    "nome": "Maria",
    "vendas": [8000, 9000, 10000]
  }        
];
function calcularMediaVendas() {
  let mediaVendas = [];
  for (let i = 0; i < vendedores.length; i++) {
    let somaVendas = 0;
    for (let j = 0; j < vendedores[i].vendas.length; j++) {
      somaVendas += vendedores[i].vendas[j];
    }
    mediaVendas.push(somaVendas / vendedores[i].vendas.length);
  }
  console.log (mediaVendas);
}