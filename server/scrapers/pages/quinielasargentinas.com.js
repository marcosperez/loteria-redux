const scrapeIt = require("scrape-it");
const grupos = [
  "Loteria Nacional",
  "Loteria De Bs. As.",
  "Loteria De Santa Fe",
  "Loteria De Entre Rios"
];

const grupos2 = [
  "Loteria Nacional",
  "Loteria De Bs. As.",
  "Loteria De Santa Fe",
  "Loteria De Montevideo",
  "Loteria De Entre Rios"
];

function ObtenerClaveSorteo(index, data, dataLenght) {
  var result = data[index % dataLenght];

  return result;
}

function obtenerResultados() {
  return new Promise((resolve, reject) => {
    return scrapeIt(
      "https://www.quinielasargentinas.com/mobile/index.php?accion=ver-resultados",
      {
        celdas: {
          listItem: "table.table_cabezas td"
        },
        sorteos: {
          listItem: "td.td_tit_cabeza"
        }
      }
    )
      .then(({ data, response }) => {
        const s1 = data.sorteos[0];
        const r1 = data.celdas.slice(1, 81);
        const s2 = data.sorteos[1];
        const r2 = data.celdas.slice(82, 162);
        const s3 = data.sorteos[2];
        const r3 = data.celdas.slice(163, 263);
        const s4 = data.sorteos[3];
        const r4 = data.celdas.slice(264);

        resultados = {};
        resultados[s1] = {};
        resultados[s2] = {};
        resultados[s3] = {};
        resultados[s4] = {};

        r1.forEach((celda, index) => {
          let sorteo = ObtenerClaveSorteo(index, grupos, 4);
          if (resultados[s1][sorteo]) {
            resultados[s1][sorteo].push(celda);
          } else {
            resultados[s1][sorteo] = [celda];
          }
        });

        r2.forEach((celda, index) => {
          let sorteo = ObtenerClaveSorteo(index, grupos, 4);
          if (resultados[s2][sorteo]) {
            resultados[s2][sorteo].push(celda);
          } else {
            resultados[s2][sorteo] = [celda];
          }
        });

        r3.forEach((celda, index) => {
          let sorteo = ObtenerClaveSorteo(index, grupos2, 5);
          if (resultados[s3][sorteo]) {
            resultados[s3][sorteo].push(celda);
          } else {
            resultados[s3][sorteo] = [celda];
          }
        });

        r4.forEach((celda, index) => {
          let sorteo = ObtenerClaveSorteo(index, grupos2, 5);
          if (resultados[s4][sorteo]) {
            resultados[s4][sorteo].push(celda);
          } else {
            resultados[s4][sorteo] = [celda];
          }
        });
        // Procesamiento de resultados
        resolve(resultados);
      })
      .catch(() => reject());
  });
}

module.exports = {
  obtenerResultados: obtenerResultados
};
