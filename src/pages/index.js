import { Blogs, cityNames, Citys, Localities, Projects, Service, Tools } from "@/common";
import { Navbar, SaleRent, SearchBar } from "@/componets";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FaAngleRight, FaLeftLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <div className="">
      <Navbar />

      <div className=" mx-auto mt-14">
        <div
          className="bg-image bg-cover bg-center h-500 w-full"
          style={{ backgroundImage: "url('/assets/header_bg1.jpg')" }}
        >
          <div className="p-10 text-center">
            <h2 className="text-[28px] font-semibold">
              Explore Buy / Sell / Rent Property in{" "}
              <span className="text-blue-600">India</span>
            </h2>
            <div className="hidden md:block bg-gray-500  w-[880px] my-4 p-5 mx-auto">
              <div className="flex flex-row items-center gap-5">
                <button className="bg-white px-6 w-[150px] py-2 rounded-sm relative">
                  BUY
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2">
                    <svg width="12" height="10" fill="none">
                      <path fill="#fff" d="M0 0h10L5 6 0 0z"></path>
                    </svg>
                  </span>
                </button>
                <button className="bg-gray-200 px-6 w-[150px] py-2 rounded-sm">
                  RENT/PG
                </button>
                <button className="bg-gray-200 px-6 w-[150px] py-2 rounded-sm">
                  PROJECT
                </button>
                <button className="bg-gray-200 px-6 w-[150px] py-2 rounded-sm">
                  COMMERCIAL
                </button>
                <button className="bg-gray-200 px-6 w-[150px] py-2 rounded-sm">
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
          <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
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
              <div className="inline-flex cursor-pointer items-center rounded-full px-5 bg-gray-100 text-gray-700 py-2 border">
                <span className="text-sm">{x}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#365f89]">
          <h2 className="text-[28px] text-center py-5 font-semibold bg-clip-text text-transparent
           bg-gradient-to-tr from-red-500 to-white ">Top Localities for buying or renting properties </h2>
          <div className="container mx-auto">
            <div className="md:flex flex-row justify-between gap-5 pb-10">
              {/* <Carousel
                responsive={responsive}
              > */}

              {Localities?.map((locality, index) => (
                <div className="md:w-1/3 bg-white px-4 py-1 my-5 md:my-0 rounded-md" key={index}>
                  <div className="flex flex-row justify-between mb-2 ">
                    <div className="flex justify-between flex-col w-[80%]">
                      <p className="text-[16px] font-medium">{locality?.title}</p>
                      <p className="text-sm text-blue-600">{locality?.project} Projects</p>
                    </div>
                    <div className="flex flex-col w-[20%] pl-2">
                      <span className="flex gap-1 items-center text-sm">
                        4.6 <FaStar className="text-yellow-400" />
                      </span>
                      <p className="text-[10px] text-gray-500">48 Reviews</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center border-t">
                    <div className="border-r px-2">
                      <p className="text-sm text-gray-700">Buy</p>
                      <p className="text-[12px] text-gray-600">{locality?.buy?.price} / sq.ft</p>
                      <p className="text-[12px] text-blue-600">{locality?.buy?.desc}</p>
                    </div>
                    <div className="px-2">
                      <p className="text-sm text-gray-700">Rent</p>
                      <p className="text-[12px] text-gray-600">{locality?.rent?.price} / sq.ft</p>
                      <p className="text-[12px] text-blue-600">{locality?.rent?.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* </Carousel> */}

            </div>
          </div>
        </div>
        <h2 className="text-[28px] text-center py-5 font-semibold bg-clip-text text-transparent
           bg-gradient-to-tr from-red-500 to-white ">Explore our Real Estate Services</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 container">
          {Service?.map((x, i) => (
            <div className="bg-white shadow-md rounded-xl shadow-gray-500 p-5" key={i}>
              <p className="mb-1">{x?.title}</p>
              <p className="text-gray-700 text-sm w-[80%]">{x?.desc}</p>
              <div className="flex justify-between items-center">
                <button className="px-4 py-1 text-[14px] bg-white text-blue-500 rounded-md border border-blue-500">
                  Read More
                </button>
                <img src={x?.icon} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 mt-10 pb-10">
          <h2 className="text-[28px] text-center py-5 font-semibold bg-clip-text text-transparent
           bg-gradient-to-tr from-red-500 to-white ">Featured Real Estate Projects in India
          </h2>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-2 container">
            {Projects?.map((x, i) => (
              <div className="bg-white shadow-md rounded shadow-gray-300 pb-3 " key={i}>
                <img src={x?.image} className="w-full h-[112px] object-cover" />
                <div className="px-2">
                  <p className="text-black text-[16px] font-semibold">{x?.title}</p>
                  <p className="text-gray-600 text-sm">{x?.location}</p>
                  <p className="text-gray-600 text-sm my-1">{x?.desc}</p>
                  <p className="text-gray-600 text-sm">{x?.size}</p>
                  <p className="text-black font-semibold text-[16px]">₹ {x?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-[28px] text-center mt-10 font-semibold bg-clip-text text-transparent
           bg-gradient-to-tr from-red-500 to-white ">Insights & Tools
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2 my-5 container">
          {Tools?.map((x, i) => (
            <div className="bg-blue-100 border border-blue-400 shadow-md rounded shadow-gray-500 mx-auto p-2 flex flex-col justify-center items-center " key={i}>
              <img src={x?.image} className="w-20 pb-5" />
              <div className=" text-center">

                <p className="text-black px-6 text-[17px] font-semibold">{x?.title}</p>
                <p className="text-gray-600 px-2 text-sm my-1">{x?.desc}</p>
              </div>
              <button className="px-4 py-1 hover:bg-blue-500 hover:text-white mt-2 text-[14px] bg-white text-blue-500 rounded-md border border-blue-500  ">
                Explore Now
              </button>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <SaleRent />
        </div>
        <h2 className="text-[28px] text-center mt-10 font-semibold bg-clip-text text-transparent
           bg-gradient-to-tr from-red-500 to-white ">Explore Real Estate Blogs
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2 my-5 container">
          {Blogs?.map((x, i) => (
            <div className=" border border-blue-400 shadow-md rounded shadow-gray-500 mx-auto  flex flex-col justify-center items- " key={i}>
              <img src={x?.image} className=" pb-5" />
              <div className="px-2 pb-2">
                <p className="text-gray-800  text-[16px] font-semibold">{x?.title}</p>
                <p className="text-gray-600  text-sm my-2">{x?.desc?.slice(0, 60)}...</p>
                <p className="text-[12px] text-gray-700"> {x?.by} </p>
                <p className="text-[12px] text-gray-700"> {x?.in} </p>
              </div>
            </div>
          ))}
        </div>

        <div className="container mt-10">
          <h3 className="text-lg font-semibold mb-2"> Buy, Sell and Rent Properties in India
          </h3>
          <p className="text-sm text-gray-700 mb-5">Welcome to RealEstateIndia.com. We
            have been serving the needs of the real estate industry in India since 2007.
            Our single platform is designed to meet the needs of buyers, sellers and brokers
            of India properties. Our success is attributed to our understanding of the needs
            of our customers and consistently working to meet those needs utilizing innovative
            e-commerce solutions. If you are interested in purchasing a home or locate a rental
            property, you can search India properties using our portal to find the right
            residential property or commercial property to fit your needs. Search India properties
            in our enormous database by the type of property, the location and other attributes
            to quickly locate properties that meet your exact specifications. Do you have a
            commercial property or residential property to sell or rent? You can list your
            rental property or real estate on our website. Our real estate portal is
            structured to provide wider exposure, so your property will be seen by as
            many buyers as possible for a fast response to your listing. There is no charge
            for listing your property, just register with us and enter details and images of
            your property to get started.
          </p>
        </div>
        <div className="bg-[#333] py-5">
          <div className="container grid grid-cols-12 gap-4">
            <div className="col-span-3 text-foreground">
              <p className="text-white font-semibold py-1"> Property for Sale </p>
              {cityNames?.slice(20)?.map((x, index) => (
                <div className="flex items-center gap-2">
                  <FaAngleRight className="text-sm text-gray-500" />
                  <p key={index} className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    Real estate in {x}</p>
                </div>
              ))}
            </div>
            <div className="col-span-3 text-foreground">
              <p className="text-white font-semibold py-1">Flats for Sale </p>
              {cityNames?.slice(20)?.map((x, index) => (
                <div className="flex items-center gap-2">
                  <FaAngleRight className="text-sm text-gray-500" />
                  <p key={index} className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    Flat in {x}</p>
                </div>
              ))}
            </div>
            <div className="col-span-3 text-foreground">
              <p className="text-white font-semibold py-1">Flats for Rent</p>
              {cityNames?.slice(20)?.map((x, index) => (
                <div className="flex items-center gap-2">
                  <FaAngleRight className="text-sm text-gray-500" />
                  <p key={index} className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    Flats for Rent in in {x}</p>
                </div>
              ))}
            </div>
            <div className="col-span-3 text-foreground">
              <p className="text-white font-semibold py-1">New Projects</p>
              {cityNames?.slice(20)?.map((x, index) => (
                <div className="flex items-center gap-2">
                  <FaAngleRight className="text-sm text-gray-500" />
                  <p key={index} className="text-sm text-gray-300 hover:text-white cursor-pointer">
                    New Projects in  {x}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
