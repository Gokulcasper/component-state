import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Raja</td>
        <td>Mech</td>
      </tr>
      <tr>
        <td>Selva</td>
        <td>BikeMech</td>
      </tr>
      <tr>
        <td>Suresh</td>
        <td>Servicer</td>
      </tr>
      <tr>
        <td>Vijay</td>
        <td>Construction</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
