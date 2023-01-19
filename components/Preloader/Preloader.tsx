import React, {useRef} from 'react';
import {useIsomorphicLayoutEffect} from "usehooks-ts";
import {gsap} from "gsap";
import {header} from "../../pages";

function Preloader() {

    const t1 = gsap.timeline();

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"


    let svg = useRef(null);

    let mainRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.loader-wrap-heading h1', {
                duration: 1,
                y: 200,
                ease: "power4.out",
                delay: 1,
                skewY: 5,
                opacity: 0,
                display: 'none',
                stagger: {
                    amount: 0.4,
                }
            })
                .to('.loader-wrap-heading h1', {
                    delay: 1.5,
                    y: -200,
                    skewY: 0,
                    opacity: 0,

                });
            t1.to('#svg', {
                duration: 0.8,
                attr: { d: curve },
                ease: "power2.easeIn",
            })
                .to('#svg', {
                    duration: 0.8,
                    attr: { d: flat },
                    ease: "power2.easeOut",
                });
            t1.to('.loader-wrap', {
                y: -1500,
                display: 'none',

            })
            t1.to('.loader-wrap', {
                zIndex: -1,
                display: "none"
            })
        }, mainRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, )


    return (
        <div ref={mainRef} className='fixed top-0 left-0 h-[100vh] w-[100vw]  z-40'>
            <div className="loader-wrap  block">
                <svg viewBox='0 0 1000 1000' preserveAspectRatio='none' fill='#040303'>
                    <path id='svg' d='M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z'> </path>
                </svg>
                <div className="loader-wrap-heading">
                    <span><h1 style={header.style}>Droppie</h1></span>
                </div>
            </div>
        </div>
    );
}

export default Preloader;