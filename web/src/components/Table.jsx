import React from "react";

import "../styles/table.css";

const Table = () => {
  return (
    <main className="main-container">
      <table className="main-table">
        <thead>
          <tr>
            <th>Proprietário</th>
            <th>CPF</th>
            <th>CEP</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Romário César Da Silva</td>
            <td>13254353693</td>
            <td>35400000</td>
            <td>Bauxita</td>
            <td>Ouro Preto</td>
            <td>MG</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Romário César Da Silva</td>
            <td>13254353693</td>
            <td>35400000</td>
            <td>Bauxita</td>
            <td>Ouro Preto</td>
            <td>MG</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Romário César Da Silva</td>
            <td>13254353693</td>
            <td>35400000</td>
            <td>Bauxita</td>
            <td>Ouro Preto</td>
            <td>MG</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Table;
