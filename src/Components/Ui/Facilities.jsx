import { TbAirConditioning } from "react-icons/tb";
import { MdTableBar } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { BsCarFrontFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";

const Facilities = ({ ahall }) => {
  return (
    <section id="features" className="container mx-auto px-4 space-y-6 pt-5">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-1 text-center">
        <h2 className="font-semibold text-xl text-gray-700 leading-[1.1] sm:text-2xl md:text-3xl">
          Facilities
        </h2>
      </div>

      <div className="mx-auto grid justify-center gap-4 grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex flex-col items-center justify-between rounded-md p-2">
            <TbAirConditioning className="h-12 w-12 fill-current text-gray-600" />
            <div className="space-y-1 mt-1 text-center">
              <h3 className="font-semibold text-gray-500">AC</h3>
              <p className="text-md font-semibold">
                {ahall.facilities.includes('AC') ? (
                  <span className="text-emerald-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex flex-col items-center justify-between rounded-md p-2">
            <MdTableBar className="h-12 w-12 fill-current text-gray-600" />
            <div className="space-y-1 mt-1 text-center">
              <h3 className="font-semibold text-gray-500">Catering</h3>
              <p className="text-md font-semibold">
                {ahall.facilities.includes('Catering') ? (
                  <span className="text-emerald-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex flex-col items-center justify-between rounded-md p-2">
            <HiHome className="h-12 w-12 fill-current text-gray-600" />
            <div className="space-y-1 mt-1 text-center">
              <h3 className="font-semibold text-gray-500">CCTV</h3>
              <p className="text-md font-semibold">
                {ahall.facilities.includes('CCTV') ? (
                  <span className="text-emerald-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex flex-col items-center justify-between rounded-md p-2">
            <BsCarFrontFill className="h-12 w-12 fill-current text-gray-600" />
            <div className="space-y-1 mt-1 text-center">
              <h3 className="font-semibold text-gray-500">Cooking</h3>
              <p className="text-md font-semibold">
                {ahall.facilities.includes('Cooking') ? (
                  <span className="text-emerald-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex flex-col items-center justify-between rounded-md p-2">
            <BiSolidBuildingHouse className="h-12 w-12 fill-current text-gray-600" />
            <div className="space-y-1 mt-1 text-center">
              <h3 className="font-semibold text-gray-500">Generator</h3>
              <p className="text-md font-semibold">
                {ahall.facilities.includes('Electric Generator') ? (
                  <span className="text-emerald-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex flex-col items-center justify-between rounded-md p-2">
            <HiBuildingOffice2 className="h-12 w-12 fill-current text-gray-600" />
            <div className="space-y-1 mt-1 text-center">
              <h3 className="font-semibold text-gray-500">Lift</h3>
              <p className="text-md font-semibold">
                {ahall.facilities.includes('Lift') ? (
                  <span className="text-emerald-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
