import React,{useState} from 'react'
import Child from './Child'


export default function Parent() {
    const [first, setfirst] = useState("Haldi")  //see we can change name by state as well
  return (
    <div>
        <p>Parent is Masala Dabba</p>
        <Child name ={first} quantity="25 kg" setName ={setfirst}/>   
        </div>

  )
}
