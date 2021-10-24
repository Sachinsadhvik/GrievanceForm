import React, { Component } from 'react'

export default class StateImp extends Component {
constructor(){
    super();
    this.state={
        count:0,userData:{
            fName:'',
            lName:''
        },
        taskName:'',
        todos: []
    }
}
 incrementCount=()=>{
// this.setState ({
//     count: this.state.count +1
// }, ()=>{console.log(this.state.count) // setstate happens asynchorously so get updated state value using callback
// }
//     )
this.setState((prevState,props) => {
    return {count: prevState.count + 1}
})
}

incrementCountbyFive=()=>{
this.incrementCount();
this.incrementCount();this.incrementCount();this.incrementCount();this.incrementCount();
}

updateFirst=(event)=>{
 this.setState({
     userData:{...this.state.userData,
         fName:event.target.value
     }
 })
}
updateSecond=(event)=>{
    this.setState({
        userData:{ ...this.state.userData,
            lName:event.target.value
        }
    })
   }

updateTask=(event)=>{
      
    this.setState({
    taskName: event.target.value
    })
}

addTask=()=>{
 const {taskName}=this.state;
 this.setState(
     {todos : [...this.state.todos, taskName]}
 )

    

}
    render() {
        const {count,userData,todos} =this.state
        return (
            
            <div>
             <h1>count:  {count}</h1> 
               <button onClick={this.incrementCount}>+1 </button> 
               <button onClick={this.incrementCountbyFive}>+1 </button>  
          {userData.fName} {userData.lName}
           <div>
               <label>FirstName</label>
               <input onChange={this.updateFirst}/> <br></br>
               <label>SecondName</label>
               <input onChange={this.updateSecond}/>
           </div>
           <div>{todos.map((todo)=>  { return <li>{todo}</li>})}</div>
           <label> Addtask</label> 
             <input onChange={this.updateTask}/>
             <button onClick={this.addTask}>Addtask</button>
             

           </div>
        )
    }
}
