
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
// import useAxiosPublic from '../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';


const notify_Signup = () => toast.success('Signup Successful!')

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const {CreateUserEmailPassword,SigninWithGoogle} = useContext(AuthContext); 

  const navigate = useNavigate();
//   const axiosPublic = useAxiosPublic();


  const handleGoogleSignUp= ()=>{
    SigninWithGoogle()
    .then((result) => {
        const Loggeduser = result.user;
            console.log(Loggeduser)

            // const user ={
            //     name: result.user?.displayName,
            //     email: result.user?.email
            // }
            // axiosPublic.post('/users',user)
            .then((result) => {
                if(result.insertedId>0){
                    notify_Signup   
                }
                navigate('/',{replace: true})
            })
            
      })
      .catch((error) => {
        console.log(error.message);
      });
  }


  const onSubmit = (data) => {
    CreateUserEmailPassword(data.email,data.password)
    .then((result) => {
        const Loggeduser = result.user;
            console.log(Loggeduser)
            // const user = {
            //     name: data.name,
            //     email: data.email
            // }
            // axiosPublic.post('/users',user)
            .then(result => {
                if(result.data.insertedId) {
                    notify_Signup
                    navigate('/',{replace: true})
                }
            })
           
      })
      .catch((error) => {
        console.log(error.message);
      });
}

  

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="bg-[url('https://i.ibb.co/c6MmyWF/abby-savage.jpg')] bg-cover bg-center h-screen w-full">
        <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
          <div className="mx-auto h-full sm:w-3/12">
            <div className="m-auto py-12">
              <div className="mt-12 rounded-3xl border bg-gray-50/85 -mx-6 sm:-mx-10 p-8 sm:p-10">
                <h3 className="text-2xl font-semibold text-gray-700">Create a new account</h3>
                <div className="mt-4 flex flex-wrap">
                  <button onClick={handleGoogleSignUp} className="w-full h-11 rounded-xl border border-gray-300/75 bg-white px-6 transition active:bg-gray-50">
                    <div className="w-full mx-auto flex items-center justify-center space-x-4">
                      <span className="w-max text-sm font-semibold tracking-wide text-cyan-700 flex items-center justify-center">
                        <FcGoogle className="mr-1 text-2xl" /> Sign up with Google
                      </span>
                    </div>
                  </button>

                  <Link to="/signuphall" className="w-full">
                  <button  className="mt-2 w-full h-11 rounded-xl border border-gray-300/75 bg-white px-6 transition active:bg-gray-50">
                    <div className="w-full mx-auto flex items-center justify-center space-x-4">
                      <span className="w-max text-sm font-semibold tracking-wide text-cyan-700 flex items-center justify-center">
                        <PiBuildingOfficeDuotone className="mr-1 text-2xl" /> Sign up as a Event Hall
                      </span>
                    </div>
                  </button>
                  </Link>
                
                </div>

                <form className="mt-6 space-y-8" onSubmit={handleSubmit(onSubmit)}>
                  
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <input
                        name="name"
                        {...register("name", { required: true })}
                        type="text"
                        required
                        placeholder="Your Name"
                        className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
                    <div>
                        
                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <input
                        name="email"
                        {...register("email", { required: true })}
                        type="email"
                        required
                        placeholder="Your email or user name"
                        className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <input
                        {...register("password", { required: true })}
                        name="password"
                        type="password"
                        required
                        placeholder="Your Password"
                        className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                      />
                      {errors.password && <span>This field is required</span>}
                    </div>
                  </div>

                  <div>
                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <input
                        name="contact"
                        {...register("contact", { required: true })}
                        type="text"
                        placeholder="Your contact number"
                        className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                      />
                      {errors.contact && <span>This field is required</span>}
                    </div>
                  </div>

                  <div>
                    <button className="w-full rounded-xl bg-orange-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                      <span className="text-base font-semibold text-white">Sign up</span>
                    </button>
                    <Link href="/login">
                      <button type="reset" className="-ml-3 w-max p-3">
                        <span className="text-sm tracking-wide text-sky-600">Already have an account? Login</span>
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
