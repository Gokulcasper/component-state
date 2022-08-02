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

const TableBody = (props) => {
  const { charactersData } = props;
  const tableData = charactersData.map((characters, index) => {
    return (
      <tr key={index}>
        <td>{characters.name}</td>
        <td>{characters.job}</td>
      </tr>
    );
  });
  return <tbody>{tableData}</tbody>;
};

class Table extends Component {
  render() {
    // console.log(this.props.charactersData);
    const { charactersData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody charactersData={charactersData} />
      </table>
    );
  }
}

export default Table;
