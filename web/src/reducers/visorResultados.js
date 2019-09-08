import { setFiltroSorteo } from "../acciones/visorResultados";

const initialState = {
  filtroSorteo: setFiltroSorteo. ,
  todos: []
};

function todoApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  // Por ahora, no maneja ninguna acción
  // y solo devuelve el estado que recibimos.
  return state;
}
