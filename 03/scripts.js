const carros = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

const grupoDeCarros = (carros, posicao) => {
  const lista = carros.slice(posicao, posicao + posicao);

  let result = lista.join(" - ");

  return result;
};

console.log(grupoDeCarros(carros, posicao));
