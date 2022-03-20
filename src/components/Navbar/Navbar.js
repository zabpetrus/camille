import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  logotipo  from '../../assets/logo.png';

const listclasses = ['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light']; 
const collapse = ['collapse', 'navbar-collapse']; 
const act_class = ['nav-link', 'active']; 


export default class Navbar extends React.Component{ 
       
    render(){
        return(
            <nav className={listclasses.join(" ")}>
                 <div className='container-fluid' >
                    <Link to="/" className='navbar-brand' >
                        <img src={logotipo} alt='logo' className='logoreact' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={collapse.join(" ")} id="navbarNavAltMarkup">
                        <div className='navbar-nav'>
                            <Link to="/" className={act_class.join(" ")} >Home</Link>
                            <Link to="/revista" className='nav-link'>Revista</Link>
                            <Link to="/about" className='nav-link'>About Us</Link>
                        </div>
                    </div>                                     
                </div>
            </nav>
        );
    }
}