import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.inventory.map(product => {
                    return (
                        <Product 
                            key={product.product_id}
                            product={product}
                            deleteProduct={() => this.props.deleteProduct(product.product_id)}
                            updateProduct={this.props.updateProduct}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Dashboard