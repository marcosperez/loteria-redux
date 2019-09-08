import { createStore } from 'redux';


function SorteosApp(){
    return {
        SorteoSeleccionado: visibilityFilter(state.visibilityFilter, action)
      };
}


const store = createStore()