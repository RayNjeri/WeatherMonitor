import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response : false,
      endpoint : 'http://127.0.0.1:4001'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = SocketIOClient(endpoint);
    socket.on('FromAPI', data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
            The temperature in Florence is: {response} °F
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}

export default App;
