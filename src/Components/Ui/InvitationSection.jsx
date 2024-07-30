
import { Link } from 'react-router-dom';
import img1 from '../../assets/Invitation1.png'

const InvitationSection = () => {
    return (
        <div className="md:px-40 px-4 md:py-20 py-5">
        
        <div className="grid md:grid-cols-3 rounded-md gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-r from-orange-700 to-orange-400 font-sans overflow-hidden">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-white">Make Invitation Card!</h1>
          <p className="text-base text-gray-200 mt-4">Easily make your invitation card.</p>
  
         <Link to="/card">
          <button type="button"
            className="py-3 px-6 text-sm font-semibold bg-white text-orange-600 hover:bg-slate-100 rounded-md mt-8">Get
            Started</button></Link>
          </div>
  
        <div className="relative max-md:hidden">
          <img src={img1} alt="Banner Image"
            className="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover" />
        </div>
        </div>
      </div>
    );
};

export default InvitationSection;