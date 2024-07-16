
import { RxTriangleRight } from "react-icons/rx";

const Contact = ({hall}) => {
    return (
        <div className="my-10 px-5 w-full">
        <h2 className="font-semibold text-center text-xl text-gray-700 leading-[1.1] sm:text-xl md:text-3xl">Contact</h2>
                      
        <div className="bg-white px-10 py-3 rounded-md border mt-5">

        <p className="flex items-center text-gray-600 text-md"> {hall.contact}</p>
        <hr  className="my-2"/>
       
        <p className="text-gray-600 flex items-center"><RxTriangleRight className='mr-1'/>{hall.website}</p>
        </div>
        </div>
    );
};

export default Contact;