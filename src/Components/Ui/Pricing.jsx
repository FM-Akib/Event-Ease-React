import { PiCheckCircleDuotone } from "react-icons/pi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Pricing = ({ hall }) => {
  if (!hall || !hall.price) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10 md:py-20">
      <div className="mt-2 grid items-center gap-6 w-full border-2 rounded-lg bg-white">
        <div className="group row-start-1 md:col-span-2">
          <div
            aria-hidden="true"
            className=" top-0 h-full w-full rounded-3xl border  bg-white  shadow-gray-600/10 transition duration-500 "
          ></div>
          <div className=" space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700">Cost Chart</h3>
            <div className="overflow-hidden">
              <div className="-mr-20 flex items-end justify-center">
                <div className="flex">
                  <span className="-ml-6 mt-2 text-3xl font-bold text-primary">*</span>
                  <span className="leading-0 text-6xl font-bold text-gray-800">{hall?.discount?hall?.discount: '10'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-xl font-bold text-primary">% Discount</span>
                </div>
              </div>
              <div className="text-center text-2xl font-medium">
                <span className="text-gray-400 line-through">10%</span>
                <span className="font-semibold text-gray-700">15%</span>
              </div>
              <span className="block text-center text-xs uppercase text-primary">For 24 hours</span>
              <span
                className="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900"
              >
                Basic Prices (varies)
              </span>
            </div>
            <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600">
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-primary">
                  <PiCheckCircleDuotone className="text-emerald-500" />
                </span>
                <span>Day  - {hall.price.dayAc}৳</span>
              </li>
              {/* <li className="space-x-2 flex items-center">
                <span className="font-semibold text-primary">
                  <PiCheckCircleDuotone className="text-emerald-500" />
                </span>
                <span>Day without Ac - {hall.price.dayNonAc}৳</span>
              </li> */}
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-primary">
                  <PiCheckCircleDuotone className="text-emerald-500" />
                </span>
                <span>Night - {hall.price.nightAc}৳</span>
              </li>
              {/* <li className="space-x-2 flex items-center">
                <span className="font-semibold text-primary">
                  <PiCheckCircleDuotone className="text-emerald-500" />
                </span>
                <span>Night without Ac - {hall.price.nightNonAc}৳</span>
              </li> */}
            </ul>

            <Link to={`/bookhall/${hall._id}`}>  
              <button className=" flex h-11 bg-emerald-700 hover:bg-emerald-600 rounded-md w-full items-center justify-center px-6 ">
                <span className=" text-base font-semibold text-white flex items-center">
                  Book Now <IoArrowForwardCircleOutline className="ml-1 text-xl" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
