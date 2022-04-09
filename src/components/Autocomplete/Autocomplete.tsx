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
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const filteredOptions = options.filter(
      (o) => o.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    )

    setInput(inputValue)
    setFilteredOptions(filteredOptions)
    setShowOptions(true)
  }

  // const onClick = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log("selected")
  //   setShowOptions(true)
  // }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('keydown')
    setShowOptions(false)
    setFilteredOptions([])
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
      {showOptions && input && <OptionsDropdown options={filteredOptions} />}
    </div>
  )
}

export default AutoComplete
