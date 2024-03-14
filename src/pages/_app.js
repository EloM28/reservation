import "@/styles/globals.css";
import '@/styles/carousel.css'
import { Navbar } from "./navbar/Navbar";
export default function App({ Component, pageProps }) {
  return(
   <>
  
  <Navbar/>
   <Component {...pageProps} />
   </>

  ) ;
}
