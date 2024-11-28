import React, { FC, useState } from 'react'
import myLogo from '../../public/Images/LakhanLogo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Header : FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className=" bg-slate-900 p-3">
            <div className=" px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center">
                    {/* Logo */}
                    <div className="flex flex-1 items-center  justify-between ">
                        <Link href={"#"} className="flex shrink-0 items-center">
                            <Image src={myLogo} alt="My Logo" width={80} height={80} />
                            <div className="relative ml-20 max-[720px]:hidden">
                                <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 uppercase font-verdana text-[2em] font-extrabold text-[#f5f5f5] custom-text-shadow">
                                    Lakhan
                                </div>
                            </div>
                        </Link>
                        {/* Desktop Menu */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-6">
                                <Link href="/" className="border-2 border-customCyan px-3 py-2 text-lg font-medium text-white overflow-hidden flex justify-center items-center ease-out duration-700 rounded-3xl z-10 hover:border-transparent hover:shadow-customNavTabGlow">
                                    Home
                                </Link>
                                <Link href="#" className="border-2 border-customCyan px-3 py-2 text-lg font-medium text-white overflow-hidden flex justify-center items-center ease-out duration-700 rounded-3xl z-10 hover:border-transparent hover:shadow-customNavTabGlow">
                                    About
                                </Link>
                                <Link href="#" className="border-2 border-customCyan px-3 py-2 text-lg font-medium text-white overflow-hidden flex justify-center items-center ease-out duration-700 rounded-3xl z-10 hover:border-transparent hover:shadow-customNavTabGlow">
                                    Skills
                                </Link>
                                <Link href="#" className="border-2 border-customCyan px-3 py-2 text-lg font-medium text-white overflow-hidden flex justify-center items-center ease-out duration-700 rounded-3xl z-10 hover:border-transparent hover:shadow-customNavTabGlow">
                                    Services
                                </Link>
                                <Link href="/#" className="border-2 border-customCyan px-3 py-2 text-lg font-medium text-white overflow-hidden flex justify-center items-center ease-out duration-700 rounded-3xl z-10 hover:border-transparent hover:shadow-customNavTabGlow">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
                            Home
                        </Link>
                        <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
                            About
                        </Link>
                        <Link href="/services" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
                            Services
                        </Link>
                        <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
