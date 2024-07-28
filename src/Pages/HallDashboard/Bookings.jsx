import { format } from "date-fns";
import { BsCalendar2Date } from "react-icons/bs";
import useAHall from "../../Hooks/useAHall";
import { TbMessageShare } from "react-icons/tb";
import { PiPhoneCallThin } from "react-icons/pi";
import { MdPendingActions } from "react-icons/md";
import { LiaHandPointRight } from "react-icons/lia";
const Bookings = () => {
    const {loggedHall} = useAHall();
    const {bookings} = loggedHall;
  
  console.log(bookings)
  
  return (
     <div className="px-10 pt-10">
     
     <div className="mb-10">

     <h1 className="text-3xl text-center font-bold flex items-center justify-center text-slate-600"><BsCalendar2Date className="mr-2 text-slate-600" />Bookings</h1>
     </div>

     {
        bookings?.map((booking,i)=>  <article key={i} 
        className="rounded-xl bg-white/50 mb-4 p-4 ring ring-indigo-50 sm:p-6 lg:p-6">
            <div className="flex items-start sm:gap-8">
        
           <div className="w-full">

            <div className="md:flex items-center justify-between w-full ">
             <strong
               className="rounded border border-orange-500 bg-orange-500 px-3 py-1.5 text-[10px] font-medium text-white">
               {booking.options}
             </strong>
            
             <div className="mt-4 md:mt-0 sm:flex sm:items-center sm:gap-2">
               <div className="flex items-center gap-1 text-gray-500">
                 <svg
                   className="h-4 w-4"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                   ></path>
                 </svg>
       
                 <p className="text-xs font-medium">{format(new Date(booking.date), "MMMM do, yyyy 'at' h:mm a")}</p>
               </div>
             </div>

            </div>
       
            <h3 className="mt-4 text-lg font-medium sm:text-xl">
               <a href="#" className=""> {booking.name}</a>
            </h3>
       
            <p className="mt-1 text-sm text-gray-700 flex items-center gap-1">
            <PiPhoneCallThin className="text-xl" /> {booking.hallContact}
            </p>
            <span className="flex mt-1 items-center gap-1 text-gray-500"><TbMessageShare className="text-xl" /> {booking.message ? booking.message : "No Message"}</span>
            
            <div className="flex mt-2 items-center gap-2">
            <span className="flex mt-1 items-center gap-1 text-gray-700"><MdPendingActions  className="text-xl" /> <span className="bg-yellow-100 px-2 py-1 rounded">{booking.status}</span></span>
            <button className=" text-slate-700 border  px-4 py-2 rounded hover:bg-emerald-500 hover:text-white flex items-center gap-1"><LiaHandPointRight className="text-xl"/>Accept</button>
            </div>
           </div>
         </div>
            </article>)
     }



     </div>
    );
};

export default Bookings;