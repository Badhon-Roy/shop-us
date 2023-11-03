import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password  = form.password.value;
        const user = { email , password}
        console.log(user);
    }
    const handleGoogleLogin = ()=>{
        console.log("logging work coming sooon........");
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="bg-base-200">
            <div className="lg:w-2/4 md:w-3/4 mx-auto py-32 px-4">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-8">Login now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-xl mt-2">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder="password" className="input input-bordered w-full" required />

                                    <p className="absolute right-5 top-4 text-xl" onClick={handleShowPassword}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </p>
                                </div>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-xl text-white">Login</button>
                            </div>
                        </form>
                        {/* {
                            errorMassage && <p className="text-red-500">{errorMassage}</p>
                        } */}
                        <button onClick={handleGoogleLogin} className="border-2 font-bold border-black w-[170px] flex items-center gap-3 p-1 rounded-lg transform translate-x-0 transition-transform ease-in-out duration-300 hover:translate-x-5 bg-gradient-to-r hover:from-green-500 hover:to-blue-500">
                            <img className="w-8" src="https://tinyurl.com/4d5vrs96" alt="" />
                            sign in google
                        </button>





                        <p>Do not have an account? <Link to="/register"> <span className="text-blue-600 font-bold cursor-pointer text-[18px]">Register</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;