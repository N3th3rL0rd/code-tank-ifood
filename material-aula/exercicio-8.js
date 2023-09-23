const clientes = [
  { nome: "David", comSaldoDevedor: true },
  { nome: "Vinoth", comSaldoDevedor: true },
  { nome: "Divya", comSaldoDevedor: false },
  { nome: "Ishitha", comSaldoDevedor: false },
  { nome: "Thomas", comSaldoDevedor: true },
];

const clientesComSaldoDevedor = () => {
  console.log(clientes.filter((cliente) => cliente.comSaldoDevedor === true));
};
