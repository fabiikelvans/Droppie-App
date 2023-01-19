import React, {useRef} from 'react';
import Image from "next/image";
import {header} from "../../pages";
import Background from "../Background/Background";
import MainBlob from "./Blob/MainBlob";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Cta() {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 350px",
                    scrub: 1,
                },
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );

    return (
        <div ref={scrollRef}>

            <div className='relative'>
                <MainBlob/>
            </div>

            <div className='spacing text-center mx-auto'>
                <div className="flex justify-center line">
                    <div className='h-24 w-24 relative'>
                        <Image priority src="/logo/logo.svg" alt='logo' fill/>
                    </div>
                </div>

                <h1 style={header.style} className='line text-[10vw] mt-6 font-bold md:text-[6vw] leading-[10.4vw] md:leading-[6.4vw]'>
                    Built for the future. <br/>
                    Available today.
                </h1>

                <div className="line flex flex-col md:flex-row justify-between w-[100%] md:w-[40%] my-1 mx-auto">
                    <button
                        className='border mx-auto mt-12 border-orange-500 text-orange-500 rounded-lg px-8 py-4 text-md text-[#bdbdbb] transition duration-300 bg-orange-500/10 hover:bg-orange-500/20'
                    > Request Demo
                    </button>

                    <button
                        className='border mx-auto mt-12 border-orange-500 hover:border-white font-bold  rounded-lg px-8 py-4 text-md text-white hover:text-[#16161D] transition duration-300 bg-orange-500 hover:bg-white'
                    > Download
                    </button>
                </div>


            </div>

        </div>
    );
}

export default Cta;