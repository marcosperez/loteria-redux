import React from "react";
import "./App.css";
import QuinielaArgentinaSelector from "./components/QuinielaArgentinaSelector";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <QuinielaArgentinaSelector></QuinielaArgentinaSelector>
    </div>
    // </Provider>
  );
}

export default App;
