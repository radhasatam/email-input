import { Autocomplete } from "./components"
import "./styles/global.scss"

// TODO: Replace with spreadsheet values in a mocked API call
const EMAIL_LIST = [
  "test@gmail.com",
  "test2@gmail.com",
  "test3@gmail.com",
  "123@yahoo.com",
  "abc@g.com",
]

function App() {
  return (
    <main id="app">
      <div className="app-container">
        <Autocomplete
          id="email-input"
          placeholder="Enter recipients..."
          options={EMAIL_LIST}
        />
      </div>
    </main>
  )
}

export default App
