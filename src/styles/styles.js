import {extendTheme} from 'native-base'
import { alignItems, textAlign, textColor } from 'styled-system'

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#00DA9F',
      900: '#6C21DF',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
    petPurple:{
      400: '#6C21DF',  
    },
    petGreen:{
      400: '#00DA9F',  
      600: '#008e67',  
    }
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'white',
      },
      defaultProps: {size: 'md', color: 'white'},
      sizes: {
        xl: {fontSize: '64px'},
        lg: {fontSize: '32px'},
        md: {fontSize: '16px'},
        sm: {fontSize: '12px'},
      },
    },
    Input: {
      baseStyle: {
        borderColor: 'white',
      },
    },
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
        mt: '8',        
      },
      defaultProps: {
        colorScheme: 'petGreen',       
        color: 'white',
        w: '100%',
        alignItems: 'center'
      },      
    },
  },
})
