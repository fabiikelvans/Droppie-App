import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {header} from "../../pages";

function Footer() {
    return (
        <div className='bg-[#0b0b0f]'>
        <div className='spacing'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-[30%] mb-12 md:mb-0 text-center'>
                    <div className='h-20 w-20 relative cursor-pointer mx-auto'>
                        <Image priority src="/logo/logo.svg" alt='logo' fill/>
                    </div>
                    <h4 className='text-[1.6rem] text-[#dededd] font-bold' style={header.style}>Droppie</h4>
                    <p className='mt-2 text-sm text-[#cdcdcc]'>Your Financial Management System</p>
                </div>


                <div className='w-full mx-auto md:w-[70%] grid gap-y-12 gap-x-6 grid-cols-2 md:grid-cols-4'>
                    <div className=''>
                        <h4 className='mb-4 text-[#eeeeee]'>Product</h4>
                        <ul className='font-light text-[#8b8c89] space-y-3'>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Features</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Integrations</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Pricing</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Changelog</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Documentation</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Download</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='mb-4 text-[#eeeeee]'>Company</h4>
                        <ul className='font-light text-[#8b8c89] space-y-3'>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>About Us</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Blog</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Careers</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Customers</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Brands</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='mb-4 text-[#eeeeee]'>Resources</h4>
                        <ul className='font-light text-[#8b8c89] space-y-3'>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Community</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Contact</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Terms of service</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Report a vulnerability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='mb-4 text-[#eeeeee]'>Developers</h4>
                        <ul className='font-light text-[#8b8c89] space-y-3'>
                            <li><Link className='transition duration-300 hover:text-white'href={''}>API</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Status</Link></li>
                            <li><Link className='transition duration-300 hover:text-white' href={''}>Github</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;