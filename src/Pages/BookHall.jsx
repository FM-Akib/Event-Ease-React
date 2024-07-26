import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiSend } from "react-icons/bi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TbCalendarTime } from "react-icons/tb";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUserInfo from "../Hooks/useUserInfo";
import toast from "react-hot-toast";

// const notify_Bookings = () => toast.success(
//   "Thanks for booking, your booking taken.\n\nBooking agent will contact you soon.",
//   {
//     duration: 5000,
//   }
// );

const notify_Bookings = ()=>toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/qm6D4WH/succ.png"
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
          Thanks for booking, your booking taken.
          </p>
          <p className="mt-1 text-sm text-gray-500">
          Booking agent will contact you soon.
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-emerald-600 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Close
      </button>
    </div>
  </div>
),{
  duration: 5000,
})

const BookHall = () => {
   const hall = useLoaderData()
   const axiosPublic = useAxiosPublic();
   const {userInfo} = useUserInfo();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(null);
    const [loading,setLoading] = useState(false);
  
    const onSubmit = async (data) => {
      setLoading(true);
      data.date = startDate;
      
      const bookingDate = new Date (data.date);
      const bookedDate = bookingDate.toISOString()
      const booking = {
        name: data.name,
        email: data.email,
        date: bookedDate,
        contact: data.contact,
        options: data.options,
        hallName: hall.hallName,
        hallContact: hall.contact,
        hallId: hall._id
      };

      
      const result1 = await axiosPublic.patch(`/updateBookingDate/${hall._id}`,{bookedDate})
      console.log(result1);
   
      const result2 = await axiosPublic.patch(`/updateBookingUser/${userInfo.email}`,{booking})
      console.log(result2);

      //insert in booking collection
      const result3 = await axiosPublic.patch(`/updateBookinghall/${hall._id}`,{booking})
       
      if(result3.data.result.modifiedCount) {
        setLoading(false);
        notify_Bookings();
      }

    };
  
    const isBooked = (date) => {
      const bookedDates = hall.bookedDates.map(bookedDate => new Date(bookedDate).toISOString().split('T')[0]);
      return bookedDates.includes(date.toISOString().split('T')[0]);
    };
  
    const filterDates = (date) => {
      return !isBooked(date);
    };
  
    return (
      <div className="bg-[url('https://i.ibb.co/NC1w1G1/vecteezy-monochrome-background-with-retro-pattern-design-7661760.jpg')] bg-cover">
        <div className="px-20 py-10 bg-white/95 ">

        <div className={`${loading? 'block':'hidden'}   absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center `}>
        <div className="flex items-center">
          <span className="text-3xl mr-4">Loading</span>
          <svg className="animate-spin h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
        </div>
      </div>

        <div className="w-8/12 mx-auto mt-3 flex flex-col border rounded-lg bg-white p-8">
          <section className="w-full max-w-5xl mx-auto px-5 lg:px-0">
            <div className="bg-gray-800 p-6 md:p-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center relative">
              <svg className="absolute right-0 top-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" width="227" height="223" viewBox="0 0 227 223" fill="none">
                <path opacity="0.21" d="M163.766 -28.3772C163.766 -31.8935 161.662 -35.0699 158.422 -36.4473C155.181 -37.8247 151.429 -37.1368 148.891 -34.6996L117.649 -4.71041C71.1338 39.9411 31.8296 91.5182 1.13522 148.185C0.412538 149.459 0 150.932 0 152.501C0 157.345 3.9335 161.271 8.78571 161.271H84.5186V287.378C84.5186 290.852 86.5716 293.998 89.754 295.401C92.9365 296.805 96.6487 296.201 99.2207 293.862L113.199 281.15C162.13 236.652 203.656 184.662 236.217 127.133L244.863 111.856C246.4 109.141 246.377 105.814 244.802 103.121C243.228 100.427 240.339 98.7703 237.214 98.7703H163.766V-28.3772Z" fill="#F2F9FB" fillOpacity="0.4" />
              </svg>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white text-center">Booking <span className=" font-semibold text-yellow-200">{hall.hallName}</span></h3>
            </div>
          </section>
          <p className="my-5 leading-relaxed text-gray-600">Fill the form, {hall.hallName} will get in touch with you shortly over the Phone.</p>
        
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="mb-4 flex-1">
                <label htmlFor="name" className="text-sm leading-7 text-gray-600">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" {...register('name', { required: true })} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" {...register('email', { required: true })} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mb-4 flex-1">
                <label htmlFor="contact" className="text-sm leading-7 text-gray-600">Contact Number</label>
                <input type="text" id="contact" name="contact" placeholder="Your contact number" {...register('contact', { required: true })} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                {errors.contact && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="options" className="text-sm leading-7 text-gray-600">Booking Type</label>
                <select id="options" name="options" {...register('options', { required: true })} className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                  <option value="" disabled selected>Select an option</option>
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </select>
                {errors.options && <span className="text-red-600">This field is required</span>}
              </div>
            </div>

            <div className="mb-4 ">
              <label htmlFor="date" className="mb-2 text-sm leading-7 text-gray-600 font-semibold  mr-4 flex items-center"><TbCalendarTime className="mr-1 text-xl" />Select date for bookings</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                filterDate={filterDates}
                placeholderText="Select a date"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              {errors.date && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
              <textarea id="message" name="message" placeholder="Message us about your requirement" {...register('message')} className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
              {errors.message && <span className="text-red-600">This field is required</span>}
            </div>
            <button type="submit" className="rounded border-0 bg-[#1F2937] py-2 px-6 text-lg text-white hover:bg-[#303d48] focus:outline-none flex justify-center items-center">Send<BiSend className='ml-1' />
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
        </div>
      </div>
      </div>
    );
};

export default BookHall;