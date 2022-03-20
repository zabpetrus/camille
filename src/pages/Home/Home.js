import React from 'react';
import './home.style.css';
import Dados from '../../components/Dados/Dados';

export class Home extends React.Component{
    render(){
        return (            
            <div className='container'>
                <div className='row'>
                    <div className='pt-5'>
                        <h1>Home</h1>
                        <Dados />
                    </div>                     
                </div>
            </div> 
        );
    }
}
