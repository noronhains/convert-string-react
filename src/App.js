import React, { Component } from 'react';
import './App.css';
const upper = "upper";
const lower = "lower";
const camelCase = "camelCase";
const firstLetter = "firstLetter";
class App extends Component {
  constructor(props){
    super(props);
    this.state = { message: "Seu texto" }
  }

  converter(action){
    let message = this.state.message;
    switch (action) {
      case lower:
        message = message.toLowerCase();
        break;
      case upper:
        message = message.toUpperCase();
        break;
      case camelCase:
        let palavras = message.split(" ")
        let newMessage = "";
        palavras.forEach(palavra => {
          newMessage += palavra.substring(0, 1).toUpperCase() + palavra.substring(1, palavra.length).toLocaleLowerCase() + " ";
        });
        message = newMessage;
        break;
      case firstLetter:
        message = message.substring(0, 1).toUpperCase() + message.substring(1, message.length).toLowerCase();
        break;
      default:

        break;
    }
    this.setState({ message });
  }

  render() {
    return (
      <div className="App">
        <textarea className="textArea" onChange={(evt)=> {
         // let m = evt.target.value;
         // this.setState({ message: m });
         let message = evt.target.value;
         this.setState({ message });
        }}value={this.state.message}>
        </textarea>
        <div className="buttons">
          <button onClick={() => this.converter(lower)}>lowercase</button>
          <button onClick={() => this.converter(upper)}>UPPERCASE</button>
          <button onClick={() => this.converter(camelCase)}>Camel Case</button>
          <button onClick={() => this.converter(firstLetter)}>First letter</button>
        </div>
      </div>
    );
  }
}

export default App;
