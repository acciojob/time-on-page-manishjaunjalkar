import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [time, setTime] = useState(0)

    useEffect(()=>{
      const idx = setInterval(()=>{
        setTime((prev)=>prev+1)
      },1000)
  
    return () => {
     clearInterval(idx)
    }
  }, [])
  
  
  console.log(time)
  return (
    <div>
       <h1>You have on this page from {time} seconds</h1>
    </div>
  )
}

export default App