import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [advice, setAdvice] = useState("")

  const fetchNewAdvice = async () => {
    const newAdvice = await axios.get("https://api.adviceslip.com/advice")
    console.log(newAdvice.data);
    setAdvice(newAdvice.data.slip)
  }

  useEffect(() => {
    fetchNewAdvice()
  }, [])

  return (
    <div className="App">
      <div className='advice-container' >
        <h5>advice # {advice.id}</h5>
        <p>{advice.advice}</p>
      </div>
      
    </div>
  );
}

export default App;
