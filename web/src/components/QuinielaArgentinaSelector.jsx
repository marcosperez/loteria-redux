import React, { useState, useEffect } from "react";
import Axios from "axios";
import ResultadoSorteo from "./ResultadoSorteo";

function QuinielaArgentinaSelector() {
  const [results, setResults] = useState([]);
  const [sorteoSeleccionado, setSorteoSeleccionado] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:8080/api/v1/results/quinielasargentinas").then(
      res => {
        if (res.data) {
          setResults(res.data);
          setSorteoSeleccionado(Object.keys(res.data)[0]);
        }
      }
    );
  }, []);
  return (
    <div
      className="ResultadosQuinielaArgentina"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <select
        name="cars"
        style={{ padding: 15, flex: "1 1 auto", fontSize: 20 }}
        value={sorteoSeleccionado}
        onChange={event => {
          setSorteoSeleccionado(
            Object.keys(results)[event.target.selectedIndex]
          );
        }}
      >
        {Object.keys(results).map(sorteo => (
          <option key={sorteo} value="sorteo">
            {sorteo}
          </option>
        ))}
      </select>

      {sorteoSeleccionado && (
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <ResultadoSorteo
            results={results[sorteoSeleccionado]}
            sorteo={sorteoSeleccionado}
          />
        </div>
      )}
    </div>
  );
}

export default QuinielaArgentinaSelector;
