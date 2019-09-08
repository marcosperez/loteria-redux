import { createStore } from "redux";

const initialState = {
  loteriaSeleccionada: "",
  resultadosLoterias: {}
};

export const SELECCIONAR_SORTEO = "SELECCIONAR_SORTEO";
export const CARGAR_RESULTADOS = "CARGAR_RESULTADO";

const reducerLoteria = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SELECCIONAR_SORTEO:
      return { ...state, loteriaSeleccionada: action.sorteo };

    case CARGAR_RESULTADOS:
      return {
        ...state,
        resultadosLoterias: action.resultados
      };

    default:
      return state;
  }
};

export default createStore(reducerLoteria);
