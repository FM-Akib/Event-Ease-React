import { MdOutlineChair, MdTableBar, MdOutlineNightsStay } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { BsCarFrontFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";

const Capacity = ({ ahall }) => {
  return (
    <section id="features" className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-1 text-center">
        <h2 className="font-semibold text-xl text-gray-700 leading-[1.1] sm:text-2xl md:text-3xl">
          The capacity of this {ahall.type}
        </h2>
      </div>

      <div className="mx-auto grid justify-center gap-4 grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <MdOutlineChair className="h-12 w-12 fill-current text-gray-700" />
            <div className="space-y-2">
              <h3 className="font-bold">Guest Capacity</h3>
              <p className="text-md font-semibold text-emerald-500">{ahall.guestCapacity}</p>
            </div>
          </div>
        </div>

        <div className=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <MdTableBar className="h-12 w-12 fill-current text-gray-700" />
            <div className="space-y-2">
              <h3 className="font-bold">Table Batch</h3>
              <p className="text-md font-semibold text-emerald-500">{ahall.tableBatch}</p>
            </div>
          </div>
        </div>

        <div className=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <HiHome className="h-12 w-12 fill-current text-gray-700" />
            <div className="space-y-2">
              <h3 className="font-bold">Areas</h3>
              <p className="text-md font-semibold text-emerald-500">{ahall.areas} sq ft.</p>
            </div>
          </div>
        </div>

        <div className=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <BsCarFrontFill className="h-12 w-12 fill-current text-gray-700" />
            <div className="space-y-2">
              <h3 className="font-bold">Parking</h3>
              <p className="text-md font-semibold text-emerald-500">{ahall.parkingAreas}+</p>
            </div>
          </div>
        </div>

        <div className=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <BiSolidBuildingHouse className="h-12 w-12 fill-current text-gray-700" />
            <div className="space-y-2">
              <h3 className="font-bold">Floor</h3>
              <p className="text-md font-semibold text-emerald-500">{ahall.floor}</p>
            </div>
          </div>
        </div>

        <div className=" rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <MdOutlineNightsStay className="h-12 w-12 fill-current text-gray-700" />
            <div className="space-y-2">
              <h3 className="font-bold">Shift</h3>
              <p className="text-md font-semibold text-emerald-500">{ahall.shift}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capacity;
