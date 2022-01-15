import React from 'react';

class ShowScore extends React.Component{
    render(){
        return(
        <div className="click-container">
            <h3>Cookies: {this.props.score}</h3>
            </div>   
        )}
}

export default ShowScore;