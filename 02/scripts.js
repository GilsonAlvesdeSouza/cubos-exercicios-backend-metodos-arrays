const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];
const tamanhoDoGrupo = 4;

const grupos = (nomes, tamanhoDoGrupo) => {
  let newArray = [];

  for (i = 0; i < nomes.length; i = i + tamanhoDoGrupo) {
    newArray.push(nomes.slice(i, i + tamanhoDoGrupo));
  }

  let result = "";

  for (let [indexGrupo, grupos] of newArray.entries()) {
    result += `grupo ${indexGrupo + 1}: `;
    for (let i = 0; i < grupos.length; i++) {
      if (i < grupos.length - 1) {
        result += `${grupos[i]}, `;
      } else {
        result += `${grupos[i]}. \n`;
      }
    }
  }
  return result;
};

console.log(grupos(nomes, tamanhoDoGrupo));
