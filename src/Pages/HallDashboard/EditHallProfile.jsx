
const EditHallProfile = () => {
    return (
<div className=" border relative p-2 md:p-10">

    <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
            Edit your hall info
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 space-y-6">
        <form action="#">
            <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Hall Name</label>
                    <input type="text" name="hallName"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Your hall name" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Guest Capacity</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="5000" required=""/>
                </div>

                <div className="col-span-6 grid grid-cols-5 gap-4 ">
                   
                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 1</label>
                   <input  type="file" name="image" id="image"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 2</label>
                   <input  type="file" name="image" id="image"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>
                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 3</label>
                   <input  type="file" name="image" id="image"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

                   <div className="col-span-2 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 4</label>
                   <input  type="file" name="image" id="image"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

                   <div className="col-span-5 md:col-span-1">
                   <label htmlFor="image" className="block text-gray-600">Photo 5</label>
                   <input  type="file" name="image" id="image"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
                   </div>

            

                </div>

 

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Table Batch</label>
                    <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="300+" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Area sq ft</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1500" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Parking Area</label>
                    <input type="text" name="hallName"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="300" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Location</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Mohakhali DOHS, VIP Road, Dhaka-1206" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">City</label>
                    <input type="text" name="hallName"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Dhaka" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Local Area Name</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Mohakhali" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Shift</label>
                    <input type="text" name="hallName"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Noon,Night" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Floor</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1/2.." required=""/>
                </div>

                
                <div className="col-span-6 grid grid-cols-6 gap-4 ">
                   
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">AC</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>

                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Catering</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">CCTV</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Cooking</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Generator</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Lift</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Wifi</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Type</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="community">Community</option>
                    <option value="restaurent">Restaurent</option>
                   </select>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                    <label htmlFor="options" className="text-sm leading-7 text-gray-600">Dedicated Building</label>
                    <select id="options" name="options"  className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                    <option value="" disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                   </select>
                   </div>


                </div>
               
                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Video</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="give a youTube video url" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food Type</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Bangladeshi/Chinese" required=""/>
                </div>

                <div className="col-span-6 grid grid-cols-6 gap-4 ">
                   
                   <div className="col-span-3 md:col-span-1">
                   <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 1</label>  
                   <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""/>
                   </div>

                   <div className="col-span-3 md:col-span-1">
                   <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 2</label>  
                   <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""/>
                   </div>
                   <div className="col-span-3 md:col-span-1">
                   <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 3</label>  
                   <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""/>
                   </div>

                   <div className="col-span-3 md:col-span-1">
                     <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 4</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""/>
                   </div>

                   <div className="col-span-3 md:col-span-1">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 4</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""/>
                   </div>

                   <div className="col-span-3 md:col-span-1">
                     <label  className="text-sm font-medium text-gray-900 block mb-2">Food item 5</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""/>
                   </div>

                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Food Cost</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Varies" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Pricing</label>
                    <textarea id="product-details" rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Contact</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="+8801701741656" required=""/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label  className="text-sm font-medium text-gray-900 block mb-2">Website</label>  
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="www.eventease.com.bd" required=""/>
                </div>

                <div className="col-span-full">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <textarea id="product-details" rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Raowa Convention Center rent, price, details. রাওয়া কনভেনশন সেন্টার Mohakhali, VIP Road, Dhaka 1206. RETIRED ARMED FORCES OFFICER’S WELFARE ASSOCIATION."></textarea>
                </div>
                <div className="col-span-full">
                    <label className="text-sm font-medium text-gray-900 block mb-2">History</label>
                    <textarea id="product-details" rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Established in 1990, this hall has hosted numerous prestigious events."></textarea>
                </div>
            </div>
        </form>
    </div>

    <div className="p-6 border-t border-gray-200 rounded-b">
        <button className="text-white bg-orange-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
    </div>

</div>
    );
};

export default EditHallProfile;