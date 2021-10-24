import React,{useState} from 'react'
//useState, useEffect, usecontext, useReducer // useContext + useReducer
export default function ComponentA() {
const [Count, setCount] = useState(0)

const increment=()=>{
      setCount(Count +1)
}
    return (
        <div>
            <h1>Count :{Count} </h1>
            <button onClick={increment}>button</button>
        </div>
    )
}

