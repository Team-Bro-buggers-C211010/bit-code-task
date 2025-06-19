import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-amber-400 rounded-lg shadow-lg">
        <div className="text-center p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold mb-2">Login Now</h1>
          <p className="text-gray-600">To stay up-to-date with the product we are working on</p>
        </div>
        <div className="p-6 rounded shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <div className={`flex items-center border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}>
                  <IoMdMail className="mx-2 size-5" />
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required", pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full p-2 outline-none`}
                  />
                </div>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            <div className="mb-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <div className={`relative flex items-center border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}>
                  <FaLock className="mx-2 size-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required", minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    className={`w-full p-2 outline-none`}
                  />
                  <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="size-5" />
                  ) : (
                    <FaRegEye className="size-5" />
                  )}
                </button>
                </div>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
            </div>
            <button type="submit" className="w-full border bg-amber-400 text-white p-2 rounded hover:bg-white hover:text-amber-400 hover:cursor-pointer hover:border-amber-400 transition-colors duration-300">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Don't have an account? <Link to="/register" className="text-amber-500 hover:underline">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
