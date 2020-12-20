import React from 'react';
import './loader.css'

class Loader extends React.Component{
    render(){
        return(
            <div className="loader-container">
                <div className="loader"></div>
                <div className="loader2"></div>
                <p>Loading....</p>
            </div>

        );
    }
}

export default Loader;