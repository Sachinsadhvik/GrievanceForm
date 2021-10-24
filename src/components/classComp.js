import React, { Component } from 'react'

export default class classComp extends Component {

     constructor() {
       super();
       this.state={ 
        count:0
      }

    }

    render() {
        
        var items =["sachin","sadhvik","ambati"]
        return (

            <div>
               <h1 colour="blue" > hello all</h1>
               <ul>
                   { items.map( (x)=> {
                       return <li style={{color:"green"}}>{x+"sasasa"}</li>
                   }
         

                   )}
               </ul>
               <h3>{this.props.name}</h3>
               
            </div>
        )
    }
}
