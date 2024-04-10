import React from 'react'

//parent me data likha nad child me show kiya

export default function Child(props) {
    console.log("props==>",props)
  return (
    <div>Child {props.name} {props.quantity}
    <p><button onClick={()=>{props.setName('Red Chilli Powder')}}>Change Masala</button></p></div>
  )
}
