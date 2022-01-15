import './App.css';
import React, { Component } from 'react';
import Databank from './components/databank';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TheCookie from './components/thecookie';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      structures: Databank.structures,
      modifier: 1,
      total: 0
    }
    this.scoreHandler = this.scoreHandler.bind(this);
    this.structureHandler = this.structureHandler.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
  }

  scoreHandler(num){
      const totalScore = this.state.score + num*this.state.modifier;
      this.setState({
        score: totalScore
      });
  }
 
  structureHandler(id){
    let allowStructure = this.state.structures;
    if(this.state.score >= allowStructure[id].price){
      const totalScore = this.state.score - allowStructure[id].price
      allowStructure[id].amount++;
      allowStructure[id].price = Math.ceil(allowStructure[id].price * 1.3);
      this.setState({
        structures: allowStructure,
        score: totalScore
      });
      this.structureProducer();
    }
  }

  
  structureProducer(){
    let addProducer = 0;
    this.state.structures.forEach(function(structure){
      addProducer = addProducer + (structure.structureModifier * structure.amount)
    });
    this.setState({
      total: addProducer
    });
  }
  calcTotal(){
    const addScore = this.state.score + this.state.total;
    this.setState({
      score: addScore
    });
  }
  componentDidMount(){
    setInterval(this.calcTotal, 1000);
  }
  render(){
    return (
      <Router basename="/Clicker">
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => (
              <TheCookie
               score={this.state.score}
               EditScore={this.scoreHandler}
               structures={this.state.structures}
               structureHandler={this.structureHandler}/>
               )}/>
                       
              </Switch>
          </div>
      </Router>

    );
  }
}




export default App;
