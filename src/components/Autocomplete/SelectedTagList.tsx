import { useState } from "react"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
// import { ReactComponent as ErrorIcon } from "../../assets/icons/error.svg"

interface SelectedTagListProps {
  tags: string[]
  setTags: (arg0: string[]) => void
}

const SelectedTagList = (props: SelectedTagListProps) => {
  const { tags, setTags} = props

  const [hovering, setHovering] = useState<number | null>(0)

  if (!tags.length) return null
  return (
    <>
      {tags.map((tag, index) => {
        let className = "autocomplete__tags"
        const isHovered = hovering === index;

        if (isHovered) {
          className += " autocomplete__tags--styled autocomplete__tags--active"
        }
        return (
          <span
            onMouseEnter={() => setHovering(index)}
            onMouseLeave={() => setHovering(null)}
            className={className}
          >
            {tag}
            {isHovered && <CloseIcon onClick={() => {
              setTags(tags.filter((t)=> t !== tag))
            }} />}
            {/* {isError && <ErrorIcon onClick={() => console.log('TODO: remove this item')} />} */}
          </span>
        )
      })}
    </>
  )
}

export default SelectedTagList
