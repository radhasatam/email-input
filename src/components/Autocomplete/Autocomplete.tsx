import { useState } from "react"
import "./autocomplete.scss"

interface AutocompleteProps {
  options: string[]
  id: string
  placeholder?: string
}

const AutoComplete = (props: AutocompleteProps): JSX.Element => {
  const { id, placeholder = "Enter a value", options } = props

  const [input, setInput] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed")
    setInput(e.target.value)
  }

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log("clicked")
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("key-down")
  }

  return (
    <input
      aria-label={placeholder}
      className="autocomplete"
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type="text"
      value={input}
    />
  )
}

export default AutoComplete
