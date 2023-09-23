// Usuário: "Qual é o horário de funcionamento?"
// Chatbot: "Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h."
// Usuário: "Como faço para entrar em contato?"
// Chatbot: "Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail contato@empresa.com."
// Usuário: "Onde fica a loja física?"
// Chatbot: "Nossa loja física está localizada na Rua Principal, número 123, na cidade X."

function respostasAoUsuario() {
  const pergunta = prompt(
    "Olá, seja bem-vindo(a) à nossa loja! Em que posso ajudar?"
  );

  switch (pergunta) {
    case "Qual é o horário de funcionamento?":
      console.log(
        "Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h."
      );
      break;
    case "Como faço para entrar em contato?":
      console.log(
        "Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail contato@empresa.com."
      );
      break;
    case "Onde fica a loja física?":
      console.log(
        "Nossa loja física está localizada na Rua Principal, número 123, na cidade X."
      );
      break;
    default:
      alert("Desculpe, não entendi sua pergunta. Pode tentar novamente?");
  }
}
