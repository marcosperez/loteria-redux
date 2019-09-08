import React from "react";
import ResultadoLista from "./ResultadoLista";

function ResultadoSorteo(params) {
  return (
    <React.Fragment>
      {params.results &&
        Object.keys(params.results).map((sorteoTipo, index) => {
          return (
            <div style={{ flex: "1 1 auto" }} key={`${params.sorteo}-${index}`}>
              <div style={{ paddingTop: 20, paddingBottom: 5 }}>
                {sorteoTipo}
              </div>
              <div style={{ paddingTop: 5, paddingBottom: 5 }}>
                <ResultadoLista
                  results={params.results[sorteoTipo]}
                  sorteoTipo={sorteoTipo}
                />
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default ResultadoSorteo;
