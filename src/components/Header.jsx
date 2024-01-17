import React from 'react'
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const navigation = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
]
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 ">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <div className="-m-1.5 p-1.5">
                            <span className="sr-only"></span>
                            <h1 className='text-2xl font-bold text-gray-200'>Port<span className='text-blue-500'>folio</span></h1>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="nav-items hidden lg:flex lg:gap-x-12">
                        <ul className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <li className='cursor-pointer' key={item.name}>
                                    <Link to={item.path}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={40}
                                        className="hover:text-blue-500 text-sm font-semibold leading-6 text-gray-200">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={40}
                            to='contact'
                            
                            className="group relative h-8 w-30 overflow-hidden rounded-lg bg-gray-200 text-lg shadow cursor-pointer">
                            <div className='absolute inset-0 w-3 bg-blue-500 transition-all duration-[450ms] ease-out group-hover:w-full'></div>
                            <span className='relative text-black group-hover:text-gray-200 font-bold text-sm ml-2 mr-2'>Contact me</span>
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50"  />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300/10">
                        <div className="flex items-center justify-between">
                            <div className="-m-1.5 p-1.5">
                                <span className="sr-only"></span>
                                <h1 className='text-4xl font-bold text-gray-200'>Port<span className='text-blue-500'>folio</span></h1>
                            </div>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <ul className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <li
                                                key={item.name}>

                                                <Link to={item.path}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={60}
                                                    duration={500}
                                                    onClick={() => {
                                                        setMobileMenuOpen(false)
                                                    }}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-900">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}</ul>
                                </div>
                                <div className="py-6">
                                    <Link
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={60}
                                        onClick={() => {
                                            setMobileMenuOpen(false)
                                        }}
                                        to='contact'
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-900"
                                    >
                                        Contact me
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default Header
