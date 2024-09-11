import { cityNames, Citys } from "@/common";
import { Navbar, SearchBar } from "@/componets";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className=" mx-auto">
        <div
          className="bg-image bg-cover bg-center h-500 w-full"
          style={{ backgroundImage: "url('/assets/header_bg1.jpg')" }}
        >
          <div className="p-10 text-center">
            <h2 className="text-[28px] font-semibold">
              Explore Buy / Sell / Rent Property in{" "}
              <span className="text-blue-600">India</span>
            </h2>
            <div className="bg-gray-500  w-[880px] my-4 p-5 mx-auto">
              <div className="flex flex-row items-center gap-5">
                <button className="bg-white px-6 w-[150px] py-2 rounded-sm">
                  BUY
                </button>
                <button className="bg-white px-6 w-[150px] py-2 rounded-sm">
                  RENT/PG
                </button>
                <button className="bg-white px-6 w-[150px] py-2 rounded-sm">
                  PROJECT
                </button>
                <button className="bg-white px-6 w-[150px] py-2 rounded-sm">
                  COMMERCIAL
                </button>
                <button className="bg-white px-6 w-[150px] py-2 rounded-sm">
                  DEALER
                </button>
              </div>
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-[28px] text-center my-6 font-semibold bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-black">
            Find Your Property in Your Preferred City
          </div>
          <div className="grid grid-cols-6 gap-5">
            {Citys?.map((city, index) => (
              <div
                key={index}
                className="bg-white p-5 shadow-md border hover:shadow-2xl rounded-lg"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={city?.icon}
                    alt={city?.name}
                    className="w-12 h-12"
                  />
                  <h3 className="text-lg font-medium">{city?.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 my-10 items-center justify-center">
            {cityNames?.map((x) => (
              <div className="inline-flex items-center rounded-full px-5 bg-gray-100 text-gray-700 py-2 border">
                <span className="text-sm">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
