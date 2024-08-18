import VehicleHead from "../Components/Ui/VehicleHead";
import useAllVehicles from "../Hooks/useAllVehicles";

const Vehicle = () => {
  const { vehicles ,isLoading } = useAllVehicles();
  console.log(vehicles)
  
  if(isLoading){
                <div className="flex justify-center items-center h-screen">
                <div className="relative inline-flex">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
                </div>
  }

    return (
        <>
        <VehicleHead/>
        
        
        <div  className="py-12">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            {/* <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl ">Sharing is Caring</h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-600 ">
                Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
                aliquid explicabo? Excepturi, voluptate?
            </p>
            </div> */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {
            vehicles?.map(vehicle => <div key={vehicle._id} className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                <img src={vehicle.vehicleImg}
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
                </div>
                <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 ">
                    {vehicle.vehicleName} <span className="text-sm text-white bg-orange-500 px-2 py-1 rounded">{vehicle.vehicleModel}</span>
                </h3>
                <p className="mt-4 mb-4 text-gray-600  border px-5 py-1 rounded-sm">
                    Driver Name - {vehicle.driverName} <br />
                    Contact No - {vehicle.contact}
                </p>
                <p className="inline-block" >
                    <span className="text-orange-500 font-semibold">Guest Capacity - {vehicle.guestCapacity} | {vehicle.type}</span>
                </p>
                </div>
                    
                </div>)
            }

    </div>
  </div>
</div>
                                    

        </>
    );
};

export default Vehicle;