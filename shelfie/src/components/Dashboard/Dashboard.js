import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
  deleteCard(id) {
    axios.delete(`/api/product/${id}`).then(res => {
      console.log('Success!')
    })
  }
  render() {
    let productCards = this.props.inventory.map((e, i, a) => {
      return <Product key={i} productObj={e} deleteFn={this.deleteCard} updateFn={this.props.updateFn} updateImgs={this.updateImgs}/>
    })
    return(
      <div className="dashboard">
        {productCards}
      </div>
    );
  }
}