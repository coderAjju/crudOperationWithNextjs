import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const page = () => {
  return <div className="max-w-3xl mx-auto mt-3">
      <div className="p-4 bg-gray-300 font-bold flex justify-between justify-center" >
          <input disabled type="text" value="Hello guys" className=" bg-transparent" />
          <div className="flex gap-1 text-xl">
            <FaEdit className=" text-red-600"/>
            <MdDelete/>
          </div>
      </div>
  </div>

}

export default page;
