const tarefas = [
  "Estudar",
  "Fazer compras",
  "Limpar a casa",
  "Fazer exercícios",
];

const obterPrimeiraTarefa = () => {
  console.log(tarefas.shift());
  console.log(tarefas);
};
