// src/components/RegistrationForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  email: string;
  contact: string;
  organization: string;
  delegates: number;
};

const RegistrationForm: React.FC = () => {


  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Show success toast
    toast.success("Details submitted successfully!");

    // Log data (optional)
    console.log(data);

    // Clear the input fields
    reset();
  };

  return (
    <>
    <ToastContainer />
      <div className=" bg-blue-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Register for GWECCC 2025
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="relative py-4">
                    <input
                    {...register("name")}
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                    >
                      Name*
                    </label>
                  </div>
                  <div className="relative py-4">
                    <input
                    {...register("email")}
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                    >
                      Email Address*
                    </label>
                  </div>
                  <div className="relative py-4">
                    <input
                    {...register("contact")}
                      autoComplete="off"
                      id="contact"
                      name="contact"
                      type="number"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Contact Number"
                    />
                    <label
                      htmlFor="contact"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                    >
                      Contact Number*
                    </label>
                  </div>
                  <div className="relative py-4">
                    <input
                    {...register("organization")}
                      autoComplete="off"
                      id="organization"
                      name="organization"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Organization"
                      required
                    />
                    <label
                      htmlFor="organization"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                    >
                      Organization*
                    </label>
                  </div>
                  <div className="relative py-4">
                    <input
                    {...register("delegates")}
                      autoComplete="off"
                      id="delegates"
                      name="delegates"
                      type="number"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Delegates"
                      required
                    />
                    <label
                      htmlFor="delegates"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                    >
                      Delegates*
                    </label>
                  </div>
                  <div className="relative pt-4" w-full>
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1 w-full">
                      Register
                    </button>
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

export default RegistrationForm;
