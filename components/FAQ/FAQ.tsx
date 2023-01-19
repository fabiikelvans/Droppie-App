import React, {useRef} from 'react';
import { Disclosure } from '@headlessui/react'
import {ChevronUpIcon} from "@heroicons/react/outline";
import Link from "next/link";
import {header} from "../../pages";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Faq() {

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
        <div ref={scrollRef} className='spacing'>

            <div className='flex flex-col md:flex-row gap-x-12 gap-y-12'>
                <div className='w-full md:w-[30%] space-y-4 line'>
                    <h1 className='text-[2.6rem] leading-[2.8rem] font-bold' style={header.style}>Frequently Asked Questions</h1>
                    <p className='text-[#acadab] text-lg'>Have a question that is not answered? You can contact us at </p>
                    <Link className='text-[#dededd] text-lg underline' href={''}>support@droppie.com</Link>
                </div>

                <div className="w-full md:w-[70%] px-4 line">
                    <div className="mx-auto w-full rounded-2xl bg-[#2d2d33] p-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-md bg-[#2d2d33] px-4 py-4 text-left text-sm font-medium text-[#dededd] hover:bg-[#44444a] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span style={header.style} className='text-[1.4rem] font-semibold'>What do I need to apply for an account?</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-[#dededd]`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#bdbdbb]">
                                        You will need a legal U.S. entity with the following information to get started:
                                        <br/><br/>

                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        For you: 1) SSN or passport number, 2) Proof of identity (an image of your driver's license, passport, or state ID)
                                        <br/><br/>
                                        For the entity: 1) Federal EIN with a confirmation letter, 2) Formation document, 3) DBA document (if applicable), 4) List of all the beneficial owners and their personal information
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-md bg-[#2d2d33] px-4 py-4 text-left text-sm font-medium text-[#dededd] hover:bg-[#44444a] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span style={header.style} className='text-[1.4rem] font-semibold'>How fast is onboarding?</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-[#dededd]`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#bdbdbb]">
                                        It takes less than 20 minutes to go through our onboarding forms. If your information matches our
                                        records, you will be pushed through immediately by our automated system.
                                        If not, we’ll ask for further documentation and get back to you in less than 24 hours.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-md bg-[#2d2d33] px-4 py-4 text-left text-sm font-medium text-[#dededd] hover:bg-[#44444a] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span style={header.style} className='text-[1.4rem] font-semibold'>Who do you use for crypto custody?</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-[#dededd]`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#bdbdbb]">
                                        We work with Zero Hash to provide custodial services on our platform. Customer assets are held 1:1. As a Bitlicensee, Zero Hash must custody funds in accordance with 23 CRR-NY 200.9 and comply with GAAP accounting rules, both of which demand that crypto assets are held 1:1. Zero Hash must prove its compliance with these requirements by submitting to regular examinations and providing annual audited financial statements to all of its regulators.
                                        <br/><br/>
                                        In addition, Starlight is also built from the ground up to be fully compatible with non-custodial wallets such as Gnosis Safe and Metamask. If you choose not to use our wallets for custody, you can still use our payment rails and on/off-ramps to work with your non-custodial wallets.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-md bg-[#2d2d33] px-4 py-4 text-left text-sm font-medium text-[#dededd] hover:bg-[#44444a] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span style={header.style} className='text-[1.4rem] font-semibold'>Are my funds FDIC insured?</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-[#dededd]`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#bdbdbb]">
                                        Yes, your funds in dollars are FDIC insured. Starlight works with FDIC-insured banks to store your fiat deposits. For crypto, we cannot provide FDIC insurance as digital currency is not considered legal tender. That said, we take extreme
                                        precautions to make sure that your funds are safe in both your custodial and non-custodial wallets.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;