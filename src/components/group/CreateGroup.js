import React from "react";

import groupimage from "../../resources/images/group.jpg";

const CreateGroup = () => {
  return (
    <div className="bg-blue-900 h-screen flex overflow-hidden">
      <div className="bg-gray-100 mx-auto my-20 w-1/4">
        <h1 className="text-center text-blue-900 font-sans font-bold text-4xl py-4">
          {" "}
          Create Group
        </h1>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
             
            >
              Group Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="groupname"
              type="text"
              placeholder="group title"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
             
            >
              Group Description
            </label>
            <textarea
              className="shadow resize appearance-none border  rounded w-full h-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="groupdescription"
              type="text"
              placeholder="Enter Purpose of the group"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            
            >
              Select Users
            </label>
            <select multiple
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Anvesh</option>
              <option>Abhishek</option>
              <option>Mars</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/2 ">
        <img className="object-cover" src={groupimage}></img>
      </div>
    </div>
  );
};

export default CreateGroup;
