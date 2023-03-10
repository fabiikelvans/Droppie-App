import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    elem?: HTMLDivElement | null;
    elem1?: HTMLDivElement | null;
    elem2?: HTMLDivElement | null;
    elem3?: HTMLDivElement | null;
    elem4?: HTMLDivElement | null;
}

//Text Intro
export const textIntro = (elem: Props) => {
    gsap.from(elem, {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        scale: -1,
        ease: "back",
    });
};

//Open menu
export const menuShow = (elem1 : Props, elem2 : Props ) => {
    gsap.from([elem1, elem2], {
        duration: 0.7,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power4.inOut",
        stagger: {
            amount: 0.2,
        },
    })
}

//Close menu
export const menuHide = (elem1 : Props, elem2 : Props ) => {
    gsap.to([elem1, elem2], {
        duration: 0.8,
        height: 0,
        ease: "power4.inOut",
        stagger: {
            amount: 0.07,
        },
    })
}

//Stagger links
export const staggerLinks = (elem1 : Props, elem2 : Props, elem3 : Props, elem4 : Props) => {
    gsap.from([elem1, elem2, elem3, elem4], {
        opacity: 0,
        duration: 1,
        delay: .2,
        y: 20,
        stagger: {
            amount: .6
        }
    })
}

// Hover on the link
export const hoverLink = (e : Props) => {
    // @ts-ignore
    gsap.to(e.target, {
        duration: 0.4,
        y: 3,
        skewX: 4,
        ease: "power2.inOut"
    });
};

// Hover away from the link
export const hoverExit = (e : Props) => {
    // @ts-ignore
    gsap.to(e.target, {
        duration: 0.4,
        y: -3,
        skewX: 0,
        ease: "power2.inOut"
    });
};
