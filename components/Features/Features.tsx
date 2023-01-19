import React, {useRef} from 'react';
import {header} from "../../pages";
import Image from "next/image";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Features() {

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
        <div ref={scrollRef} className='spacing' id='features'>

            <div className='w-full md:w-[60%] mx-auto mt-8 text-center'>
                <h1 style={header.style} className='line text-[10vw] md:text-[4.6vw] leading-[10.4vw] md:leading-[5.4vw] text-[#eeeeee]'>
                    Dashboard Features
                    Are Quite Compete
                </h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h4 className='text-xl text-[#9c9c9a] font-light mt-6 line'>
                    Designed to the last pixel and engineered with unforgiving precision.
                    We use the most advanced systems so security is guaranteed.
                </h4>
            </div>


            <div className='line flex flex-col md:flex-row justify-between my-12 md:grid-cols-2 gap-12 w-[100%] text-center'>
                <div className='border border-[#9c9c9a] bg-[#9c9c9a]/5 hover:bg-[#9c9c9a]/10 rounded-2xl px-8 py-14 w-[100%] md:w-[60%] space-y-4'>

                    <div className='h-60 md:h-80 w-full relative'>
                        <Image priority src="/images/Analytics.svg" alt='image' fill />
                    </div>

                    <h2 className='text-xl font-bold'>Track Your Income & Outcome</h2>
                    <p className='text-md text-[#9c9c9a] w-[100%] md:w-[60%] mx-auto'>
                        We keep track of your monthly and annual income & outcome of your finances.
                    </p>
                </div>

                <div className='border border-[#9c9c9a] bg-[#9c9c9a]/5 hover:bg-[#9c9c9a]/10 rounded-2xl px-8 py-14 w-[100%] md:w-[40%] space-y-4'>
                    <h2 className='text-xl font-bold'>Manage Cards </h2>
                    <p className='text-md text-[#9c9c9a] w-[100%] md:w-[60%] mx-auto'>
                        Easily connect your credit and debit cards to your account.
                    </p>

                    <div className='h-60 md:h-80 w-full relative'>
                        <Image priority src="/images/Card.svg" alt='image' fill />
                    </div>
                </div>
            </div>

            <div className='line flex flex-col md:flex-row justify-between my-12 md:grid-cols-2 text-center gap-12 w-[100%] '>
                <div className='border border-[#9c9c9a] bg-[#9c9c9a]/5 hover:bg-[#9c9c9a]/10 rounded-2xl px-8 py-14 w-[100%] md:w-[40%] space-y-4'>
                    <h2 className='text-xl font-bold'>Track your Financial Activities</h2>
                    <p className='text-md text-[#9c9c9a] w-[100%] md:w-[60%] mx-auto'>
                        Comes with built-in workflows that create focus and routine.
                    </p>

                    <div className='h-60 md:h-80 w-full relative'>
                        <Image priority src="/images/Activity.svg" alt='image' fill />
                    </div>
                </div>

                <div className='border border-[#9c9c9a] bg-[#9c9c9a]/5 hover:bg-[#9c9c9a]/10 rounded-2xl px-8 py-14 w-[100%] md:w-[60%] space-y-4'>

                    <div className='h-60 md:h-80 w-full relative'>
                        <Image priority src="/images/Transaction.svg" alt='image' fill />
                    </div>

                    <h2 className='text-xl font-bold'>Quick Transactions Easier</h2>
                    <p className='text-md text-[#9c9c9a] w-[100%] md:w-[60%] mx-auto'>
                        Perform various transaction (transactions, request, top up and more)
                         very easily.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Features;