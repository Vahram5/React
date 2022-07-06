import './App.css';
import HtmlPhoto from "./app/html.js"
import { useDispatch, useSelector } from 'react-redux';
import { selectPhotoArray } from './features/photoArr/photoArrSlice';

function App() {
  const photos = useSelector(selectPhotoArray)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <HtmlPhoto photos={photos} dispatch={dispatch} />
    </div>
  );
}

export default App;
