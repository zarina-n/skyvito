import { StyledTextArea } from './Input.styled'

const TextArea = ({ placeholder, name, id, width, height, onChange }) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      name={name}
      id={id}
      width={width}
      height={height}
      onChange={onChange}
    />
  )
}

export default TextArea
