const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const filaAtendimento = (listaFila, operacao, nomePaciente) => {
  let posicao = pacientes.indexOf(nomePaciente);
  if (operacao === "atender") {
    listaFila.splice(posicao, 1);
  }

  if (operacao === "agendar") {
    listaFila.splice(posicao, 1);
    listaFila.push(nomePaciente);
  }
  if (listaFila.length === 0) {
    return (listaFila = "Sem parcientes para atender");
  }
  return listaFila.join(", ");
};

console.log(filaAtendimento(pacientes, "atender", "José"));
console.log(filaAtendimento(pacientes, "atender", "Pedro"));
console.log(filaAtendimento(pacientes, "atender", "Maria"));
console.log(filaAtendimento(pacientes, "atender", "João"));
console.log(filaAtendimento(pacientes, "atender", "Ana"));
console.log(filaAtendimento(pacientes, "atender", "Bárbara"));
console.log(filaAtendimento(pacientes, "atender", "Joana"));
