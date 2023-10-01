import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import DisplayBoxes from './components/DisplayBoxes';
import RequestForm from './components/RequestForm';
import RequestBoxesDisplay from './components/RequestBoxesDisplay';

function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([])
  const [ requestBoxesArray, setRequestBoxesArray ] = useState([])
  return (
    <div className="App">
      <h1>Choose a Color</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <DisplayBoxes boxColorArray={ boxColorArray } />
      <hr />
      <h1>Choose the Size</h1>
      <RequestForm requestBoxesArray={ requestBoxesArray } setRequestBoxesArray={ setRequestBoxesArray } />
      <RequestBoxesDisplay requestBoxesArray={ requestBoxesArray } />
      
    </div>
  )
}

export default App