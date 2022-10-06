const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

const novasFrutas = frutas.join(", ");

console.log(novasFrutas);

frutas.shift();
frutas.splice(3, 1, "Melão");

console.log(frutas);
