import React from 'react';
import Slider from '../../components/Slider/Slider';

export class Revista extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='mt-5'>
                        <h1>Revista</h1>
                        <Slider/>
                    </div>
                </div>
            </div>
        );
    }
}