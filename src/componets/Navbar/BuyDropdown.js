import React from 'react'
import { cityNames } from '@/common'
const BuyDropdown = ({ setBuy }) => {
    return (
        <div>
            <div onMouseLeave={() => { setBuy(false) }} className='bg-white p-4 border-t-2 border-t-blue-500 w-full shadow-md relative'>

                <p className="text-gray-800 font-semibold uppercase mb-2">Top Cities To Buy Prooerty</p>
                <div className="grid grid-cols-3 gap-1">
                    {cityNames?.slice(0, 12).map((x) => (
                        <div>
                            <p className="text-gray-500 hover:text-blue-500 hover:border-b hover:border-b-blue-500 text-sm cursor-pointer inline-flex">Property For Sale {x}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BuyDropdown