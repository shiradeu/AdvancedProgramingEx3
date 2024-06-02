import { useState } from 'react';
import './App.css';
import Article from './Article';
import lst from './db.json';

function App() {
  const [articlesList,setList] =useState(lst) 
  const additem= () =>{
   const item= {
    "prop1": "added button item!",
    "prop2":"added button item!",
    "prop3": "added button item!"
  }

  setList([...articlesList,item])
}
  return (
  < div className="App">
    <button onClick={additem}>Add</button>
    {
    articlesList.map((item) =>
        <Article {...item}/>
  )
    }
  </div>
   );
}

export default App;
