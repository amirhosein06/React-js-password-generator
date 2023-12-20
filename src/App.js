import './App.css';

const iconlink = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>;

function App() {
  return (
    <div className='container'>
     <div className='preview'>
      <input type='text' disabled value=''/>
      <button>{iconlink}</button>
     </div>
     <div className='setting'>
      <div>length:<input type='number' value='10'/></div>
      <div>A-z<input type='checkbox'/></div>
      <div>1-9<input type='checkbox'/></div>
      </div>
      <button className='generatebtn'>Generate</button>
    </div>
  );
}

export default App;
