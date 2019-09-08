import React from "react";
import "./App.css";
import ResultadosQuinielaArgentina from "./components/ResultadosQuinielaArgentina";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResultadosQuinielaArgentina></ResultadosQuinielaArgentina>
      </div>
    </Provider>
  );
}

export default App;
