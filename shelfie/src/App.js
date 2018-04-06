import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

import './reset.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({inventory: res.data})
    })
    console.log(this.state.inventory)
  }
  render() {
    return (
      <div className="App">

        <Header />

        <Dashboard 
          inventory={this.state.inventory}
        />
        <Form />
      </div>
    );
  }
}

export default App;
