import React from 'react'
import {Box, Image} from 'native-base'

// let IMG from '../assets/logo.png'

const Logo = () => {
  return (
    <Box w='100%'>
      <Image
        source={require('../assets/logo.png')}
        alt='Alternate Text'      
      />
    </Box>
  )
}

export default Logo
