import { paramsType } from "@/data/AssignmentsData";
import { AssignmentsData } from "../../data/AssignmentsData";
import React, { useState } from "react";
import PopUP from "@/components/PopUP";

export default function Assignments() {
  const [popupModal, setPopupModal] = useState<paramsType | null>();
  const showPopupModal = (student: paramsType) => {
    setPopupModal(student);
  };
  const closePopUp = () => {
    setPopupModal(null);
  };
  return (
    <div>
      <table className="">
        <thead className="bg-blue-50">
          <tr className="grid grid-cols-5 border text-center py-5 gap-32">
            <th className="">Id</th>
            <th className="">Name</th>
            <th className="">Title</th>
            <th className="">Due Date</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody>
          {AssignmentsData?.map((assignment) => (
            <tr
              key={assignment.id}
              onClick={() => showPopupModal(assignment)}
              className="grid grid-cols-5 bg-slate-100 border py-7 text-center  gap-40"
            >
              <td className="">{assignment.id}</td>
              <td className="">{assignment.name}</td>
              <td className="">{assignment.title}</td>
              <td className="">{assignment.dueDate}</td>
              <td className="">{assignment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {popupModal && <PopUP {...popupModal} closePopUp={closePopUp} />}
      </div>
    </div>
  );
}
