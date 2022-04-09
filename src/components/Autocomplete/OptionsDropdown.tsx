import clsx from "clsx"

interface OptionsDropdownProps {
  activeOption: number
  options: string[]
}

const OptionsDropdown = (props: OptionsDropdownProps) => {
  const { activeOption, options } = props

  return options.length ? (
    <ul className="autocomplete__list" aria-label="Autocomplete Options">
      {options.map((o, index) => {
        return (
          <li
            className={clsx(
              index === activeOption ? "autocomplete__option--active" : "",
              "autocomplete__option"
            )}
            key={o}
            onClick={() => {
              // TODO: Implement selection
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
