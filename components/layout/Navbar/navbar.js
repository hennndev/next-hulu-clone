import React from 'react'
import request from '../../../utils/request'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
   
    return (
        <nav className="relative">
            <div className="flex px-5 sm:px-20 text-md whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(request).map(([key, {title, url}]) => (
                    <h2 key={key} 
                        onClick={() => router.push(`/?genre=${key}`)}
                        className=" cursor-pointer duration-700 transform hover:scale-125 hover:text-red-200 active:text-red-200 active:scale-125">{title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"/>
        </nav>
    )
}

export default Navbar
