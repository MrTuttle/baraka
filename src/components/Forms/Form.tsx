import React from "react";

const Form = () => {
  return (
    <>
      <div className="py-12">
        <div className="grid grid-col-1 gap-6">
          <label className="block">
            <span className="text-gray-700">First Name</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white  focus:ring-0"
              placeholder="type your first name"
            ></input>
          </label>
          <label className="block">
            <span className="text-gray-700">Email adress</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white  focus:ring-0"
              placeholder="john.doe@email.com"
            ></input>
          </label>
          <div>
            <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              Validation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
