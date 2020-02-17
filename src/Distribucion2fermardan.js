import React, {Component} from 'react';
import Imagen from 'react-image';


class Distribucion2fermardan extends Component{
    render(){
        return(
            <div className='generalfermardan2'>
                <h2>Distribucion 2</h2>
                <header className='generalfermardan2__cabecerafermardan2'>
                    Cabecera
                </header>
                <main className='generalfermardan2__cuerpofermardan2'>
                    Sección principal
                    <div>
                        {/* <Imagen alt='Paisaje6' src={require('./Recursos/Paisaje6.jpg')} /> */}
                    </div>
                   
                </main>
                <aside className='generalfermardan2__aside2fermardan2'>
                Barra lateral derecha
                </aside>
                <footer className='generalfermardan2__footerfermardan2'>
                    Pie de página
                </footer>
            </div>
        )
    }
}
export default Distribucion2fermardan;