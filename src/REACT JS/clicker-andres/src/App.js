import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonClick from "./components/ButtonClick";

class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'React Clicker v2'
    };
  }

  render() {
    return (
        <div>
          <div className="mt-5">
            <ButtonClick />
          </div>
        </div>
    );
  }
}

export default App;
