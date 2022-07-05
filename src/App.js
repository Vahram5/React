import { useState } from 'react';
import './App.css';
import { Main } from './Components/main';
import { prevState } from './features/code';

function App() {

  const [question, setQuestion] = useState(prevState)

  return (
    <div className="App">
      <Main 
        props={question} 
        MakeItTrue={(el)=> {
          setQuestion( 
            question.map((element)=>{
              if(element.id === el.id){
                return ({
                  id: el.id,
                  question: el.question,
                  answer: el.answer,
                  opened: !el.opened
                })
              }
              return element
          }))
       }} />
    </div>
  );
}

export default App;
