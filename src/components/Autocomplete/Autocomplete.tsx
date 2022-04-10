import { useState } from "react"
import OptionsDropdown from "./OptionsDropdown"
import OptionsList from "./OptionsList"
import "./autocomplete.scss"

interface AutocompleteProps {
  options: string[]
  id: string
  placeholder?: string
}

const AutoComplete = (props: AutocompleteProps): JSX.Element => {
  const { id, placeholder = "Enter a value", options } = props

  const [input, setInput] = useState("")
  const [value, setValue] = useState<string[]>([])
  const [showOptions, setShowOptions] = useState(false)

  // filtered options array
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  // index of active option in the filtered option list
  const [activeOption, setActiveOption] = useState(0)

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
  const onSelectOption = (option: string) => {
    console.log("[...value, option]", [...value, option])
    setValue([...value, option])
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const onPressUpArrow = e.keyCode === 38
    const onPressDownArrow = e.keyCode === 40

    if (filteredOptions.length) {
      // TODO: Figure out scrolling issue
      if (onPressUpArrow) {
        if (activeOption === 0) {
          return
        }
        setActiveOption((currentOption) => currentOption - 1)
      } else if (onPressDownArrow) {
        if (activeOption + 1 === filteredOptions.length) {
          return
        }
        setActiveOption((currentOption) => currentOption + 1)
      }
    }
  }

  console.log("value", value[0])
  return (
    <div className="autocomplete">
      <div className="autocomplete__input">
        <OptionsList />
        <input
          aria-label={placeholder}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          type="text"
          value={value[0]}
        />
      </div>

      {showOptions && input && (
        <OptionsDropdown
          activeOption={activeOption}
          onSelect={onSelectOption}
          options={filteredOptions}
          setActiveOption={setActiveOption}
        />
      )}
    </div>
  )
}

export default AutoComplete
