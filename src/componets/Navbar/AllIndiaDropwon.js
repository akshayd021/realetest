import { cityNames } from '@/common'
import React from 'react'

const AllIndiaDropdown = () => {
    return (
        <div className='bg-white p-4 border-t-2 border-t-red-500 w-full shadow-md relative'>
            <p className='text-gray-700 font-semibold mb-2'>Search from Over 2500 Cities - All India</p>
            <input
                type="text"
                className="w-full text-sm text-gray-700 py-2 mb-2 px-4 placeholder:text-gray-400 outline-none border border-gray-200 rounded-md"
                placeholder="Search City"
            />
            <p className="text-gray-800 font-semibold uppercase">Populor Cities</p>
            <div className="grid grid-cols-12 items-center">
                {cityNames?.slice(0, 12).map((x) => (
                    <div className="col-span-4">
                        <p className="text-blue-500 text-sm cursor-pointer inline-flex">{x}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllIndiaDropdown