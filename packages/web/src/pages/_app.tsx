// pkgs:
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'

// utils:
import { store } from '../redux/store'
import '../common/styles/global.sass'
import '../common/styles/app.sass'

const appIdentity = {
    brand: {
        900: '#345f83',
        800: '#5785aa',
        700: '#83b2d8',
    },
}
const theme = extendTheme({ appIdentity })

// root wrapper:
function Stalkmeapp({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider store={store}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </ReduxProvider>
    )
}
export default Stalkmeapp
