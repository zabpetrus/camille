import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.style.css';


export default class Footer extends React.Component{
    render(){
        return(
            <footer className='container-fluid' >
                <hr/>
                <p>Todos os direitos reservados</p>
            </footer>

        );
    }
}
