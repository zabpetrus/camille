import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.css';

export default class Header extends React.Component{
    render(){

        const classlogo = ['logo','mx-auto', 'mt-3'];

        return (           
            <h2 className='d-flex'>
                <Link to="/" className={classlogo.join(" ")} >Camilla</Link>
            </h2>
            );
    }
}
