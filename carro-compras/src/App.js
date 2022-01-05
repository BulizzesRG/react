import { Component } from 'react';
import Productos  from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500 , image: '/productos/tomate.jpg' },
      { name: 'Chicharos', price: 1500 , image: '/productos/chicharos.jpg' },
      { name: 'Lechuga', price: 1500 , image: '/productos/lechuga.jpg' },
    ],
    carro: [],
    esCarroVisible: false
  };

  agregarAlCarro = (product) => {
    const { carro } = this.state;
    if(carro.find(p => p.name === product.name)){
      const newCar =  carro.map(pr => pr.name === product.name
        ? ({
          ...pr,
          quantity: pr.quantity + 1
        })
        : pr );

        return this.setState({ carro: newCar });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...product,
        quantity: 1
      })
    });
  };

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return;
    }
    
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }


  render(){
    const { esCarroVisible } = this.state;

    return (
      <div>
        <Navbar carro = {this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}></Navbar>
        <Layout>
          <Title></Title>
          <Productos
          agregarAlCarro={ this.agregarAlCarro }
          productos ={this.state.productos}></Productos>
        </Layout>
      </div>
    );
  }
}



export default App;
