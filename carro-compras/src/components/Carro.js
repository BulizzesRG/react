import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetalleCarro from './DetalleCarro';

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20

    }
}

class Carro extends Component {
    render(){
        const { carro,esCarroVisible, mostrarCarro } = this.props;
        const quantity = carro.reduce((accumulator,product) => accumulator + product.quantity, 0 );
        return (
            <div>
                <span style={styles.bubble}>
                    { quantity !==0 ?
                    <BubbleAlert value={quantity}/> :
                    null }
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetalleCarro carro={ carro }/> : null }
                
            </div>
        );
    }
}


export default Carro;