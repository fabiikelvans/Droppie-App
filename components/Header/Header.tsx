import React from 'react';
import Nav from "./Nav/Nav";
import {header} from "../../pages";
import Background from "../Background/Background";

function Header() {
    return (
        <div>
            <Nav/>

            <div className='relative'>
                <Background/>
            </div>

            <div className='spacing text-center mx-auto'>

                <div>
                    <button
                    className='border border-[#9c9c9a] rounded-full px-4 py-2 text-xs md:text-sm text-[#bdbdbb] transition duration-300 bg-[#9c9c9a]/10 hover:bg-[#9c9c9a]/20'
                    >Droppie 2023 Release – Built for scale
                    </button>
                </div>

               <div className='w-full md:w-[60%] mx-auto mt-8'>
                   <h1 style={header.style} className='text-[10vw] md:text-[6vw] leading-[10.4vw] md:leading-[6.4vw] text-[#eeeeee]'>
                       Manage your finances easily with Droppie
                   </h1>
                   {/* eslint-disable-next-line react/no-unescaped-entities */}
                   <h4 className='text-xl text-[#bdbdbb] font-light mt-6'>
                     The only wallet you need to carry that allows you to easily make online payment.
                   </h4>
               </div>

                    <button
                        className='border mt-12 border-orange-500 text-orange-500 rounded-lg px-8 py-4 text-md text-[#e7e7e8] transition duration-300 bg-orange-500/10 hover:bg-orange-500/20'
                    > Sign up for early access
                    </button>
            </div>
        </div>
    );
}

export default Header;