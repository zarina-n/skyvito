import { StyledTextArea } from './Input.styled'

const TextArea = ({ placeholder, name, id, width, height }) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      name={name}
      id={id}
      width={width}
      height={height}
    />
  )
}

export default TextArea
