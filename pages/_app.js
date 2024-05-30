import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (<ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>);
};

export default App;
