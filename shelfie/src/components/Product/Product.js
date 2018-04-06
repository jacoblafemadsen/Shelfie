import React from 'react'
import './Product.css'

export default function Product(props) {


  return(
    <div className="product">
      <div className="productImg">
        <img src={props.productObj.url} alt=''/>
      </div>
      <h1>{props.productObj.name}</h1>
      <h2>{`$${props.productObj.price}`}</h2>
      <button className="btnDelete"
        onClick={() => {
          props.deleteFn(props.productObj.id)
        }}>Delete</button>
      <button className="btnEdit"
        onClick={() => props.updateFn(props.productObj)}>Edit</button>
    </div>
  );
}