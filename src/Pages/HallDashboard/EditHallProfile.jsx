import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAHall from "../../Hooks/useAHall";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const notify_Update = () => toast.success('Updated Successful!')



const image_hosting_key= import.meta.env.VITE_apiKey_Image;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const EditHallProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  
    
    const axiosPublic = useAxiosPublic();
    const {loggedHall} = useAHall();

    const onSubmit = async (data) => {
        setLoading(true);

        const imageInputs = [data.image1[0], data.image2[0], data.image3[0], data.image4[0], data.image5[0]];
        const imageUrls = [];
        
        if(imageInputs.length>0){
            for (let i = 0; i < imageInputs.length; i++) {
                const imageFile = { image: imageInputs[i] };
                try {
                    const res = await axiosPublic.post(image_hosting_api, imageFile, {
                        headers: {
                            'content-type': 'multipart/form-data',
                        },
                    });
                    if (res.data.success) {
                        imageUrls.push(res.data.data.url);
                    }
                } catch (error) {
                    console.error("Error uploading image", error);
                }
            }
        }





        const hall={
            hallName: data.hallName,
            images: imageUrls.length>0 ? imageUrls : loggedHall.images ,
            guestCapacity: data.guestCapacity,
            tableBatch: data.tableBatch,
            areas: data.areas,
            parkingAreas: data.parkingAreas,
            video: data.video,
            location: data.location,
            city: data.city,
            area: data.area,
            type: data.type,
            shift: data.shift,
            facilities: [
                data.AC,
                data.CCTV,
                data.Catering,
                data.Cooking,
                data.Generator,
                data.Lift,
                data.Wifi
            ],
            price: {
               priceDay: data.priceDay,
               priceNight: data.priceNight,
            },
            discount: data.discount,
            description: data.description,
            history: data.history,
            floor: data.floor,
            food: data.food,
            items:[
                data.item1,
                data.item2,
                data.item3,
                data.item4,
                data.item5
            ],
            cost: data.cost,
            contact: data.contact,
            website: data.website,
        }

        const result = await axiosPublic.patch(`/halls/${loggedHall.email}`,hall)
        // console.log(result)
        if(result.data.modifiedCount>0){
            notify_Update();
            setLoading(false);
            navigate('/dashboardHall/home')
        }
        
      
  
    }
    
  
    return (
<div className=" border relative p-2 md:p-10 ">

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

    <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
            Edit your hall info
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 space-y-6">
      
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid grid-cols-6 gap-6 pb-5">

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Hall Name</label>
                    <input {...register("hallName", { required: true })} type="text" defaultValue={loggedHall?.hallName ? loggedHall?.hallName : ''}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Your hall name" required=""/>
                    {errors.hallName && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Guest Capacity</label>  
                    <input {...register("guestCapacity", { required: true })} type="text" defaultValue={loggedHall?.guestCapacity ? loggedHall?.guestCapacity : '0'}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="5000" required=""/>
                    {errors.guestCapacity && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 grid grid-cols-5 gap-4 ">
                   
                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 1</label>
                   <input {...register("image1")}  type="file"   className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 2</label>
                   <input {...register("image2")}   type="file"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>
                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 3</label>
                   <input {...register("image3")}  type="file"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 4</label>
                   <input {...register("image4")}  type="file"   className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

                   <div className="col-span-5 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 5</label>
                   <input {...register("image5")}  type="file"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

            

                </div>

 

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Table Batch</label>
                    <input {...register("tableBatch", { required: true })} type="text" defaultValue={loggedHall?.tableBatch ? loggedHall?.tableBatch : '0'} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="300+" required=""/>
                    {errors.tableBatch && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Area sq ft</label>
                    <input {...register("areas", { required: true })} type="number" defaultValue={loggedHall?.areas ? loggedHall?.areas : '0'} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1500" required=""/>
                    {errors.areas && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Parking Area</label>
                    <input {...register("parkingAreas", { required: true })} type="text" defaultValue={loggedHall?.parkingAreas ? loggedHall?.parkingAreas : '0'}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="300" required=""/>
                    {errors.parkingAreas && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Location</label>  
                    <input {...register("location", { required: true })} type="text" defaultValue={loggedHall?.location ? loggedHall?.location : ''  } className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Mohakhali DOHS, VIP Road, Dhaka-1206" required=""/>
                    {errors.location && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">City</label>
                    <input {...register("city", { required: true })} type="text" defaultValue={loggedHall?.city ? loggedHall?.city : '' }  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Dhaka" required=""/>
                    {errors.city && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Local Area Name</label>  
                    <input {...register("area", { required: true })} type="text" defaultValue={loggedHall?.area ? loggedHall?.area : '' } className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Mohakhali" required=""/>
                    {errors.area && <span className="text-red-500">required</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Shift</label>
                    <input {...register("shift", { required: true })} type="text" defaultValue={loggedHall?.shift ? loggedHall?.shift : '' }  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Noon,Night" required=""/>
                    {errors.shift && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Floor</label>  
                    <input {...register("floor", { required: true })} type="text" defaultValue={loggedHall?.floor ? loggedHall?.floor : '' } className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1/2.." required=""/>
                    {errors.floor && <span className="text-red-500">required</span>}
                </div>

                
                <div className="col-span-6 grid grid-cols-6 gap-4 ">
                   
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">AC</label>
                    <select {...register("AC", { required: true })} defaultValue={loggedHall?.facilities[0] ? loggedHall?.facilities[0] : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="AC">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.AC && <span className="text-red-500">required</span>}
                   </div>

                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Catering</label>
                    <select {...register("Catering", { required: true })} defaultValue={loggedHall?.facilities[1] ? loggedHall?.facilities[1] : '' }  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Catering">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.Catering && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">CCTV</label>
                    <select {...register("CCTV", { required: true })} defaultValue={loggedHall?.facilities[2] ? loggedHall?.facilities[2] : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="CCTV">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.CCTV && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Cooking</label>
                    <select {...register("Cooking", { required: true })} defaultValue={loggedHall?.facilities[3] ? loggedHall?.facilities[3] : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Cooking">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.Cooking && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Generator</label>
                    <select {...register("Generator", { required: true })} defaultValue={loggedHall?.facilities[4] ? loggedHall?.facilities[4] : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Generator">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.Generator && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Lift</label>
                    <select {...register("Lift", { required: true })} defaultValue={loggedHall?.facilities[5] ? loggedHall?.facilities[5] : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Lift">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.Lift && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Wifi</label>
                    <select {...register("Wifi", { required: true })} defaultValue={loggedHall?.facilities[6] ? loggedHall?.facilities[6] : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Wifi">Yes</option>
                    <option value="No">No</option>
                   </select>
                   {errors.Wifi && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-3 md:col-span-2">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Type</label>
                    <select {...register("type", { required: true })} defaultValue={loggedHall?.type ? loggedHall?.type : '' }   className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Community center">Community center</option>
                    <option value="Restaurent">Restaurent</option>
                   </select>
                   {errors.type && <span className="text-red-500">required</span>}
                   </div>

                </div>
               
                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Video</label>  
                    <input {...register("video", { required: true })} type="text" defaultValue={loggedHall?.video ? loggedHall?.video : '' }  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="give a youTube video url" required=""/>
                   {errors.video && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food Type</label>  
                    <input {...register("food", { required: true })} type="text"  defaultValue={loggedHall?.food ? loggedHall?.food : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Bangladeshi/Chinese" required=""/>
                    {errors.food && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 grid grid-cols-5 gap-4 ">
                   
                   <div className="col-span-2 md:col-span-1">
                   <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 1</label>  
                   <input {...register("item1", { required: true })} type="text" defaultValue={loggedHall?.items[0] ? loggedHall?.items[0] : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Salad" required=""/>
                   {errors.item1 && <span className="text-red-500">required</span>}
                   </div>

                   <div className="col-span-3 md:col-span-1">
                   <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 2</label>  
                   <input {...register("item2", { required: true })} type="text" defaultValue={loggedHall?.items[1] ? loggedHall?.items[1] : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Soup" required=""/>
                   {errors.item2 && <span className="text-red-500">required</span>}
                   </div>
                   <div className="col-span-2 md:col-span-1">
                   <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 3</label>  
                   <input {...register("item3", { required: true })} type="text" defaultValue={loggedHall?.items[2] ? loggedHall?.items[2] : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Main Course" required=""/>
                   {errors.item3 && <span className="text-red-500">required</span>}
                   </div>

                   <div className="col-span-3 md:col-span-1">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 4</label>  
                    <input {...register("item4", { required: true })} type="text" defaultValue={loggedHall?.items[3] ? loggedHall?.items[3] : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Desserts" required=""/>
                    {errors.item4 && <span className="text-red-500">required</span>}
                   </div>

                   <div className="col-span-3 md:col-span-1">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 5</label>  
                    <input {...register("item5", { required: true })} type="text" defaultValue={loggedHall?.items[4] ? loggedHall?.items[4] : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Vegetables" required=""/>
                    {errors.item5 && <span className="text-red-500">required</span>}
                   </div>

                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food Cost</label>  
                    <input {...register("cost", { required: true })} type="text" defaultValue={loggedHall?.cost ? loggedHall?.cost : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Varies" required=""/>
                    {errors.cost && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Price Discount(%)</label>  
                    <input {...register("discount", { required: true })} type="text" defaultValue={loggedHall?.discount ? loggedHall?.discount : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="10" required=""/>
                    {errors.cost && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Pricing for day booking</label>
                    <textarea {...register("priceDay", { required: true })} rows="1" defaultValue={loggedHall?.priceDay ? loggedHall?.priceDay : ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="150000"></textarea>
                    {errors.price && <span className="text-red-500">required</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Pricing for night booking</label>
                    <textarea {...register("priceNight", { required: true })} rows="1" defaultValue={loggedHall?.priceNight ? loggedHall?.priceNight : ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="150000"></textarea>
                    {errors.price && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Contact</label>  
                    <input {...register("contact", { required: true })} type="text" defaultValue={loggedHall?.contact ? loggedHall?.contact : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="+8801701741656" required=""/>
                    {errors.contact && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Website</label>  
                    <input {...register("website", { required: true })} type="text" defaultValue={loggedHall?.website ? loggedHall?.website : ''} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="www.eventease.com.bd" required=""/>
                    {errors.website && <span className="text-red-500">required</span>}
                </div>

                <div className="col-span-full">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <textarea {...register("description", { required: true })} defaultValue={loggedHall?.description ? loggedHall?.description : ''} rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Raowa Convention Center rent, price, details. রাওয়া কনভেনশন সেন্টার Mohakhali, VIP Road, Dhaka 1206. RETIRED ARMED FORCES OFFICER’S WELFARE ASSOCIATION."></textarea>
                    {errors.description && <span className="text-red-500">required</span>}
                </div>
                <div className="col-span-full">
                    <label className="text-sm font-medium text-gray-900 block mb-2">History</label>
                    <textarea {...register("history", { required: true })} defaultValue={loggedHall?.history ? loggedHall?.history : ''} rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Established in 1990, this hall has hosted numerous prestigious events."></textarea>
                    {errors.history && <span className="text-red-500">required</span>}
                </div>
            </div>
        
            <div className="p-6 border-t border-gray-200 rounded-b">
            <button type="submit" className="text-white bg-orange-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Update</button>
            </div>
        
        </form>
    </div>



</div>
    );
};

export default EditHallProfile;