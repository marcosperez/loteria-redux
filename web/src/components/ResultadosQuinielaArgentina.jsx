import React, { useState, useEffect } from "react";
import Axios from "axios";

function ResultadoSorteo(params) {
  return (
      <React.Fragment >
      {params.resultSorteos &&
        Object.keys(params.resultSorteos).map((sorteoTipo, index) => {
          return (
            <div style={{flex:"1 1 auto"}} key={`${params.sorteo}-${index}`}>
              <div
                
                style={{ paddingTop: 20, paddingBottom: 5}}
              >
                {sorteoTipo}
              </div>
              <div style={{ paddingTop: 5, paddingBottom: 5}}>  
                <ResultadoLista resultados={params.resultSorteos[sorteoTipo]} sorteoTipo={sorteoTipo}/> 
              </div>
            </div>
          );
        })}
        </React.Fragment>
  );
}

function ResultadoLista(params) {
  return (
    <React.Fragment>
      {params.resultados.map((valor, index) => {
          return (
            <div key={`${params.sorteoTipo}-${index}`}
              style={{ padding: 5}}
            >
              {valor}
            </div>
          );
        })}
    </React.Fragment>
  );
}

function ResultadosQuinielaArgentina() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    
    // Actualiza el título del documento usando la API del navegador
    // Axios.get(`http://${window.location.host}/api/v1/results/quinielasargentinas`).then(
    Axios.get(`http://localhost:8080/api/v1/results/quinielasargentinas`).then(
      res => {
        setResults(res.data);
      }
    );
    
  },[]);

  return (
    <div className="ResultadosQuinielaArgentina" style={{display: "flex",  flexWrap: "wrap"}}>
      {results &&
        Object.keys(results).map(sorteo => {
          let resultSorteos = results[sorteo];
          return (
            <div key={sorteo} style={{ flex:"1 1 auto" }}>
              <div style={{ padding: 10, marginTop: 20}}>
                <strong>{sorteo}</strong>
              </div>
              <div style={{width: "100%",display: "flex",  flexWrap: "wrap"}}>
                <ResultadoSorteo resultSorteos={resultSorteos} sorteo={sorteo}/>
            </div>
            </div>
          );
        })}
    </div>
  );
}

export default ResultadosQuinielaArgentina;
