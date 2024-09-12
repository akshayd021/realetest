import React from 'react'

const SaleRent = () => {
    return (
        <div className="bg-gray-200 pb-10">
            <h2 className="text-[28px] text-center pt-10 pb-5 font-semibold bg-clip-text text-transparent
           bg-gradient-to-tr from-red-500 to-white ">Latest Properties for Sale / Rent

            </h2>
            <div className="container">
                <h4 className="text-gray-500 ">Property for Sale</h4>

                <div className="grid md:grid-cols-5 grid-cols-1 gap-2 my-2 ">
                    {[1, 2, 3, 4, 5]?.map(() => (
                        <div className=" border border-blue-400 shadow-md rounded relative shadow-gray-500 mx-auto  flex flex-col justify-center items- " >
                            <img src="/assets/sale-1.jpeg" className="" />
                            <div className='absolute top-28 bg-gray-500 px-2 py-1'>
                                <p className='text-white text-sm'> Rs 35 Lac</p>
                            </div>
                            <div className="px-2 pb-2">
                                <p className="text-gray-800  text-[16px] font-semibold">Flats & Apartments</p>
                                <p className="text-gray-600  text-sm my-2">2 BHK / 710 Sq.ft.</p>
                                <p className="text-[12px] text-gray-700"> Talegaon Dabhade, Pune </p>
                                <button className=" px-3 py-1 mt-2 hover:bg-blue-500 hover:text-white text-[14px] bg-white text-blue-500 rounded-md border border-blue-500  ">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <h4 className="text-gray-500 mt-10">Property for Rent</h4>

            



                <div className="grid md:grid-cols-5 grid-cols-1 gap-2 my-2 ">
                    {[1, 2, 3, 4, 5]?.map(() => (
                        <div className=" border border-blue-400 shadow-md rounded relative shadow-gray-500 mx-auto  flex flex-col justify-center items- " >
                            <img src="/assets/rent.jpg" className="h-[150px] w-full object-cover" />
                            <div className='absolute top-28 bg-gray-500 px-2 py-1'>
                                <p className='text-white text-sm'> Rs 45000</p>
                            </div>
                            <div className="px-2 pb-2">
                                <p className="text-gray-800  text-[16px] font-semibold">Flats & Apartments</p>
                                <p className="text-gray-600  text-sm my-2">3 BHK / 1500 Sq.ft.</p>
                                <p className="text-[12px] text-gray-700">Kharadi, Pune</p>
                                <button className=" px-3 py-1 mt-2 hover:bg-blue-500 hover:text-white text-[14px] bg-white text-blue-500 rounded-md border border-blue-500  ">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SaleRent