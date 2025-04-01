import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage,setErrorMessage] = useState("");

  const dialogRef = useRef(null);

  const onSubmit = async(data) => {
    console.log(data);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    try
    {
      const response = await axios.post("http://localhost:3000/auth/signup",data,{withCredentials:true});
      console.log(response);
    }catch(error){
      setErrorMessage(error.response.data.message);
    }
  };

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button" // Important: Prevent form submission
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
            <h3 className="font-bold text-xl">Login</h3>
            <div className="mt-5 space-y-2">
              <span>Email :</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 py-2 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-5 space-y-2">
              <span>Password :</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 py-2 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-5 space-y-2 flex justify-around">
              <button
                type="submit"
                className="bg-[#1c7856] text-white py-2 px-4 rounded-md hover:bg-green-300 duration-300 cursor-pointer"
              >
                Login
              </button>
              <p className="mt-2 text-lg">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-700 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
      {/* Example usage of the modal, you'll need to add your trigger button */}
      {/* <button onClick={() => dialogRef.current.showModal()}>Open Login Modal</button> */}
    </div>
  );
}

export default Login;
