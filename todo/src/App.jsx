import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <form className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label><br></br>
        <input type="text" id="item" />
      </div>
    </form>
  )
}

export default App
