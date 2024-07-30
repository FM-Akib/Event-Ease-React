import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';


const notify = () => toast.success('Login Successful!')

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { SigninWithEmailPassword, SigninWithGoogle } = useContext(AuthContext);

    const handleGoogleSignin = () => {
        SigninWithGoogle()
            .then((result) => {
                const Loggeduser = result.user;
                console.log(Loggeduser);
                notify();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const onSubmit = (data) => {
        SigninWithEmailPassword(data.email, data.password)
            .then((result) => {
                const Loggeduser = result.user;
                console.log(Loggeduser);
                notify();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    // https://i.ibb.co/c6MmyWF/abby-savage.jpg
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="bg-[url(https://i.ibb.co/J2DzSx4/watercolor-paper-texture.jpg)] bg-cover bg-center h-screen w-full">
                    <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
                        <div className="mx-auto h-full sm:w-3/12">
                            <div className="m-auto py-12">
                                <div className="mt-12 rounded-3xl border bg-white/60 bg-cover -mx-6 sm:-mx-10 p-8 sm:p-10">
                                    <h3 className="text-2xl font-semibold text-gray-700 text-center">Login to your account</h3>
                                    <div className="mt-12 flex flex-wrap">
                                        <button onClick={handleGoogleSignin} className="w-full h-11 rounded-xl border border-gray-300/75 bg-white px-6 transition active:bg-gray-50">
                                            <div className="w-full mx-auto flex items-center justify-center space-x-4">
                                                <span className="w-max text-sm font-semibold tracking-wide text-cyan-700 flex items-center justify-center">
                                                    <FcGoogle className='mr-1 text-2xl' /> Sign in with Google
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                    <form action="" className="mt-10 space-y-8" onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-orange-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                                <input name="email" {...register("email", { required: true })} type="email" required placeholder="Your email or user name" className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition" />
                                                {errors.email && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-orange-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                                <input {...register("password", { required: true })} name="password" type="password" required placeholder="Your password" className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition" />
                                                {errors.password && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <button className="w-full rounded-md bg-orange-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                                <span className="text-base font-semibold text-white">Login</span>
                                            </button>
                                            <Link to="/signup">
                                                <button href="#" type="reset" className="-ml-3 w-max p-3">
                                                    <span className="text-sm tracking-wide text-sky-600">Create new account? Signup</span>
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
        </>
    );
};

export default Login;
