import React from 'react';
import logo from '../images/cookie-gif.gif';
import '../css/thecookie.css'

class MainClicker extends React.Component{
    constructor(props){
        super();
        this.clickHandler = this.clickHandler.bind(this);
     }
     clickHandler(){
         this.props.EditScore(1);
     }

     render(){
         return(
         <div className="click-container">
         <div>
            <img className="click-image" src={logo} onClick={this.clickHandler} alt="cookie"/>
         </div>
         </div>
         )
     }
} 

export default MainClicker; 