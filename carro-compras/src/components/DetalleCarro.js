import { Component} from 'react';

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetalleCarro extends Component {
    render(){
        const { carro } = this.props;
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                {carro.map( producto =>
                    <li style={styles.producto} key={producto.name}>
                        <img alt={producto.name} width='50' height='33' src={producto.image} />
                         {producto.name}  <span> {producto.quantity} </span>
                    </li>
                )} 
                </ul>
               
            </div>
        );
    }
}

export default DetalleCarro;