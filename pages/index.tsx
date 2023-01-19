import Image from 'next/image'
import { Inter, Cormorant_Garamond } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import Header from "../components/Header/Header";
import Partners from "../components/Partners/Partners";
import Features from "../components/Features/Features";
import WhyUs from "../components/Why Us/WhyUs";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Dashboard from "../components/Dashboard/Dashboard";
import Preloader from "../components/Preloader/Preloader";

const inter = Inter({ weight: ["100", "200", "300","400", "500", "600", "700", "800", "900"], subsets: ['latin']});
export const header = Cormorant_Garamond({ weight: [ "300","400", "500", "600", "700" ], subsets: ['latin']});

export default function Home() {
  return (
    <>
      <Head/>

      <main style={inter.style} className='overflow-hidden'>

          <Preloader/>
          <Header/>
          <Dashboard/>
          <Partners/>
          <Features/>
          <WhyUs/>
          <CTA/>
          <FAQ/>
          <Footer/>

      </main>
    </>
  )
}
