const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const agendarAtendimento = (pacientes, nome) => {
  let index = pacientes.indexOf(nome);
  pacientes.splice(index, 1);
  pacientes.push(nome);
  return pacientes.join(", ");
};

const atenderPaciente = (pacientes, nome) => {
  let index = pacientes.indexOf(nome);
  pacientes.splice(index, 1);
  return pacientes.join(", ");
};

const cancelarAtendimento = (pacientes, nome) => {
  const posicao = pacientes.indexOf(nome);
  pacientes.splice(posicao, 1);
  return pacientes.join(", ");
};

console.log(agendarAtendimento(pacientes, "Pedro"));
console.log(cancelarAtendimento(pacientes, "Ana"));
console.log(atenderPaciente(pacientes, "José"));
