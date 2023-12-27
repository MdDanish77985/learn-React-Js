import { useState } from "react";

function App() {

let [counter,setCounter] = useState(15)

 // let counter = 15

  const addValue= () =>{
    console.log("Clicked",counter);
    // counter=counter +1;
    setCounter(counter+1)
  }
  const removeValue = () =>{
    if(counter>0){
    console.log("Clicked",counter)
    setCounter(counter-1)
    }
  }
  return (
    <div>
    <h1 >hello world</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br></br>
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer : {counter}</p>
    
    </div>
  );
}

export default App;
