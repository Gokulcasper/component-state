import React, { Component } from "react";
import "./App.css";
import Table from "./Table";

class App extends Component {
  render() {
    // const characters = [
    //   {
    //     name: "gokul",
    //     job: "engineer",
    //   },
    //   {
    //     name: "raj",
    //     job: "Developer",
    //   },
    //   {
    //     name: "mani",
    //     job: "Dev",
    //   },
    //   {
    //     name: "velu",
    //     job: "Dev",
    //   },
    // ];

    return (
      <div className="container">
        <h1>Table</h1>
        {/* <Table charactersData={characters} /> */}
        <Table />
      </div>
    );
  }
}

export default App;
