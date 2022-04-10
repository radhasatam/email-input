import { useState } from "react"
import OptionsDropdown from "./OptionsDropdown"
import SelectedTagList from "./SelectedTagList"
import "./autocomplete.scss"

interface AutocompleteProps {
  options: string[]
  id: string
  placeholder?: string
  selected: string[]
  setSelected: (arg0: string[]) => void
}

const AutoComplete = (props: AutocompleteProps): JSX.Element => {
  const {
    id,
    placeholder = "Enter a value",
    options,
    selected,
    setSelected,
  } = props

  const [input, setInput] = useState("")
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

  const onSelectOption = (option: string) => {
    setSelected([...selected, option])
    setShowOptions(false)
    setInput("")
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const onPressUpArrow = e.keyCode === 38
    const onPressDownArrow = e.keyCode === 40
    const onPressEnter = e.keyCode === 13
    const onPressTab = e.keyCode === 9

    if (input) {
      if (onPressEnter || onPressTab) {
        if (filteredOptions.length) {
          setSelected([...selected, filteredOptions[activeOption]])
        } else {
          setSelected([...selected, input])
        }
        setShowOptions(false)
        setInput("")
      }
    }

    // TODO: Implement backspace / delete to remove an item

    if (filteredOptions.length) {
      if (onPressUpArrow) {
        // FIXME: Figure out scrolling issue
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

  return (
    <div className="autocomplete">
      <div className="autocomplete__input">
        <SelectedTagList
          allOptions={options}
          tags={selected}
          setTags={setSelected}
        />
        <input
          aria-label={placeholder}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          type="text"
          value={input}
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
