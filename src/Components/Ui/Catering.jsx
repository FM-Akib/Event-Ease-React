import { LuUtensils } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxTriangleRight } from "react-icons/rx";



const Catering = ({hall}) => {
    return (
        <div className="my-10 px-5">
        <h2 className="font-semibold text-center text-xl text-gray-700 leading-[1.1] sm:text-xl md:text-3xl">Catering Service</h2>
                      
        <div className="bg-white px-10 py-3 rounded-md border mt-5">

        <p className="flex items-center"><span className="font-semibold mr-1 text-gray-600 flex items-center"><LuUtensils className='mr-1'/>Food:</span> {hall.food}</p>
        <hr  className="my-2"/>
        {
            hall.items.map((item, index) => ( <div key={index} className="flex items-center font-semibold text-gray-500"><MdKeyboardDoubleArrowRight className='mr-1' />{item}</div>))
        }
        <hr  className="my-2"/>
        <p className="text-gray-600 flex items-center"><RxTriangleRight className='mr-1'/>This can be updateable.</p>
        <p className="text-gray-600 flex items-center"><RxTriangleRight  className='mr-1'/>Cost: {hall.cost} </p>
        </div>
        </div>
    );
};

export default Catering;