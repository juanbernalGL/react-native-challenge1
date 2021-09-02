import React from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  HStack,
  Text,
  Icon,
  Input,
  VStack,
  Center,
  Heading,
  NativeBaseProvider,
} from 'native-base'
import Logo from './Logo'
import InputPet from './InputPet'
import {useEffect} from 'react'

const InputGroupPet = ({errors, label, onChange, name, type}) => {
  return (
    <FormControl isRequired isInvalid={'name' in errors} pt="8">
      <FormControl.Label
        _text={{
          color: 'white',
          fontSize: 12
        }}
        _light={{
          color: 'white',
        }}
      >
        {label}
      </FormControl.Label>
      <Input
        h='48px'
        type={type}
        placeholder={name}        
        onChangeText={(value) => onChange(name, value)}
        placeholderTextColor="gray.300"
      />
    </FormControl>
  )
}

export default InputGroupPet
