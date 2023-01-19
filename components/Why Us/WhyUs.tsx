import React, {useRef} from 'react';
import {header} from "../../pages";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function WhyUs() {

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
        <div ref={scrollRef} className='spacing text-center' id='benefits'>

            <div className='w-full md:w-[60%] mx-auto mt-8 line'>
                <h4 style={header.style} className='text-[10vw] font-bold md:text-[6vw] leading-[10.4vw] md:leading-[6.4vw] text-[#eeeeee]'>
                    Why Choose Droppie
                </h4>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className='text-xl text-[#acadab] font-light mt-6'>
                    Achieve End-to-End Finance Management Goals
                </h1>
            </div>

            <div className='line grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-12'>
                <div className='space-y-4'>
                    <h3 className='text-lg font-bold'>Centralised Repository</h3>
                    <p className='text-[#9c9c9a] text-sm'>
                        Enhance how you work with images in bulk and raise the bar for your team’s potential with the most simplified image library
                    </p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-bold'>Seamless Tech Stack Integration</h3>
                    <p className='text-[#9c9c9a] text-sm '>
                        Integrate APIs seamlessly with your existing tech stack for productive execution of image transformations, optimisations, and deliveries.                    </p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-bold'>Leverage AI to Save Time</h3>
                    <p className='text-[#9c9c9a] text-sm'>
                        AI-built features help conform to the user requests for accurate transformations and produce quality results in seconds.                    </p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-bold'>Smart Automation</h3>
                    <p className='text-[#9c9c9a] text-sm'>
                        Machine learning and AI trained datasets to perform automated transformations on diverse image formats like PNG, JPG, JPEG, WEBP                    </p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-bold'>On-the-Fly Transformations</h3>
                    <p className='text-[#9c9c9a] text-sm '>
                        Enhance how you work with images in bulk and raise the bar for your team’s potential with the most simplified image library
                    </p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-bold'>Global Content Delivery Network</h3>
                    <p className='text-[#9c9c9a] text-sm'>
                        Use our powerful CDN to reduce image load time and deliver optimised images at a lightening fast speed across the globe.
                    </p>
                </div>
            </div>

            <button
                className='line border mx-auto mt-12 border-orange-500 text-orange-500 rounded-lg px-8 py-4 text-md text-[#bdbdbb] transition duration-300 bg-orange-500/10 hover:bg-orange-500/20'
            > Get Started
            </button>

        </div>
    );
}

export default WhyUs;