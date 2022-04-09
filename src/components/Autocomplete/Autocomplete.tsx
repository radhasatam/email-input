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
  const [activeOption, setActiveOption] = useState(0) // index of active option

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setInput(inputValue)

    const filteredOptions = options.filter(
      (o) => o.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    )
    setFilteredOptions(filteredOptions)

    setShowOptions(true)
    setActiveOption(0)
  }

  // const onClick = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log("selected")
  //   setShowOptions(true)
  // }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("keydown")
    // setShowOptions(false)
    // setFilteredOptions([])

    const onPressUpArrow = e.keyCode === 38
    const onPressDownArrow = e.keyCode === 40

    // TODO: Figure out scrolling issue
    if (onPressUpArrow) {
      if (activeOption === 0) {
        return
      }
      setActiveOption((currentOption) => currentOption - 1)
    } else if (onPressDownArrow) {
      if (activeOption - 1 === options.length) {
        return
      }
      setActiveOption((currentOption) => currentOption + 1)
    }
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
      {showOptions && input && (
        <OptionsDropdown
          activeOption={activeOption}
          options={filteredOptions}
        />
      )}
    </div>
  )
}

export default AutoComplete
