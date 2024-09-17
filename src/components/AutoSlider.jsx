import React from 'react'
import Image from 'next/image'

export const AutoSlider = () => {
  return (

    <div className='slider h-72 mt-3 flex'>

        <div className='flex gap-5 cursor-pointer animate-swipe overflow-hidden'>
            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto text-gray-600'>{' 9.99 SAR'}</span>
            </div>

            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto  pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto  text-gray-600'>{' 9.99 SAR'}</span>
            </div>

            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto  pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto  text-gray-600'>{' 9.99 SAR'}</span>
            </div>
            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto text-gray-600'>{' 9.99 SAR'}</span>
            </div>

            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto  pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto  text-gray-600'>{' 9.99 SAR'}</span>
            </div>

            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto  pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto  text-gray-600'>{' 9.99 SAR'}</span>
            </div>
            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto text-gray-600'>{' 9.99 SAR'}</span>
            </div>

            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto  pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto  text-gray-600'>{' 9.99 SAR'}</span>
            </div>

            <div className='flex flex-col items-start flex-shrink-0'>
                <Image src={'/assets/images/10.jpg'} width={200} height={200} />
                <span className='dark:text-white mx-auto  pt-2 text-gray-900'>{'آيس كريم'}</span>
                <span className='dark:text-white mx-auto  text-gray-600'>{' 9.99 SAR'}</span>
            </div>
        </div>
    </div>
  )
}
