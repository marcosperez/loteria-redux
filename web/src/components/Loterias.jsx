import React, { useEffect } from "react";
import Axios from "axios";
import ResultadoLoteria from "./ResultadoLoteria";
import { connect } from "react-redux";
import { SELECCIONAR_SORTEO, CARGAR_RESULTADOS } from "../store";

function Loterias({
  loteriaSeleccionada,
  resultadosLoterias,
  setSorteoSeleccionado,
  loadResultados
}) {
  useEffect(() => {
    Axios.get("http://localhost:8080/api/v1/results/quinielasargentinas").then(
      res => {
        if (res.data) {
          loadResultados(res.data);
        }
      }
    );
  }, [loadResultados]);

  return (
    <div
      className="ResultadosQuinielaArgentina"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <select
        name="cars"
        style={{ padding: 15, flex: "1 1 auto", fontSize: 20 }}
        value={loteriaSeleccionada}
        onChange={event => {
          setSorteoSeleccionado(
            Object.keys(resultadosLoterias)[event.target.selectedIndex]
          );
        }}
      >
        {Object.keys(resultadosLoterias).map(sorteo => (
          <option key={sorteo} value={sorteo}>
            {sorteo}
          </option>
        ))}
      </select>

      {loteriaSeleccionada && (
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          <ResultadoLoteria
            results={resultadosLoterias[loteriaSeleccionada]}
            sorteo={loteriaSeleccionada}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  loteriaSeleccionada: state.loteriaSeleccionada,
  resultadosLoterias: state.resultadosLoterias
});

const mapDispatchToProps = dispatch => ({
  setSorteoSeleccionado(sorteo) {
    dispatch({
      type: SELECCIONAR_SORTEO,
      sorteo
    });
  },
  loadResultados(resultados) {
    dispatch({
      type: CARGAR_RESULTADOS,
      resultados
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loterias);
