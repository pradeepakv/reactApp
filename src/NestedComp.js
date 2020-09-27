import React, {Component} from 'react';

 class NestedComp extends Component {     
    render(){
        //console.log(this.props);
        const { nestedComp } = this.props;
        const nestedList = nestedComp.map(nested =>{
            return(
                <div className="nestedcomp" key={nested.id}>
                    <h1>Hi Pradeepa</h1>
                    <p>{ Math.random()*10 }</p>
                    <p>My name is: {nested.name}</p>
                    <p>My age is: {nested.age}</p>
                   
                </div>
                
            )
        }

        )
        return(
           <div className="nested-list">
                {nestedList}
           </div>
        )
    }
}
export default NestedComp;