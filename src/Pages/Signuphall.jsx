import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const notify_Signuphall = () => toast.success('Signup Successful!')


const Signuphall = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const {CreateUserEmailPassword,SigninWithGoogle} = useContext(AuthContext); 

  const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();


  const handleGoogleSignUp= ()=>{
    SigninWithGoogle()
    .then((result) => {
        const Loggeduser = result.user;
            console.log(Loggeduser)

            const user ={
                name: result.user?.displayName,
                email: result.user?.email,
                type: "hall",
            }


            axiosPublic.post('/users',user)
            .then((result) => {
                if(result.insertedId>0){
                    notify_Signuphall() 
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
            const user = {
                name: data.name,
                email: data.email,
                contact: data.contact,
                type: "hall",
              }
            axiosPublic.post('/users',user)
            .then(result => {
                if(result.data.insertedId) {
                    notify_Signuphall()
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
                {/* <h3 className="text-2xl font-semibold text-gray-700">List your hall here...</h3> */}

                
            <section className="w-full max-w-5xl mx-auto px-5 lg:px-0">
            <div className="bg-gray-800 p-6 md:p-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center relative">
                <svg className="absolute right-0 top-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" width="227" height="223" viewBox="0 0 227 223" fill="none">
                <path opacity="0.21" d="M163.766 -28.3772C163.766 -31.8935 161.662 -35.0699 158.422 -36.4473C155.181 -37.8247 151.429 -37.1368 148.891 -34.6996L117.649 -4.71041C71.1338 39.9411 31.8296 91.5182 1.13522 148.185C0.412538 149.459 0 150.932 0 152.501C0 157.345 3.9335 161.271 8.78571 161.271H84.5186V287.378C84.5186 290.852 86.5716 293.998 89.754 295.401C92.9365 296.805 96.6487 296.201 99.2207 293.862L113.199 281.15C162.13 236.652 203.656 184.662 236.217 127.133L244.863 111.856C246.4 109.141 246.377 105.814 244.802 103.121C243.228 100.427 240.339 98.7703 237.214 98.7703H163.766V-28.3772Z" fill="#F2F9FB" fillOpacity="0.4" />
                </svg>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white text-center">Listing <span className=" font-semibold text-yellow-200">Your Hall</span></h3>
            </div>
            </section>


                <div className="mt-5 flex flex-wrap">
                  <button onClick={handleGoogleSignUp} className="w-full h-11 rounded-xl border border-gray-300/75 bg-white px-6 transition active:bg-gray-50">
                    <div className="w-full mx-auto flex items-center justify-center space-x-4">
                      <span className="w-max text-sm font-semibold tracking-wide text-cyan-700 flex items-center justify-center">
                        <FcGoogle className="mr-1 text-2xl" /> Sign up with Google
                      </span>
                    </div>
                  </button>
                
                </div>

                <form className="mt-10 space-y-8" onSubmit={handleSubmit(onSubmit)}>
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
                    <Link to="/login">
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

export default Signuphall;
