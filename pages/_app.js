import '../styles/globals.css'
import {LoginProvider} from '../Context/metamaskContext'
function MyApp({ Component, pageProps }) {
  return(
    <LoginProvider>
      <Component {...pageProps}/>
    </LoginProvider>
  )  
}

export default MyApp
