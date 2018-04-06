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
      editFlag: false,
      id: 0,
      defImg: 'http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'
    }
    this.editFn = this.editFn.bind(this)
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
      editFlag: false,
      id: 0
    })
  }
  addProduct() {
    let { name, price, imgurl } = this.state
    let obj = {
      name: name,
      price: price,
      url: imgurl
    }
    if(this.state.editFlag) {
      axios.put(`/api/product/${this.state.id}`, obj).then(res => {
        console.log('Success!')
        this.props.updateImgs()
      })
    } else {
      axios.post(`/api/product`, obj).then(res => {
        console.log('Success!')
        this.props.updateImgs()
      })
    }
    this.cancel()
  }
  editFn(obj) {
    let { id, name, url, price } = obj
    this.setState({
      id: id,
      name: name,
      imgurl: url,
      price: price,
      editFlag: true
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