import React from 'react';
// import { useDispatch } from 'react-redux';
import './css/App.css';
import Header from './features/header/header';


function App() {


  // const categories = useSelector((state) => {
  //   return state
  // })

    // console.log(categories)

    return (
        <div className="App">
          <Header/>
        </div>
    );
}

export default App;
