const scrapeIt = require("scrape-it");

function obtenerResultados() {
  return new Promise((resolve, reject) => {
    // scrapeIt(
    //   "http://servicios.elcomercial.com.ar/quinielas/quiniela.php?quiniela=primera&loteria=Nac",
    //   {
    //     celdas: {
    //       listItem: ".numero"
    //     }
    //   }
    // )
    //   .then(({ data, response }) => {
    //     console.log(`Status Code: ${response.statusCode}`);
    //     console.log(data);
    //     // Procesamiento de resultados
    //     resolve();
    //   })
    //   .catch(() => reject());
    resolve();
  });
}

module.exports = {
  obtenerResultados: obtenerResultados
};
