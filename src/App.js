import React, { Component } from "react";
import "./App.css";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
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
    ],
  };

  removeCharacter = (index) => {
    console.log(index);
    const { characters } = this.state;
    let filtered = characters.filter((character, i) => {
      return i !== index;
    });
    this.setState({ characters: filtered });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>Table</h1>
        <Table
          removeCharacter={this.removeCharacter}
          charactersData={characters}
        />
      </div>
    );
  }
}

export default App;
