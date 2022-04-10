import clsx from "clsx"

interface OptionsDropdownProps {
  activeOption: number
  options: string[],
  onSelect: (arg0: string) => void
  setActiveOption: (arg0: number) => void
}

const OptionsDropdown = (props: OptionsDropdownProps) => {
  const { activeOption, onSelect, options, setActiveOption, } = props

  return options.length ? (
    <ul className="autocomplete__dropdown" aria-label="Autocomplete Options">
      {options.map((o, index) => {
        return (
          <li
            className={clsx(
              index === activeOption ? "autocomplete__option--active" : "",
              "autocomplete__option"
            )}
            key={o}
            onMouseEnter={() => setActiveOption(index)}
            onClick={() => {
              onSelect(o);
            }}
          >
            {o}
          </li>
        )
      })}
    </ul>
  ) : (
    <div className="autocomplete__empty" aria-label="No options found">
      <em>No options found</em>
    </div>
  )
}

export default OptionsDropdown
