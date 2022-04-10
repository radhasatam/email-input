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
    const key = {
      UP: e.keyCode === 38,
      DOWN: e.keyCode === 40,
      ENTER: e.keyCode === 13,
      TAB: e.keyCode === 9,
      BACKSPACE: e.keyCode === 8,
    }

    // Remove item on backspace if there are any items
    if (key.BACKSPACE) {
      if (selected.length) {
        // Remove item non-mutating
        const newSelected = [...selected]
        newSelected.splice(-1)
        setSelected(newSelected)
      }
    }

    // Add new tag value on tab / enter
    if (input) {
      if (key.ENTER || key.TAB) {
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
      if (key.UP) {
        // FIXME: Figure out scrolling issue
        if (activeOption === 0) {
          return
        }
        setActiveOption((currentOption) => currentOption - 1)
      } else if (key.DOWN) {
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
