import { Link } from 'react-router-dom';
import imgHall from '../../assets/hall.png'
import { MdOutlineAdsClick } from "react-icons/md";

const BookNowSection = () => {
    return (
      <div className=" text-gray-700 py-20 mt-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-8 lg:flex-row items-center">
                  <div className="lg:w-1/2">
                      <h1 className="text-4xl font-bold leading-tight mb-3">Book your Hall, Restaurent! </h1>
                      <p className="text-xl mb-8 text-gray-500">Find the best hall or restaurant to manage your events.</p>
                    
                    <Link to='/allhalls'>
                      <button 
                          className="bg-orange-500  text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 flex items-center"><MdOutlineAdsClick className='mr-1 text-xl' /> Book Now
                      </button>
                    </Link>
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