import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
// import patternDivider from "/images/pattern-divider-mobile.svg"

function App() {

  const [advice, setAdvice] = useState("")
  const winWidth = window.innerWidth

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
        <p><q>{advice.advice}</q></p>
        {console.log(winWidth)}
        <img alt='pattern' src={process.env.PUBLIC_URL + 'pattern-divider-mobile.svg'} />
        <div className='dice-container'>
          <img alt='dice icon' src={process.env.PUBLIC_URL + 'icon-dice.svg'} />
        </div>
        
      </div>    
    </div>
  );
}

export default App;
