import { useState } from "react"
import OptionsDropdown from "./OptionsDropdown"
import "./autocomplete.scss"

interface AutocompleteProps {
  options: string[]
  id: string
  placeholder?: string
}

const AutoComplete = (props: AutocompleteProps): JSX.Element => {
  const { id, placeholder = "Enter a value", options } = props

  const [input, setInput] = useState("")
  const [showOptions, setShowOptions] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed")
    setInput(e.target.value)
    setShowOptions(true)
  }

  // const onClick = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log("selected")
  //   setShowOptions(true)
  // }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("key-down")
    setShowOptions(true)
  }

  return (
    <div className="autocomplete">
      <input
        aria-label={placeholder}
        className="autocomplete__input"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        value={input}
      />
      {showOptions && input && <OptionsDropdown options={options} />}
    </div>
  )
}

export default AutoComplete
