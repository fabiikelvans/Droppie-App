import React, {useRef} from 'react';
import {header} from "../../pages";
import Image from "next/image";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Partners() {

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
        <div ref={scrollRef} className='spacing text-center mx-auto relative'>

            <div className='w-full md:w-[60%] mx-auto'>
                <h1 className='text-xl text-[#9c9c9a] line'>
                    Powering the world’s best product teams.
                </h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h4 className='text-[1.4rem] text-[#eeeeee] font-medium mt-2 line'>
                    From next-gen startups to established enterprises.
                </h4>
            </div>

            <div className="flex md:block justify-center">
            <div className='grid grid-cols-2 gap-x-12 md:grid-cols-4 lg:grid-cols-6 '>
                <div className='h-24 md:h-32 w-24 md:w-32 relative line'>
                    <Image priority src="/images/partners/1.svg" alt='logo' fill
                           className='filter brightness-0 invert opacity-60 transition duration-300 hover:opacity-90'
                    />
                </div>

                <div className='h-24 md:h-32 w-24 md:w-32 relative line'>
                    <Image priority src="/images/partners/2.svg" alt='logo' fill
                           className='filter brightness-0 invert opacity-60 transition duration-300 hover:opacity-90'
                    />
                </div>

                <div className='h-24 md:h-32 w-24 md:w-32 relative line'>
                    <Image priority src="/images/partners/3.svg" alt='logo' fill
                           className='filter brightness-0 invert opacity-60 transition duration-300 hover:opacity-90'
                    />
                </div>

                <div className='h-24 md:h-32 w-24 md:w-32 relative line'>
                    <Image priority src="/images/partners/4.svg" alt='logo' fill
                           className='filter brightness-0 invert opacity-60 transition duration-300 hover:opacity-90'
                    />
                </div>

                <div className='h-24 md:h-32 w-24 md:w-32 relative line'>
                    <Image priority src="/images/partners/5.svg" alt='logo' fill
                           className='filter brightness-0 invert opacity-60 transition duration-300 hover:opacity-90'
                    />
                </div>

                <div className='h-24 md:h-32 w-24 md:w-32 relative line'>
                    <Image priority src="/images/partners/6.svg" alt='logo' fill
                           className='filter brightness-0 invert opacity-60 transition duration-300 hover:opacity-90'
                    />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Partners;