import React from 'react'
import Image from "next/image"
const title = "Belhalib"
const Description ="Sweets & Candies"

export const Hero = () => {
  return (
    <section className="bg-center bg-[url(/assets/images/1.jpg)]  bg-no-repeat  text-gray-900 dark:text-white  dark:bg-gray-900 bg-blend-multiply`">
        <div >
            <div className="px-4 m-auto max-w-screen-sm text-center  py-24 lg:py-24" >
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl" >{title}</h1>
                <p className="mb-8 text-lg font-normal text-gray-900 dark:text-white lg:text-xl sm:px-16 lg:px-48 text-">{Description}</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Menu
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#" className="inline-flex justify-center  border-gray-500 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center dark:text-white text-gray-600 rounded-lg border  hover:bg-gray-400 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
            </div>
        </div>
    </section>


  )
}
