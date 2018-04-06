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
    this.updateFn = this.updateFn.bind(this)
    this.updateImgs = this.updateImgs.bind(this)
  }
  componentDidMount() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({inventory: res.data})
    })
    console.log(this.state.inventory)
  }
  updateFn(obj) {
    this.child1.editFn(obj);
  }
  updateImgs() {
    axios.get(`/api/inventory`).then(res => {
      this.setState({inventory: res.data})
    })
  }
  render() {
    return (
      <div className="App">

        <Header />

        <Dashboard 
          updateImgs={this.updateImgs}
          updateFn={this.updateFn}
          inventory={this.state.inventory}
        />
        <Form updateImgs={this.updateImgs} ref={instance => { this.child1 = instance; }}/>
      </div>
    );
  }
}

export default App;
