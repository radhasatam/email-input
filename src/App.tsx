import { useEffect, useState } from "react"
import { Autocomplete } from "./components"
import "./styles/global.scss"

function App() {
  const [selected, setSelected] = useState<string[]>([])
  const [options, setOptions] = useState<string[]>([])
  useEffect(() => {
    // Mock API call
    fetch("emails.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(data => setOptions(data?.emails))
  }, [])

  return (
    <main id="app">
      <div className="app-container">
        <Autocomplete
          id="email-input"
          placeholder="Enter recipients..."
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </main>
  )
}

export default App
