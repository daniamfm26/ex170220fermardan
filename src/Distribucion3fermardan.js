import React, {Component} from 'react';
import Imagen from 'react-image';


class Distribucion3fermardan extends Component{
    render(){
        return(
            <div className='contenedor2fermardan'>
                <div className='contenedor2fermardan__contenedorimgfermardan'>
                    <Imagen alt='Paisaje1' src={require('./Recursos/Paisaje1.jpg')} />
                    <Imagen alt='Paisaje2' src={require('./Recursos/Paisaje2.jpg')} />
                    <Imagen alt='Paisaje3' src={require('./Recursos/Paisaje3.jpg')} />
                    <Imagen alt='Paisaje4' src={require('./Recursos/Paisaje4.jpg')} />
                    <Imagen alt='Paisaje5' src={require('./Recursos/Paisaje5.jpg')} />
                    <Imagen alt='Paisaje6' src={require('./Recursos/Paisaje6.jpg')} />
                    <Imagen alt='Paisaje7' src={require('./Recursos/Paisaje7.jpg')} />
                    <Imagen alt='Paisaje8' src={require('./Recursos/Paisaje8.jpg')} />
                </div>
            </div>
        )
    }
}
export default Distribucion3fermardan;