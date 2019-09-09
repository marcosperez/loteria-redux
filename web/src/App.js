import React from "react";
import "./App.css";
import Loterias from "./components/Loterias";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loterias></Loterias>
      </div>
    </Provider>
  );
}

export default App;
