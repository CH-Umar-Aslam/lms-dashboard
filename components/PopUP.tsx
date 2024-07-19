import React from "react";
import { paramsType } from "@/data/AttendanceData";


export default function PopUP({
  name,
  id,
  title,
  percentage,
  absent,
  present,
  closePopUp,
  status,
  dueDate,
}: paramsType) {
  // console.log(name);

  return (
    <div className="fixed inset-0  bg-black bg-opacity-35">
      <div className=" gap-6 w-[400px] relative top-[22%] opacity-100  bg-white mx-auto py-1 h-auto  rounded-lg text-gray-600 flex justify-center flex-col  border-2   z-20">
        <div className="flex justify-between px-4 text-xl font-bold cursor-pointer">
          <span>Details</span>
          <span onClick={closePopUp}>X</span>
        </div>

        {name && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8 ">
              <span className="font-bold ">Name:</span>
              <span className="">{name}</span>
            </div>
            <hr />
          </div>
        )}
        {title && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8 ">
              <span className="font-bold ">Title:</span>
              <span className="">{title}</span>
            </div>
            <hr />
          </div>
        )}
        {id && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8">
              <span className="font-bold">Id:</span>
              <span>{id}</span>
            </div>
            <hr />{" "}
          </div>
        )}
        {percentage && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8">
              <span className="font-bold">Percentage:</span>
              <span>{percentage}</span>
            </div>
            <hr />{" "}
          </div>
        )}
        {absent && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8 ">
              <span className="font-bold">Absent:</span>
              <span>{absent}</span>
            </div>
            <hr />
          </div>
        )}
        {present && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8">
              <span className="font-bold">Present:</span>
              <span>{present}</span>
            </div>
            <hr />
          </div>
        )}
        {dueDate && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8">
              <span className="font-bold">Due Date:</span>
              <span>{dueDate}</span>
            </div>
            <hr />
          </div>
        )}
        {status && (
          <div>
            <div className=" w-full bg-gray-50 pl-6 p-3 flex justify-between px-8">
              <span className="font-bold">Status:</span>
              <span>{status}</span>
            </div>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* <div className=" mx-auto text-gray-600 w-64 h-auto bg-white z-20">
<h1>Title: {popupModal?.title} </h1>
<ul>
  <li>Name:{popupModal?.name}</li>
  <li>Grade:{popupModal?.grade}</li>
  <li>Id:{popupModal?.id}</li>
  <li>Status:{popupModal?.status}</li>
  <li>Percentage:{popupModal?.percentage}</li>
  <li>Absent{popupModal?.absent}</li>
  <li>Present{popupModal?.present}</li>
</ul> */
}
