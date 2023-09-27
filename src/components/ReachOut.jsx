import React, { useRef, useState } from "react";
import Button from "./Button";
import validateEmail from "../HelperMethods/EmailValidator";

import emailjs from "@emailjs/browser";

function ReachOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const form = useRef();

  const handleSubmit = () => {
    const isValid = validateEmail(email);
    if (!email) {
      setError("Please fill this field");
    } else if (!isValid) {
      setError("Please enter a valid Email Address");
    } else {
      setError("");
      setLoader(true);
      emailjs
        .send(
          "service_06p2a2a",
          "template_ikl0led",
          { name: name, email: email, message: message },
          "qZifilyQci7U2Er8W",
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === "OK") setLoader(false);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            setLoader(false);
            setError("Something went wrong try again later");
            setName("");
            setEmail("");
            setMessage("");
          },
        );

      // window.location = `mailto:adilwahed@gmail.com?subject=${name}&body=${message}`;
    }
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center py-20">
      <p className="font-mono text-4xl text-white md:text-6xl">Reach Out!</p>
      <div className="pt-10">
        <div>
          <form
            ref={form}
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
                value={name}
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
                value={email}
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
                value={message}
                placeholder="Write your message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {loader ? (
              <div className="flex w-full items-center justify-center">
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]  text-yellow motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={() => handleSubmit()}
                className="cursor-pointer self-stretch rounded-[50px] border-2 bg-transparent p-4 text-center text-sm font-medium tracking-[1px] hover:bg-white hover:text-black "
              >
                Send Mail
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReachOut;
