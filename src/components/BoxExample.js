import {Button, useToast, VStack} from 'native-base'
import React, {useEffect} from 'react'
import InputGroupPet from './InputGroupPet'
import Logo from './Logo'

const BoxExample = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = React.useState({})

  const toast = useToast()

  useEffect(() => {
    validate()
  }, [])

  const validate = (name) => {
    if (formData[name] === undefined) {
      setErrors({
        ...errors,
        [name]: 'Name is required',
      })
      return false
    } else if (formData[name].length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short',
      })
      return false
    }
    setErrors({})
    return true
  }

  const onSubmit = () => {
    if (formData.email !== 'test@gorillalogic.com') {
      toast.show({
        title: 'Invalid credentials',
        status: 'error',
        description: 'Invalid credentials',
      })
    } else {
      toast.show({
        title: 'Valid credentials',
        status: 'success',
        description: 'Valid credentials',
      })
    }
  }

  onChangeHandler = (name, value) => {
    console.log('evt :>> ', name)
    console.log('evt :>> ', value)
    setFormData({
      ...formData,
      [name]: value,
    })
    validate(name)
  }

  isValidForm = () => {
    return !formData.email.length || !formData.password.length
  }
  return (
    <>
      <VStack space={4} alignItems='center'>
        <Logo />
      </VStack>
      <VStack width='80%' mx={3}>
        <InputGroupPet
          errors={errors}
          label='Email'
          name='email'
          type='email'
          onChange={onChangeHandler}
        />
        <InputGroupPet
          errors={errors}
          label='Password'
          name='password'
          type='password'
          onChange={onChangeHandler}
        />
        <Button
          onPress={onSubmit}
          mt='16'
          h='48px'
          colorScheme='petGreen'
          disabled={isValidForm()}
          _text={{
            color: 'white',
            fontSize: 14,
          }}
        >
          Login
        </Button>
      </VStack>
    </>
  )
}

export default BoxExample
