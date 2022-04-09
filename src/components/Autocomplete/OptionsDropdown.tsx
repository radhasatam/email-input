interface OptionsDropdownProps {
  options: string[]
}

const OptionsDropdown = (props: OptionsDropdownProps) => {
  const { options } = props

  return options.length ? (
    <ul className="autocomplete__list" aria-label="Autocomplete Options">
      {options.map((o, index) => {
        let className

        return (
          <li
            className={className}
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