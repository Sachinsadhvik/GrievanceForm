/* eslint-disable react/jsx-no-comment-textnodes */
import update from 'react-addons-update';
import React, {Component } from 'react';
import './App.css';
import ResolveComp from './components/ResolveComp';
import UncontrolForms from './components/UncontrolForms';



export default class App extends Component {

  constructor(){
    super();
    this.state= {
      arr:[]
    }}


     ParentFun=(x)=>{
        //console.log(x.email)
        x.stat="null";
       this.setState( {arr : [...this.state.arr, x]})
      }

    Resol=(index,status)=>{
      console.log(typeof(index))
      console.log(this.state.arr)
      const x= [...this.state.arr]
      x[index].stat= status;
      this.setState(
        {arr: x}
      );
      //console.log(this.state.arr[0],this.state.arr[i])
    
   }

  render() {

    return (
      <div>
       <UncontrolForms x={this.ParentFun}/> 
      {this.state.arr.map((k,i)=>{ return k["ind"]=i+1, <ResolveComp y={k} fu={this.Resol} />} )          }
       </div>
    )
  }
}



// function App() {
// const [state, funday] = useState([]);
// const ParentFun=(x)=>{
//   //console.log(x.email)
//   funday([x]);
// }
//   return (
//     <div className="App">
//       <UncontrolForms x={ParentFun}/>
//       <h1> {state}</h1> 
//       </div>
//       );
//       }

// export default App;