import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [counter,setcounter]=useState(15)
const addvalue=()=>{
  console.log("value added",Math.random());
  if(counter==20){
    setcounter(20);
  }
  else{setcounter(counter+1);}
}
const removevalue=()=>{
  if(counter==0){
    setcounter(0);
  }
  else{
  setcounter(counter-1);}
}
  return (
    <>
      <h1>chai aur react</h1>
       <h2>counter:{counter}</h2>
       <button onClick={addvalue}>add value:{counter}</button>
       <br />
       <button onClick={removevalue}>remove value:{counter}</button>
    </>
  )
}

export default App
