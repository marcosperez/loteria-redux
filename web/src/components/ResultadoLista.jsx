import React from "react";

function ResultadoLista(params) {
  return (
    <React.Fragment>
      {params.results.map((valor, index) => {
        return (
          <div key={`${params.sorteoTipo}-${index}`} style={{ padding: 5 }}>
            {valor}
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default ResultadoLista;
