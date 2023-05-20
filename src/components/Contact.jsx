import React from "react";

const Contact = () => {
  return (
    <div className="pt-60 bg-[#0a192f]">
      <div
        name="contact"
        className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-10"
      >
        <form
          method="POST"
          action="https://getform.io/f/e44441c0-672b-4823-851c-59aade45287e"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pt-100">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              // Submit the form below or shoot me an email -
              nababshaikh123@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
