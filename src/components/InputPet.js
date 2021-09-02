import React from 'react'
import {Input, Icon, FormControl, Container} from 'native-base'
import {MaterialIcons} from '@expo/vector-icons'
import { useEffect } from 'react'

const InputGroup = ({data}) => {
  
  useEffect(() => {
    console.log('label :>> ', data);
  }, []);
  return (
    <Container>
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'white',
            fontSize: 12  
          }}
          _light={{
            color: 'white',
          }}
        >
          {data.label}
        </FormControl.Label>
        <Input
          w='100%'
          h='48px'          
          type={data.type}  
          InputLeftElement={
            <Icon
              as={<MaterialIcons name={data.icon} />}
              size='sm'
              m={2}
              _light={{
                color: 'white',
              }}
              _dark={{
                color: 'gray.300',
              }}
            />
          }
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
      </FormControl>
    </Container>
  )
}

export default InputGroup
