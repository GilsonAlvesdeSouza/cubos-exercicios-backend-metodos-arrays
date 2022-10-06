const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const agendarAtendimento = (pacientes, nome) => {
  pacientes.push(nome);
  return pacientes.join(", ");
};

const cancelarAtendimento = (pacientes, nome) => {
  const posicao = pacientes.indexOf(nome);

  pacientes.splice(posicao, 1);

  return pacientes.join(", ");
};

console.log(agendarAtendimento(pacientes, "Power Rangers"));
console.log(cancelarAtendimento(pacientes, "Ana"));
