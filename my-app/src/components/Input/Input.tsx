
import {InputContainer, InputField, Label, ErrorMessage} from './styles'
import { InputProps } from './types'

function Input({ name, type = 'text', placeholder, label, value, onChange, error }: InputProps) {

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value = {value}
        onChange={onChange}
        
      />
      <ErrorMessage>{error}</ErrorMessage>
      
    </InputContainer>
  )
}

export default Input;
