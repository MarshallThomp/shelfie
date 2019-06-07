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

    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name]: value
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

    defaultImg = () => {
        this.setState({
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        })
    }

    componentDidUpdate(prevProps, prevState) {
        
    }



    render(){
        let { name, price, img } = this.state

        return(
            <div>
                <input
                    type="text"
                    value={img}
                    onChange={this.handleChange ? this.handleChange
                        :
                        this.defaultImg}
                        placeholder='image'
                /> 
                <input
                    type="text"
                    value={name}
                    onChange={this.handleChange}
                /> 
                <input
                    type="number"
                    value={price}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Cancel</button> 
                <button onClick={this.addProduct}>Add to Inventory</button> 
            </div>
        )
    }
}
export default Form