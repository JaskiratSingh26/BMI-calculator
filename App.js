import react   from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  let  [weight,setweight]=useState(0)
  let  [height,setheight]=useState(0)
  let  [bmi,setbmi]=useState(0)

  function ans(){
 let hgt=height/100
 let crthgt=hgt*hgt
  let finalresult=Math.round(weight/crthgt)
   setbmi(finalresult)

  }
    function ww(e){
    setweight(e.target.value)
    
  }
  
  
  function hh(e){
    setheight(e.target.value)
    ans()
  }
  return (
    <div>


      <div className="container">
        <h1>   BMI - CALCULATOR</h1>
        <label htmlFor="weight">
          weight {weight}  kg
        </label>

        <input  onChange={ww} type="range" id='weight'  min="0" max="200" />
         <label htmlFor="height">height  {height}  cm   </label>
         <input type="range" name="" id="height" min='0'  max='200'   onChange={hh} />
   <h2> Your BMI is </h2>
   <button className=' btn' >{bmi}</button>
      </div>
    </div>
  );
}

export default App;
