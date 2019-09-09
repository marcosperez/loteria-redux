import React from "react";
import ResultadoLista from "./ResultadoLista";

function ResultadoLoteria(props) {
  return (
    <React.Fragment>
      {props.results &&
        Object.keys(props.results).map((sorteoTipo, index) => {
          return (
            <div style={{ flex: "1 1 auto" }} key={`${props.sorteo}-${index}`}>
              <div style={{ paddingTop: 20, paddingBottom: 5 }}>
                {sorteoTipo}
              </div>
              <div style={{ paddingTop: 5, paddingBottom: 5 }}>
                <ResultadoLista
                  results={props.results[sorteoTipo]}
                  sorteoTipo={sorteoTipo}
                />
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default ResultadoLoteria;
