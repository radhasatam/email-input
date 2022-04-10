import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg'

interface OptionsListProps {
}

const OptionsList = (props: OptionsListProps) => {
  return <>
    <span className="autocomplete__tags">something@gmail.com</span>
    <span className="autocomplete__tags autocomplete__tags--styled autocomplete__tags--active">theresa@outlook.com <CloseIcon /></span>
    <span className="autocomplete__tags autocomplete__tags--styled autocomplete__tags--error">erictaylor <ErrorIcon /></span>
  </>
}

export default OptionsList
