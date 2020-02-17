import React, {Component} from 'react';

class Distribucion1fermardan extends Component{
    render(){
        return(
            <div className='generalfermardan'>
                <h2>Distribucion 1</h2>
                <header className='generalfermardan__cabecerafermardan'>
                    Cabecera
                </header>
                <aside className='generalfermardan__asidefermardan'>
                    Barra lateral izquierda
                </aside>
                <main className='generalfermardan__cuerpofermardan'>
                    Sección principal
                </main>
                <aside className='generalfermardan__aside2fermardan'>
                Barra lateral derecha
                </aside>
                <footer className='generalfermardan__footerfermardan'>
                    Pie de página
                </footer>
            </div>
        )
    }
}

export default Distribucion1fermardan;