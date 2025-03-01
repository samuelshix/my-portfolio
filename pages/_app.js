import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      {/* <div className="absolute w-full h-full grainy-bg"></div> */}
      <div className="fixed">
        <div className="gradient-bg z-[-1]">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo" className="">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1 z-[-1]"></div>
            <div className="g2 z-[-2]"></div>
            <div className="g3 z-[-3]"></div>
            <div className="g4 z-[-4]"></div>
            <div className="g5 z-[-5]"></div>
            <div className="interactive z-[-6]"></div>
          </div>
        </div>
      </div>
      <Component {...pageProps} />

    </ParallaxProvider>);
};

export default App;
