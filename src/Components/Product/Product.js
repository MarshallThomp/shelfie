import React, { Component } from 'react'

class Product extends Component{
    render(){
        let { product, deleteProduct, updateProduct } = this.props
        return(
            <div>
                <div>
                    <img src={product.img} alt=""/>
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                </div>
                <button onClick={deleteProduct}>Delete</button>
                <button onClick={updateProduct}>Update</button>
            </div>
        )
    }
    }
export default Product