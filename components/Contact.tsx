import React from 'react';
import SectionWrapper from './SectionWrapper';
const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" className="w-full p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" className="w-full p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea id="message" className="w-full p-2"></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-700 rounded hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
    </SectionWrapper>
  );
};

export default Contact;
