const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

const buscaPet = (usuarios, pet) => {
  for (let usuario of usuarios) {
    if (usuario.pets.includes(pet)) {
      return `O dono(a) do(a) ${
        usuario.pets[usuario.pets.indexOf(pet)]
      } é o(a) ${usuario.nome}`;
    }
  }
  return `Que pena ${pet}, não encontramos seu dono(a)`;
};

console.log(buscaPet(usuarios, "Naninha"));
