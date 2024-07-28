import imgHall from '../../assets/hall.png'
const BookNowSection = () => {
    return (
      <div className=" text-gray-700 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-8 lg:flex-row items-center">
                  <div className="lg:w-1/2">
                      <h1 className="text-4xl font-bold leading-tight mb-3">Book your Hall, Restaurent! </h1>
                      <p className="text-xl mb-8 text-gray-500">Find the best hall or restaurant to manage your events.</p>
                      <button 
                          className="bg-orange-500 border text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Book Now
                      </button>
                  </div>
                  <div className="lg:w-1/2 lg:ml-12">
                      <img src={imgHall} alt="" className="   transition duration-200"/>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default BookNowSection;