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
    <div className="flex h-auto w-full flex-col items-center justify-center py-20">
      <p className="font-mono text-4xl text-white md:text-6xl">Reach Out!</p>
      <div className="pt-10">
        <div>
          <form
            className="space-y-7 sm:w-48 lg:w-[27rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col ">
              <label htmlFor="name" className="pb-2 text-sm font-medium">
                N A M E
              </label>
              <input
                className="h-12 rounded-md border border-grey bg-[#525252] p-3 hover:bg-black focus:border-purple focus:bg-black focus:outline-none"
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                autoComplete="on"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="pb-2 text-sm font-medium">
                E M A I L
              </label>
              <input
                className={` h-12 rounded-md border-2 bg-[#525252] p-3 outline-none hover:bg-black focus:border focus:border-purple focus:bg-black focus:outline-none ${
                  error ? "border-[#ff0000]" : "border-grey"
                }`}
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="on"
              />
              <div className="pl-1 pt-2 text-sm text-[#ff0000]">{error}</div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="pb-2 text-sm font-medium">
                M E S S A G E
              </label>
              <textarea
                className="h-28 rounded-md border border-grey bg-[#525252] p-3 placeholder-white hover:bg-black focus:border-purple focus:bg-black focus:outline-none"
                name="message"
                id="message"
                placeholder="Write your message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div
              onClick={() => handleSubmit()}
              className="cursor-pointer self-stretch rounded-[50px] border-2 bg-transparent p-4 text-center text-sm font-medium tracking-[1px] hover:bg-white hover:text-black "
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
