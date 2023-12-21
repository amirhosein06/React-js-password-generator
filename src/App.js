import './App.css';
import React,{ useState } from 'react'

const iconlink = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>;
const uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
const specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]";
const numeric ="0123456789";

function App() {
  const [passlenth, setPasslenth] = useState(10);
  const [mastearray, setMastearray] = useState(numeric);
  const [password, setPassword] = useState('');
  function copytoclipbord(){
    const inputval = document.querySelectorAll('.preview input')[0].value;
    navigator.clipboard.writeText(inputval);
    document.querySelectorAll('.preview input')[0].value = 'Copy To Clipboard!';
    setTimeout(() => {
      document.querySelectorAll('.preview input')[0].value = inputval;
    }, 1500);
  };
  function checkinputchang(){
    const inputs = document.querySelectorAll('.setting input[type=checkbox]');
    if(inputs[0].checked === true && inputs[1].checked === true && inputs[2].checked === true){
      setMastearray(uppercaseABC + specialSymbols + numeric);
    }else if(inputs[0].checked === true && inputs[1].checked === false && inputs[2].checked === false){
      setMastearray(uppercaseABC);
    }else if(inputs[0].checked === false && inputs[1].checked === true && inputs[2].checked === false){
      setMastearray(numeric);
    }else if(inputs[0].checked === false && inputs[1].checked === false && inputs[2].checked === true){
      setMastearray(specialSymbols);
    }else if(inputs[0].checked === true && inputs[1].checked === true && inputs[2].checked === false){
      setMastearray(uppercaseABC + numeric);
    }else if(inputs[0].checked === false && inputs[1].checked === true && inputs[2].checked === true){
      setMastearray(numeric + specialSymbols);
    }else if(inputs[0].checked === true && inputs[1].checked === false && inputs[2].checked === true){
      setMastearray(specialSymbols + uppercaseABC);
    }
  };
  function generatepassword(){
    let digit = '';
    for(let i = 0;i < passlenth;i++){
      const index = Math.floor(Math.random() * mastearray.length);
      digit += mastearray[index];
      setPassword(digit);
    }
  };
  return (
    <div className='container'>
     <div className='preview'>
      <input type='text' disabled value={password}/>
      <button onClick={copytoclipbord}>{iconlink}</button>
     </div>
     <div className='setting'>
      <div>length:<input type='number' value={passlenth}
       onChange={(e) =>{if(e.target.value < 25){setPasslenth(e.target.value)}}}/></div>
      <div>A-z<input onChange={checkinputchang} type='checkbox'/></div>
      <div>1-9<input onChange={checkinputchang} type='checkbox' defaultChecked/></div>
      <div>!-@<input onChange={checkinputchang} type='checkbox'/></div>
      </div>
      <button className='generatebtn' onClick={generatepassword}>Generate</button>
    </div>
  );
}

export default App;
