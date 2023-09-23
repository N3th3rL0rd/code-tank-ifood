const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
];

const capitalizeFolgas = () => {
  let resultado = folgas.map((dia) => {
    return dia.charAt(0).toUpperCase() + dia.slice(1);
  });
  console.log(resultado);
};
