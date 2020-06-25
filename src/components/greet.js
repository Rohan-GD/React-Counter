import React from 'react'

// function Greet(){
//   return <div className ='hello'><h1>Hello Rohan!</h1></div>
// }
export const Greet = props => {
  console.log(props)
return (
  <div>
<h1>Hello I am {props.name} {props.lastname} </h1>
{props.children}
</div>
)}
//export default Greet