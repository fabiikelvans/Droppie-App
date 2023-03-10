import React, {useEffect, useRef, useState} from 'react';
import { gsap } from "gsap";
import Link from "next/link";
import {
    menuShow,
    menuHide,
    textIntro,
    staggerLinks,
    hoverLink,
    hoverExit
} from "../../animations/Animate";
import {useRouter} from "next/router";

// @ts-ignore
function Menu({state}) {

    const router = useRouter();

    //create refs for our DOM elements
    let menuWrapper = useRef(null)
    let show1 = useRef(null)
    let show2 = useRef(null)


    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.
            {/*@ts-ignore*/}
            menuHide(show2, show1);
            // Set menu to display none
            gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([show1, show2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            {/*@ts-ignore*/}
            menuShow(show1, show2);
        }
    }, [state]);

    return (
        <div>
            {/*@ts-ignore*/}
            <div ref={(el) => (menuWrapper = el)} className='menu-wrapper hidden z-10 top-0 left-0 right-0 fixed h-[100vh] w-[100vw]'>
                {/*@ts-ignore*/}
                <div ref={(el) => (show1 = el)}
                     className="menu-secondary-background-color"
                ></div>

                {/*@ts-ignore*/}
                <div className="menu relative h-full overflow-hidden bg-[#16161D]" ref={(el) => (show2 = el)}>
                    <ul className="menu__items text-center mt-[30vh]">
                        <li
                            className="menu__item">
                            <Link href={'/'} onClick={() => {router.push('/')}}>
                                Dashboard
                            </Link>
                        </li>
                        <li
                            className="menu__item" >
                            <Link href={'/'}>
                                Features
                            </Link>
                        </li>
                        <li
                            className="menu__item" >
                            <Link href={'/'}>
                                Why Us
                            </Link>
                        </li>
                        <li
                            className="menu__item" >
                            <Link href={'/'}
                            >Sign In</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Menu;