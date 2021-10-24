import React, { Component } from 'react'

export default class ResolveComp extends Component {
    
   constructor() {
       super();
       this.state={ 
           stats: " "
       }
    }




rejected=()=>{
     this.props.fu(this.props.y.ind,"rejected");
    }
    
resolved=()=>{
    this.props.fu(this.props.y.ind,"resolved");
} 
    render() {
         var z = this.props.y;
         console.log(this.props.y)
        return (
            <div>
                <div>{<li>email :{z.email}  index : {z.ind}
                | description:{z.description}| Title:{z.title}| Status: {z.stat }     
                 <button onClick={this.resolved}>Resolved </button>
                <button onClick={this.rejected}>Rejected </button> 
                </li>   
         } 
            </div>
            </div>
        )
    }
}
