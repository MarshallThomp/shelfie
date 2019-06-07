import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleChangeImage = value => {
        this.setState({
            img: value
        })
    }

    handleChangeName = value => {
        this.setState({
            name: value
        })
    }

    handleChangePrice = value => {
        this.setState({
            price: value
        })
    }

    addProduct = () => {
        let { name, price, img } = this.state

        let newProduct = {
            name,
            price,
            img
        }

        this.props.createProduct(newProduct)

        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    handleClick = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    render(){
        let { name, price, img } = this.state

        return(
            <div>
                <input
                    type="text"
                    value={img}
                    onChange={e => this.handleChangeImage(e.target.value)}
                    placeholder='image'
                /> 
                <input
                    type="text"
                    value={name}
                    onChange={e => this.handleChangeName(e.target.value)}
                /> 
                <input
                    type="number"
                    value={price}
                    onChange={e => this.handleChangePrice(e.target.value)}
                />
                <button onClick={this.handleClick}>Cancel</button> 
                <button onClick={this.addProduct}>Add to Inventory</button> 
            </div>
        )
    }
}
export default Form