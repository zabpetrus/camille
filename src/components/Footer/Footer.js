import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.style.css';

const mstyles = ['d-flex', 'justify-content-center', 'text-center'];

export default class Footer extends React.Component{
    render(){
        return(
            <footer className='container-fluid' >
                <div className='row'>
                    <hr/>
                    <div className={mstyles.join(" ")}>
                         <p>Todos os direitos reservados</p>
                    </div>
                   
                </div>
              
            </footer>

        );
    }
}
