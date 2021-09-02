import React from 'react'
import { NativeBaseProvider, Center } from 'native-base';

import { theme } from './src/styles/styles';
import BoxExample from './src/components/BoxExample';



export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1} bg="petPurple.400">
        <BoxExample />
       </Center>
    </NativeBaseProvider>
  )
}
