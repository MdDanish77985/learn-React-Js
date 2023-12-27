import { useState,useCallback,useEffect,useref, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numberallow, setNumberallow] = useState(false)
  const[charallow, setCharallow] = useState(false)
  const[password, setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pas = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallow) str += "0123456789"
    if(charallow) str += "!@#$%^&*-_+=[]{}~'"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pas += str.charAt(char)
    }
    setPassword(pas)

  },[length,numberallow,charallow,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  },
  [password])

useEffect(() => {passwordGenerator()},
 [length,numberallow,charallow,passwordGenerator])
  
  return (
    <div>
      <div className='w-full max-w-md h-36 mx-auto shadow-md
      rounded-lg px-4 my-10 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
      <div className='flex flex-row items-center 
      shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-4'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700
         text-white px-3 py-1 shrink-0'>
        Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
      <div className='flex flex-row items-center gap-x-1'>
        <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
        />
        <label className='text-olive py-3 text-xl'>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
          type='checkbox'
          defaultChecked={numberallow}
          id='numberInput'
          onChange={()=>{setNumberallow((prev)=> !prev);
          }}
        />
        <label htmlFor='numberInput'>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charallow}
            id='characterInput'
            onChange={() => {
              setCharallow((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Character</label>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
