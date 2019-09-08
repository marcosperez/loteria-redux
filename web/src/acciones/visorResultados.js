SET_FILTRO_SORTEO = "SET_FILTRO_SORTEO";

function setFiltroSorteo(text) {
  return {
    type: SET_FILTRO_SORTEO,
    text
  };
}

export default {
  setFiltroSorteo: setFiltroSorteo
};
