import { Check } from '@/common'
import React, { useState } from 'react'

const Dropdown = () => {
    const [price, setPrice] = useState(50000)
    const [budget, setBudget] = useState(false)
    const [Bedroom, setBedRoom] = useState(false)
    const [post, setPost] = useState(false)

    const BedroomItem = [
        '1 BHK',
        '2 BHK',
        '3 BHK',
        '4 BHK',
        '5 BHK',
        '+5 BHK',
    ]
    const Posted = [
        "Agents",
        "Builder",
        "Owner"
    ]

    const handleSliderChange = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div>
            <div className='bg-white p-4 border-t-2 border-t-red-500 w-full shadow-lg relative'>

                <div className="grid grid-cols-12">
                    {Check?.map((x) => (
                        <div className="col-span-4 items-center flex justify-start">
                            <input type='checkbox' className="mr-2" />
                            <p className="text-gray-500  cursor-pointer inline-flex">{x}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-3 flex text-sm  justify-start">Looking for commercial properties ? <span className='text-blue-500 ml-1'>Click here </span> </p>

                <div className='flex flex-row justify-start items-center gap-6 mt-3'>
                    <button onClick={() => {
                        setBudget(!budget)
                        setBedRoom(false)
                        setPost(false)
                    }} className="border border-blue-500 px-4 rounded-full py-[2px]" >Budgets</button>
                    <button onClick={() => {
                        setBedRoom(!Bedroom)
                        setBudget(false)
                        setPost(false)
                    }} className="border border-blue-500 px-4 rounded-full py-[2px]" >Bedroom</button>
                    <button onClick={() => {
                        setBedRoom(false)
                        setBudget(false)
                        setPost(!post)
                    }} className="border border-blue-500 px-4 rounded-full py-[2px]" >Posted By</button>

                </div>
                {budget &&
                    <>
                        <div className="text-sm font-medium text-gray-900   mt-5">₹{price}</div>
                        <input id="default-range" type="range" min="5000" max="100000" value={price} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " onChange={handleSliderChange} />
                        <div className="flex justify-between mt-2">
                            <p className="text-sm font-medium text-gray-900 ">₹5,000</p>
                            <p className="text-sm font-medium text-gray-900 ">₹100,000</p>
                        </div>
                    </>
                }
                {Bedroom && (
                    <>
                        <p className='text-sm text-gray-500 text-left my-3 font-semibold'>Number of Bedrooms</p>
                        <div className="flex flex-wrap gap-3">
                            {BedroomItem?.map((x) => (
                                <div className="inline-flex cursor-pointer items-center rounded-md px-2 bg-gray-100 text-gray-700 py-1 border">
                                    <span className="text-sm">+ {x}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {post &&
                    <>
                        <p className='text-sm text-gray-500 text-left my-3 font-semibold'>Post By</p>
                        <div className="flex flex-wrap gap-3">
                            {Posted?.map((x) => (
                                <div className="inline-flex cursor-pointer items-center rounded-md px-2 bg-gray-100 text-gray-700 py-1 border">
                                    <span className="text-sm">+ {x}</span>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Dropdown