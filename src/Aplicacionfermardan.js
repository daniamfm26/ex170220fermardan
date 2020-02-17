import React, {Component} from 'react';
import {Router, Link} from '@reach/router';
import Distribucion1fermardan from './Distribucion1fermardan';
import Distribucion2fermardan from './Distribucion2fermardan';
import Distribucion3fermardan from './Distribucion3fermardan';
import Pruebasfermardan from './Pruebasfermardan';

class Aplicacionfermardan extends Component{
  render(){
    return(
      <div>
          <div className='contenedorfermardan'>
              <nav className='contenedorfermardan__menufermardan'>
                <div><Link to='/Distribucion1fermardan'><p>Distribucion 1</p></Link></div>
                <div><Link to='/Distribucion2fermardan'><p>Distribucion 2</p></Link></div>
                <div><Link to='/Distribucion3fermardan'><p>Distribucion 3</p></Link></div>
                <div><Link to='/Pruebasfermardan'><p>Pruebas</p></Link></div>
              </nav>
          </div>
          <Router>
            <Distribucion1fermardan path='/Distribucion1fermardan' />
            <Distribucion2fermardan path='/Distribucion2fermardan' />
            <Distribucion3fermardan path='/Distribucion3fermardan' />
            <Pruebasfermardan path='/Pruebasfermardan' />
          </Router>
      </div>
    )
  }
}




export default Aplicacionfermardan
