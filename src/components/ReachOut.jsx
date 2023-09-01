import React, { useState } from "react";
import Button from "./Button";
import validateEmail from "../HelperMethods/EmailValidator";
function ReachOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const isValid = validateEmail(email);
    if (!email) {
      setError("Please fill this field");
    } else if (!isValid) {
      setError("Please enter a valid Email Address");
    } else {
      setError("");
      window.location = `mailto:adilwahed@gmail.com?subject=${name}&body=${message}`;
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center py-20">
      <p className="text-white text-6xl font-mono">Reach Out!</p>
      <div className="pt-10">
        <div>
          <form
            className="lg:w-[27rem] sm:w-48 space-y-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col ">
              <label className="font-medium pb-2 text-sm">N A M E</label>
              <input
                className="bg-[#525252] h-12 rounded-md p-3 border border-grey focus:bg-black hover:bg-black focus:outline-none focus:border-purple"
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium pb-2 text-sm">
                E M A I L
              </label>
              <input
                className={` h-12 bg-[#525252] border-2 rounded-md p-3 outline-none focus:bg-black hover:bg-black focus:border focus:outline-none focus:border-purple ${
                  error ? "border-[#ff0000]" : "border-grey"
                }`}
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="text-sm pt-2 pl-1 text-[#ff0000]">{error}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-medium pb-2 text-sm">M E S S A G E</label>
              <textarea
                className="bg-[#525252] h-28 rounded-md p-3 border border-grey focus:bg-black hover:bg-black focus:outline-none focus:border-purple placeholder-white"
                name="message"
                id="message"
                placeholder="Write your message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div
              onClick={() => handleSubmit()}
              className="bg-transparent border-2 rounded-[50px] p-4 self-stretch text-sm font-medium text-center tracking-[1px] cursor-pointer hover:bg-white hover:text-black "
            >
              Send Mail
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReachOut;
