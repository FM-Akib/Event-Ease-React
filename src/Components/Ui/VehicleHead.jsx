import car from '../../assets/car.png';

const VehicleHead = () => {
    return (
        <header className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="border-l-4 border-orange-500 ps-4">
                <h1 className="text-2xl font-bold text-gray-700 sm:text-3xl">Wedding Vehicle</h1>

                <p className="mt-1.5 text-sm text-gray-500">
                Book suitable vehicle for wedding 
                </p>
            </div>

            <div className="">
               <img src={car} className="h-40 w-40" alt="" />
            </div>


            
            </div>
        </div>
        </header>
    );
};

export default VehicleHead;