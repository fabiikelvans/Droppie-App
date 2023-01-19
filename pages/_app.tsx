import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Grid from "../components/Grid/Grid";
import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";

// Lenis Scroll
// GSAP

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        })

//get scroll value
        {/*@ts-ignore*/}
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            console.log({ scroll, limit, velocity, direction, progress })
        });

        function raf(time:any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    });

  return (
      <>
          <div className='relative'>
        <Component {...pageProps} />
              <Grid/>
          </div>
      </>
  )
}
