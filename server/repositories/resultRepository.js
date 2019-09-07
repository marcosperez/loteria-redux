const quinielasargentinas = require("../scrapers/pages/quinielasargentinas.com");
const elcomercial = require("../scrapers/pages/servicios.elcomercial.com.ar");

scrappers = {
  quinielasargentinas: quinielasargentinas,
  elcomercial: elcomercial
};

var ResultRepository = {};

ResultRepository.data = {};

ResultRepository.init = function() {
  Object.keys(scrappers).forEach(scrapperName => {
    quinielasargentinas.obtenerResultados().then(results => {
      this.data[scrapperName] = results;
    });
  });
};

ResultRepository.getResults = function(scrapperName) {
  return this.data[scrapperName];
};

module.exports = ResultRepository;
