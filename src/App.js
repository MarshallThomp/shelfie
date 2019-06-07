import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import axios from 'axios'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  createProduct = newProduct => {
    axios.post('/api/inventory', newProduct).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteProduct = id => {
    axios.delete(`/api/inventory/${id}`).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  updateProduct = product => {
    axios.put(`/api/inventory/${product.product_id}`, product).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Dashboard
            inventory={this.state.inventory}
            deleteProduct={this.deleteProduct}
            updateProduct={this.updateProduct}
          />
          <Form
            createProduct={this.createProduct}
          />
        </div>
      </HashRouter>
    )
  }
}

export default App;
