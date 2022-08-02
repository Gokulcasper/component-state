import React, { Component } from "react";
import "./App.css";
import Table from "./Table";

class App extends Component {
  render() {
    const characters = [
      {
        name: "raj",
        job: "Developer",
      },
      {
        name: "selva",
        job: "Mech",
      },
      {
        name: "suresh",
        job: "service",
      },
      {
        name: "vijay",
        job: "engineer",
      },
    ];

    return (
      <div className="container">
        <h1>Table</h1>
        <Table charactersData={characters} />
      </div>
    );
  }
}

export default App;
