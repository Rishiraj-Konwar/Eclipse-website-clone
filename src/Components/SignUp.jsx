import React, { useRef } from "react";

const SignUp = () => {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    if (inputRef.current.value === "") {
      alert("Enter your email");
    }
  };
  return (
    <div className="bg-[#FF4201] w-full h-[35vh] flex flex-col justify-between p-10 relative">
      <label htmlFor="email" className="block text-6xl text-white font-medium">
        Sign up for our mailing list
      </label>
      <div className="flex gap-12">
        <input
          ref={inputRef}
          type="email"
          id="email"
          placeholder="name@company.xyz"
          required
          className="w-[80%] px-10 py-6 rounded-full text-black focus:outline-none placeholder-black text-2xl font-medium"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[10rem] text-white bg-black rounded-full text-3xl hover:bg-[#FF4201]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
