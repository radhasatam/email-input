import { useState } from "react"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import { ReactComponent as ErrorIcon } from "../../assets/icons/error.svg"

interface SelectedTagListProps {
  allOptions: string[]
  tags: string[]
  setTags: (arg0: string[]) => void
}

const SelectedTagList = (props: SelectedTagListProps) => {
  const { allOptions, tags, setTags} = props

  const [hovering, setHovering] = useState<number | null>(0)

  if (!tags.length) return null
  return (
    <>
      {tags.map((tag, index) => {
        let className = "autocomplete__tags"
        const isHovered = hovering === index;
        const isError = allOptions.filter(o => o === tag).length === 0

        if (isError) {
          className += " autocomplete__tags--styled autocomplete__tags--error"
        }
        else if (isHovered) {
          className += " autocomplete__tags--styled autocomplete__tags--active"
        }

        const removeTag = () => {
          setTags(tags.filter((t)=> t !== tag))
        }
        
        return (
          <span
            key={tag + index}
            onMouseEnter={() => setHovering(index)}
            onMouseLeave={() => setHovering(null)}
            className={className}
          >
            {tag}
            {!isError && isHovered && <CloseIcon onClick={removeTag} />}
            {isError && <ErrorIcon onClick={removeTag} />}
          </span>
        )
      })}
    </>
  )
}

export default SelectedTagList
