import Image from 'next/image'
import {
    SearchIcon,
    ShoppingBagIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
    XCircleIcon, MenuAlt1Icon
} from "@heroicons/react/outline"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Nunito } from '@next/font/google';
import Menu from "./Menu";
import {HiMenu, HiOutlineMenuAlt3} from "react-icons/hi";
import {CgClose} from "react-icons/cg";
import Link from "next/link";
import {header} from "../../../pages";

function Header() {
    const router = useRouter();


    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

    // State of our button
    const [disabled, setDisabled] = useState(false);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                // @ts-ignore
                initial: null,
                // @ts-ignore
                clicked: true,
                menuName: <CgClose/>
            });
        } else if (state.clicked === true) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <HiOutlineMenuAlt3 />
            });
        } else if (state.clicked === false) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <CgClose/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };


    return (
        <div className='z-50 text-white'>
            <div className='flex  pt-4 items-center justify-between max-w-6xl mx-5 lg:mx-auto'>

                {/* Logo */}
                <Link href={'/'} className='flex items-center'
                >
                <div className='h-12 w-12 relative cursor-pointer'>
                    <Image priority src="/logo/logo.svg" alt='logo' fill/>
                </div>
                    <span style={header.style} className='text-xl ml-3'> Droppie </span>
                </Link>

                {/* Icons */}
                <div className='flex items-center justify-end space-x-4'>

                    <div className='hidden md:block'>
                        <ul className="flex text-[1.1rem] font-medium text-[#7a7b78] space-x-8 ">
                            <li
                                className="transition duration-200 hover:text-[#cdcdcc]">
                                <Link href={'#dashboard'}>
                                    Dashboard
                                </Link>
                            </li>

                            <li
                                className="transition duration-200 hover:text-[#cdcdcc]" >
                                <Link href={'#features'}>
                                    Features
                                </Link>
                            </li>

                            <li
                                className="transition duration-200 hover:text-[#cdcdcc]" >
                                <Link href={'#benefits'}>
                                    Why Us
                                </Link>
                            </li>

                            <li
                                className="transition duration-200 hover:text-[#cdcdcc]" >
                                <Link href={''}>
                                    Sign In
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <button className='text-orange-400 transition duration-300 hover:text-orange-500 mx-4'>
                        Request Demo
                    </button>


                    {/*Menu Component*/}
                    <div className="nav__menu">
                        <Menu state={state}/>
                    </div>

                    <button className="nav__toggle md:hidden block z-30 bg-transparent border-none p-0 m-0 outline-none ease-in-out duration-300 cursor-pointer" disabled={disabled} onClick={handleMenu}>
                        <div className='nav__toggle-icon navBtn flex justify-center items-center cursor-pointer text-[1.2rem] h-12 w-12 transition-all rounded-full duration-300 hover:bg-white hover:text-black'>
                            {state.menuName}
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Header