import React from 'react';
import Structures from './structures';
import ShowScore from './score';
import MainClicker from './mainclicker';
import '../css/TheCookie.css';

class TheCookie extends React.Component{
    render(){
        return(
            <div className="container">
                  <div className="Cookie">
                    <div className="Score">
                        <MainClicker EditScore={this.props.EditScore}/>
                        <ShowScore score={this.props.score}/>
                   </div>
                </div>
                <Structures structures={this.props.structures} structureHandler={this.props.structureHandler}/>
            </div>
        )
    }
}

export default TheCookie;