// src/components/RegistrationForm.tsx
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  contact: string;
  organization: string;
  delegates: number;
};

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      {/* <section id="register" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Register for GWECCC 2025
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Name"
            className="block w-full p-2 border rounded"
            required
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="block w-full p-2 border rounded"
            required
          />
          <input
            {...register("contact")}
            placeholder="Contact Number"
            className="block w-full p-2 border rounded"
            required
          />
          <input
            {...register("organization")}
            placeholder="Organization"
            className="block w-full p-2 border rounded"
            required
          />
          <input
            {...register("delegates")}
            type="number"
            placeholder="Number of Delegates"
            className="block w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
      </section> */}
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
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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

// /* eslint-disable jsx-a11y/label-has-associated-control */
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import type { ZodType } from "zod";
// import { z } from "zod";

// type formData = {
//     name: string;
//     phone: string;
//     email: string;
//     category: string;
//     comments: string;
// };

// const RegistrationForm: React.FC = () => {
//     const schema: ZodType<formData> = z.object({
//         name: z.string().trim().min(3).max(50),
//         phone: z
//             .string()
//             .min(10, { message: "Phone number are a minimum of 10 digits" })
//             .regex(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/),
//         email: z
//             .string()
//             .email()
//             .regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
//             .trim(),
//         category: z.string().min(10).max(30),
//         comments: z.string().min(10).max(100),
//     });

//     const {
//         register,
//         handleSubmit,
//         // formState: { errors },
//     } = useForm<formData>({ resolver: zodResolver(schema) });

//     function submitData(data: formData) {
//         // eslint-disable-next-line no-console
//         console.log("Submitted", data);
//     }

//     return (
//         <div className="bg-black container m-auto w-96 rounded-3xl border border-white p-8 md:w-96">
//             <h1 className="text-center text-3xl text-cyan-100">Get a Quote</h1>
//             <form action="" onSubmit={handleSubmit(submitData)} className="justify-start">
//                 <div className="group relative z-0 mb-6 w-full">
//                     <input
//                         type="text"
//                         id="name"
//                         className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-cyan-900 focus:border-cyan-500 focus:outline-none focus:ring-0 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-500"
//                         placeholder=" "
//                         required
//                         {...register("name")}
//                     />
//                     {/* {errors.name && (
//                         <span className="error">{errors.name.message}</span>
//                     )} */}
//                     <label
//                         htmlFor="name"
//                         className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-cyan-500 dark:text-gray-400 peer-focus:dark:text-cyan-500"
//                     >
//                         Your Name
//                     </label>
//                 </div>
//                 <div className="group relative z-0 mb-6 w-full">
//                     <input
//                         type="text"
//                         id="phone"
//                         className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-cyan-900 focus:border-cyan-500 focus:outline-none focus:ring-0 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-500"
//                         placeholder=" "
//                         required
//                         {...register("phone")}
//                     />
//                     {/* {errors.phone && (
//                         <span className="error">{errors.phone.message}</span>
//                     )} */}
//                     <label
//                         htmlFor="phone"
//                         className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-cyan-500 dark:text-gray-400 peer-focus:dark:text-cyan-500"
//                     >
//                         Phone
//                     </label>
//                 </div>
//                 <div className="group relative z-0 mb-6 w-full">
//                     <input
//                         type="email"
//                         id="email"
//                         className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-cyan-900 focus:border-cyan-500 focus:outline-none focus:ring-0 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-500"
//                         placeholder=" "
//                         required
//                         {...register("email")}
//                     />
//                     {/* {errors.email && (
//                         <span className="error">{errors.email.message}</span>
//                     )} */}
//                     <label
//                         htmlFor="email"
//                         className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-cyan-500 dark:text-gray-400 peer-focus:dark:text-cyan-500"
//                     >
//                         Email
//                     </label>
//                 </div>
//                 <div className="group relative z-0 mb-6 w-full">
//                     <input
//                         type="text"
//                         id="category"
//                         className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-cyan-900 focus:border-cyan-500 focus:outline-none focus:ring-0 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-500"
//                         placeholder=" "
//                         required
//                         {...register("category")}
//                     />
//                     {/* {errors.category && (
//                         <span className="error">{errors.category.message}</span>
//                     )} */}
//                     <label
//                         htmlFor="category"
//                         className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-cyan-500 dark:text-gray-400 peer-focus:dark:text-cyan-500"
//                     >
//                         Insurance Category
//                     </label>
//                 </div>
//                 <div className="group relative z-0 mb-6 w-full">
//                     <input
//                         type="text"
//                         id="comments"
//                         className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-cyan-900 focus:border-cyan-500 focus:outline-none focus:ring-0 dark:border-cyan-600 dark:text-white dark:focus:border-cyan-500"
//                         placeholder=" "
//                         {...register("phone")}
//                     />
//                     {/* {errors.comments && (
//                         <span className="error">{errors.comments.message}</span>
//                     )} */}
//                     <label
//                         htmlFor="comments"
//                         className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-cyan-500 dark:text-gray-400 peer-focus:dark:text-cyan-500"
//                     >
//                         Comments
//                     </label>
//                 </div>
//                 <div className="m-auto w-46 " >
//                     <button
//                         type="submit"
//                         className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800"
//                     >
//                         Get Quote
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default RegistrationForm;
