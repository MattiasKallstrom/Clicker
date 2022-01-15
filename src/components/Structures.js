import React from 'react';
import '../css/TheCookie.css';
class Structures extends React.Component{

    render(){
        return(
            <div className="item-wrapper">
              
              <h2 className="item">Shop</h2>
                    {this.props.structures.map((structure) => {
                        
                        return (
                            
                            <div className="item" key={structure.id}>
                                <h3>{structure.name}</h3>
                                 <h4>Each {structure.name} produces {structure.structureModifier} cookies per second</h4>
                                 <h5>You currently have {structure.amount} {structure.name}s</h5>
                                 <h5>{structure.amount} {structure.name}s produces {structure.amount * structure.structureModifier} cookies per second</h5>
                                 <h5>Cost {structure.price}</h5>
                                 <button onClick={() => this.props.structureHandler(structure.id)} >Buy</button>		            
                            </div>
                        )
                    })
                    }
               
            </div>
        )
    }
}
export default Structures;