import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="form-container">

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
