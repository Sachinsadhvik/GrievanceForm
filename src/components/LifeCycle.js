import React, { Component } from 'react'

export default class LifeCycle extends Component {

constructor(){
     super();
    this.state={
        count:0
    }
}

staticgetDerivedstateFromProps(){
console.log("derivedstateFromProps")
return null;
}

componentDidMount(){
     {count} =this.state
console.log("componentDidMount")
this.setState(
    {count: 10})

}

shouldComponentUpdate(){
console.log("shouldComponentUpdate")
return null
}
getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
}
componentDidUpdate(){
console.log("componentDidUpdate")
}



    render() {
        const {count}= this.state
        return (
            <div>
                <h1>current {count}</h1>
            </div>
        )
    }
}
