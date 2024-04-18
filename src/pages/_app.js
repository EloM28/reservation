import "@/styles/globals.css";
import '@/styles/pagination.css'
import { Navbar } from "./navbar/Navbar";
export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return(
   <>
   <Navbar/>
   <Component {...pageProps} />
   </>

  ) ;
}
