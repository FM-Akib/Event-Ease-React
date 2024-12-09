
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { FaBuildingWheat } from "react-icons/fa6";

import bg from '../assets/pattern.jpg'
import signupImg from '../assets/signup.jpg'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const notify_Signup = () => toast.success('Signup Successful!')

const image_hosting_key= import.meta.env.VITE_apiKey_Image;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading,setLoading] = useState(false);


  const {CreateUserEmailPassword,SigninWithGoogle,SigninWithGithub} = useContext(AuthContext); 

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();


  const handleGoogleSignUp= ()=>{
    SigninWithGoogle()
    .then((result) => {
        const Loggeduser = result.user;
            console.log(Loggeduser)
            // setLoading(true);

            const user ={
                name: result.user?.displayName,
                email: result.user?.email,
                image: result.user?.photoURL,
                type: "user",
                mybookings:[]
            }


            axiosPublic.post('/users',user)
            .then((result) => {
                if(result.insertedId>0){
                    // setLoading(false);
                    notify_Signup() 
                    navigate('/',{replace: true})
                }
               
            })
            
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  const handleGithubSignUp= ()=>{
    SigninWithGithub()
    .then((result) => {
        const Loggeduser = result.user;
            console.log(Loggeduser)
            // setLoading(true);

            const user ={
                name: result.user?.displayName,
                email: result.user?.email,
                image: result.user?.photoURL,
                type: "user",
                mybookings:[]
            }


            axiosPublic.post('/users',user)
            .then((result) => {
                if(result.insertedId>0){
                    // setLoading(false);
                    notify_Signup() 
                    navigate('/',{replace: true})
                }
               
            })
            
      })
      .catch((error) => {
        console.log(error.message);
      });
  }


  const onSubmit = async (data) => {
    setLoading(true);

    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
    if(res.data.success){

    CreateUserEmailPassword(data.email,data.password)
    .then((result) => {
        const Loggeduser = result.user;
            console.log(Loggeduser)
            const user = {
                name: data.name,
                email: data.email,
                image: res.data.data.display_url,
                contact: data.contact,
                type: "user",
                mybookings:[],
              }
            axiosPublic.post('/users',user)
            .then(result => {
                if(result.data.insertedId) {
                    setLoading(false);
                    notify_Signup()
                    navigate('/',{replace: true})
                }
            })
           
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
}

  

  return (

    <div className="md:grid grid-cols-10 p-2 md:p-14 md:pt-2  bg-cover relative" style={{backgroundImage: `url(${bg})`}}>


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

     <div className="  md:border-r-0 md:rounded-l-md col-span-5 bg-white/50">

            <div className="w-full max-w-md mx-auto p-4 md:p-8 space-y-3 rounded-xl bg-white/50 text-gray-800 ">
            <h1 className="text-2xl font-bold text-center pb-5">Register</h1>


            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6 ">
           
            <div className="space-y-1 text-sm">
                <label htmlFor="image" className="block text-gray-600">Profile Photo</label>
                <input {...register("image")} type="file" name="image" id="image"  className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-emerald-600" />
            </div>


            <div className="space-y-1  relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-orange-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                   <input
                     name="name"
                    {...register("name", { required: true })}
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent pb-2 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                  />
                  {errors.email && <span>This field is required</span>}
            </div>

            <div className=" space-y-1  relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-orange-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input
                name="contact"
                {...register("contact", { required: true })}
                type="text"
                required
                placeholder="Your contact number"
                className="w-full bg-transparent pb-2 border-b border-gray-300 outline-none invalid:border-red-400 transition"
              />
              {errors.contact && <span>This field is required</span>}
            </div>


            <div className=" space-y-1  relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-orange-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                required
                placeholder="Your email or user name"
                className="w-full bg-transparent pb-2 border-b border-gray-300 outline-none invalid:border-red-400 transition"
              />
              {errors.email && <span>This field is required</span>}
            </div>
              
            <div className=" space-y-1  w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-orange-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input
                {...register("password", { required: true })}
                name="password"
                type="password"
                required
                placeholder="Your Password"
                className="w-full bg-transparent pb-2 border-b border-gray-300 outline-none invalid:border-red-400 transition"
              />
              {errors.password && <span>This field is required</span>}
            </div>
            
            <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-orange-500 hover:bg-orange-600">Sign Up</button>
            </form>



            <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
            <p className="px-3 text-sm text-gray-600">Signup another way</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-3 gap-3 justify-center space-x-4 ">
            
            <div className="flex items-center justify-center gap-3 col-span-1 ">
            <button onClick={handleGoogleSignUp} aria-label="Log in with Google" className=" px-2 py-2 rounded-lg border-2 flex items-center justify-center">
            <FcGoogle className='text-3xl'/>
            {/* <p className="text-left ml-4 leading-tight text-sm	">Sign up with google</p> */}
            </button>
            <button onClick={handleGithubSignUp} aria-label="Log in with Google" className=" px-2 py-2 rounded-lg border-2 flex items-center justify-center">
            <FaGithub className='text-3xl'/>
            {/* <p className="text-left ml-4 leading-tight text-sm	">Sign up with google</p> */}
            </button>
            </div>
            
            <Link to="/signuphall" className="col-span-2 w-full  px-3 py-1 rounded-lg border-2 flex items-center justify-center">
            <button  className=" flex items-center justify-center">
            <FaBuildingWheat className='text-3xl'/>
            <p className="text-left ml-4 text-sm leading-tight	">Register your hall</p>
            </button>
            </Link>

            </div>
            <p className="text-md text-center sm:px-6 text-gray-600">Already have an account?
            <Link rel="noopener noreferrer" to="/login" className="underline text-blue-800 ml-1">Login</Link>
            </p>
            </div>

            </div>


            <div className="  md:rounded-r-md    col-span-5 bg-white/50 p-10 flex flex-col items-center justify-start">
             <div className="">
            <h1 className="text-2xl text-center font-extrabold tracking-tight text-slate-900 sm:text-3xl">Event <span className="text-orange-400"> Ease</span></h1>
            <p className="mt-2 mb-10 text-sm text-center font-semibold text-gray-400">
            Make easy to booking event hall
            </p>
            </div> 
            <img src={signupImg} className="rounded-lg" alt="" />  
            </div>
            
        </div>

  );
};

export default Signup;
