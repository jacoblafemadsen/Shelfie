import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      imgurl: '',
      defImg: 'http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'
    }
  }
  updateImgUrl(e) {
    this.setState({imgurl: e})
  }
  updateName(e) {
    this.setState({name: e})
  }
  updatePrice(e) {
    this.setState({price: e})
  }
  cancel() {
    this.setState({
      name: '',
      price: '',
      imgurl: '',
      defImg: 'http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'
    })
  }
  addProduct() {
    let { name, price, imgurl } = this.state
    let obj = {
      name: name,
      price: price,
      imgurl: imgurl
    }
    axios.post(`/api/product`, obj).then(res => {
      console.log('Success!')
    })
  }
  render() {
    return(
      <div className="form">
        <div className="formImg">
          <img src={this.state.imgurl === ''? this.state.defImg:this.state.imgurl} alt=''/>
        </div>
        <label>Image URL:</label>
        <input className="input"
          placeholder="Image Url"
          value={this.state.imgurl}
          onChange={e => this.updateImgUrl(e.target.value)}/>
        <label>Product Name:</label>
        <input className="input"
          placeholder="Name"
          value={this.state.name}
          onChange={e => this.updateName(e.target.value)}/>
        <label>Price:</label>
        <input className="input"
          placeholder="Price"
          value={this.state.price}
          onChange={e => this.updatePrice(e.target.value)}/>
        <div className="btnDiv">
          <button className="button1"
            onClick={() => this.cancel()}>Cancel</button>
          <button className="button2"
            onClick={() => this.addProduct()}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}