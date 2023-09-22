// TO DO LIST (CRUD)

class Atividade {
  constructor(nome, descricao, responsavel) {
    this.nome = nome;
    this.descricao = descricao;
    this.responsavel = responsavel;
  }
}

const listaDeAtividades = [];

var listaAtividades = document.getElementById("listaAtividades");

        // Função para exibir os itens do array na lista
        function exibirItens(atividade) {
          listaAtividades.innerHTML = ""; // Limpa a lista atual

            for (var i = 0; i < listaDeAtividades.length; i++) {
                var li = document.createElement("li");
                // item.appendChild(document.createTextNode(listaDeAtividades[i]));
                li.innerText = `Nome: ${atividade.nome} - Descrição: ${atividade.descricao} - Responsável: ${atividade.responsavel}`;
                listaAtividades.appendChild(item);
            }
        }

// const adicionarAtividadeHtml = (atividade) => {
//   const listaAtividades = document.getElementById("listaAtividades");
  // listaAtividades.innerHTML = "";
  // const li = document.createElement("li");
  // li.innerText = `Nome: ${atividade.nome} - Descrição: ${atividade.descricao} - Responsável: ${atividade.responsavel}`;
  // listaAtividades.appendChild(li);
// };

//ADICIONAR UMA ATIVIDADE
const adicionarAtividade = (nome, descricao, responsavel) => {
  nome = prompt("Informe o nome:");
  descricao = prompt("Informe a descricao:");
  responsavel = prompt("Informe o responsavel:");

  const atividadeCadastrada = listaDeAtividades.find(
    (atividade) => atividade.nome === nome
  );
  if (atividadeCadastrada) {
    alert("Atividade já cadastrada!");
    return;
  }
    const novaAtividade = new Atividade(nome, descricao, responsavel);
    listaDeAtividades.push(novaAtividade);
  // adicionarAtividadeHtml(novaAtividade);
  exibirItens();
  console.log(listaDeAtividades);
};

//REMOVER UMA ATIVIDADE
const removerAtividade = (nome) => {
  nome = prompt("Informe o nome da atividade:");
  index = listaDeAtividades.findIndex((atividade) => {
    return atividade.nome === nome;
  });
  listaDeAtividades.splice(index, 1);
  // adicionarAtividadeHtml(listaDeAtividades);
  exibirItens();
  console.log(listaDeAtividades);
}

//PESQUISAR UMA ATIVIDADE
const buscarAtividade = (nome) => {
  nome = prompt("Informe o nome da atividade:");
  atividade = listaDeAtividades.find((atividade) => {
    return atividade.nome === nome;
  });
  adicionarAtividadeHtml(atividade);
  console.log(listaDeAtividades);
  return atividade;

}

//EDITAR DESCRICAO DE UMA ATIVIDADE
const editarDescricaoAtividade = (nome, novaDescricao) => {
  atividade = buscarAtividade(nome);
  novaDescricao = prompt("Informe a nova descricao:");
  atividade.descricao = novaDescricao;
  adicionarAtividadeHtml(atividade);
  console.log(listaDeAtividades);
};
