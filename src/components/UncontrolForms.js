import React, { Component } from 'react'
export default class uncontrolForms extends Component {
  
   constructor(){
   super();
   this.state= {
      obj:{
       email:"",
       title:"",
       description:""
   }}

   }
     handleEmail=(event)=>{
     this.setState({obj:{...this.state.obj,
      email:event.target.value
  }}) 
     }
     handleTitle=(event)=>{
      this.setState({obj:{...this.state.obj,
       title:event.target.value
   }}) 
      }
   handleDescription=(event)=>{
      this.setState({obj:{...this.state.obj,
       description:event.target.value
   }}) 
      }

   submitform=(event)=>{
    // this.props.x({"email":this.state.email,"description":this.state.description, "title":this.state.title});
    this.props.x(this.state.obj)
    // console.log(this.state.obj)
     event.preventDefault();
   }
    
    render() { const val=this.state.obj;
     
        return (
        <div>
            <form onSubmit={this.submitform} >
              <label>
                Email: </label>
                <input type="text" name="Email" value={val.email} onChange={this.handleEmail} />
               <br></br> 
             
             <label>
                Title: </label>
                <input type="text" name="Title" value={val.title} onChange={this.handleTitle} />
                <br></br> <br></br>
             <label>
                description: </label>
                <textarea type="text" name="description" value={val.description} onChange={this.handleDescription}/>
                <br></br>  <br></br>
               <button type="submit">submit </button>
            </form>
            
            </div>
            )
    }
}
