import { useState } from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa" ;
import { Link } from "react-router-dom";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name , email , password}
        console.log(user);

    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="bg-base-200">
        <div className="md:w-2/4 mx-auto py-20 px-4">
            <div>
                <h1 className="text-5xl font-bold text-center mb-8">Please Register</h1>
            </div>
            <div className="card shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl mt-2">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl mt-2">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="image url" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl mt-2">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                            <button className="btn btn-secondary text-xl text-white">Register</button>
                        </div>
                    </form>
                    {/* {
                        errorMassage && <p className="text-red-500">{errorMassage}</p>
                    } */}
                    <p>You have an account? <Link to="/login"> <span className="text-blue-600 font-bold cursor-pointer text-[18px]">Login</span></Link> </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;