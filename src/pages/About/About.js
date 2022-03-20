import React from 'react';
import './about.style.css';
import img1 from '../../assets/1036-800x400.jpg';

export class About extends React.Component{
    render(){
        return (        
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='pt-5'>
                            <h1>About</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nam vestibulum est eros, non auctor lacus fermentum sit amet. 
                                    Nulla orci massa, lobortis a sapien eu, sodales vehicula enim. Maecenas est velit, 
                                    cursus vitae urna in, imperdiet vulputate diam. Duis congue vehicula semper. 
                                    Duis gravida nisi in nibh tincidunt rutrum. Nulla venenatis leo ac enim egestas accumsan.
                                    Nunc ac elementum purus. 
                                    Vivamus facilisis, mauris pulvinar varius dignissim, felis neque tristique metus, 
                                    sit amet volutpat augue urna sed dolor. Integer libero leo, laoreet vel ultricies id, efficitur ac nulla.
                                    Suspendisse efficitur malesuada rutrum. Nunc porta justo augue, a faucibus enim pellentesque vel. 
                                    Donec odio lacus, tempus in neque sit amet, efficitur semper augue. Fusce et neque elit. 
                                    Nullam quis dignissim magna, ut lobortis ante. Fusce non risus vitae tortor blandit imperdiet.
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    
                    </div>

                        </div>
                   
                    <div className='col-md-4'>
                        <div className='bl'>
                            <img src={img1} alt='' />
                        </div>
                        
                    </div>

                </div>
            </div>          
         );
    }
}
