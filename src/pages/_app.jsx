import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Fonts from "../components/font";
import { Analytics } from "@vercel/analytics/react";

import Loading from "./loading";
import { useRouter } from "next/router";
import { useState } from "react";


import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  router.events.on('routeChangeStart', (url) => {
    setLoading(true);
   });

  router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      {
          
        loading ? <Loading /> : <Component {...pageProps} /> 
      }
        <Footer />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
