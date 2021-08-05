import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // JS
  // render() {
  //   const name = "John Doe";

  //   return React.createElement('h1', null, `Hello ${name}`);
  // }

  // JSX
  render() {
    const name = "John Doe";

    return (
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    )
  }
}

export default App;
