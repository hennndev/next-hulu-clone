import React from 'react'

const HeaderItem = ({title, Icon}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-1 sm:w-20 hover:text-white">
            <Icon className="h-6 mb-1"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
