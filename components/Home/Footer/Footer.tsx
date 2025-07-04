import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 '>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid mg:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* first part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    About Us
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Careers
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Blogs
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Gifts Card
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Magazine
                </p>
            </div>

            {/* second part */}

            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Contact
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Legal Notice
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Privacy Policy
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Terms & Conditions
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Sitemap
                </p>
            </div>

            {/* 3rd part */}

            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Car Hire
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Activity Finder
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Tour List
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Flight Finder
                </p>

                <p className='text-gray-800 font-meduim cursor-pointer text-sm hover:text-blue-950'>
                    Travel Agents
                </p>
            </div>

            {/* 4th part */}

            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>+012 345 6788</h1>

                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</h1>

                </div>
            </div>




        </div>
        {/* bottom section */}
        <div className='mt-3 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>
                Copyright 2025 Webdev. All rights reserved

            </p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social :</span>

                <Link href="#" className='text-gray-500 hover:text-gray-800'>
                <FaFacebook />
                </Link>
                <Link href="#" className='text-gray-500 hover:text-gray-800'>
                <FaTwitter />
                </Link>

                <Link href="#" className='text-gray-500 hover:text-gray-800'>
                <FaDribbble />
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
