import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-black border border-t-2 border-t-black bg-cover bg-center footer " >
            <div className="relative z-10 mx-auto max-w-7xl px-4 ">
                <div className="-m-6 flex flex-wrap " >
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12  ">
                        <div className="flex h-full flex-col justify-between  ">
                            <div className="mb-1 inline-flex items-center ">
                                <Logo width="" size="42px" />
                            </div>
                            <div className=''>
                                <p className="text-sm text-black ">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
                        <div className="h-full ">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-black-200 ">
                                Features
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Kissan Services
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Groceries
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Plant Adopter
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Weekly Diet Plan
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-black">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Fund Raiser
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Crop Suggestion
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                       Donate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-black">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-xs font-semibold uppercase text-black  hover:text-green-500"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer