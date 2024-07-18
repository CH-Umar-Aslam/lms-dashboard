import PopUP from "@/components/PopUP";
import { AttendanceData } from "../../data/AttendanceData";
import React, { useState } from "react";
import { paramsType } from "../../data/AttendanceData";
export default function Assignments() {
  const [popupModal, setPopupModal] = useState<paramsType | null>();
  const showPopupModal = (student: paramsType) => {
    setPopupModal(student);
  };
  const closePopUp = () => {
    setPopupModal(null);
  };
  return (
    <div className="">
      <thead className="bg-blue-50">
        <tr className="grid grid-cols-5 border text-center py-5 gap-32">
          <th className="">Id</th>
          <th className="">Name</th>
          <th className="">Present</th>
          <th className="">Absent</th>
          <th className="">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {AttendanceData?.map((student: paramsType) => (
          <tr
            onClick={() => showPopupModal(student)}
            className="grid grid-cols-5 bg-slate-100 border py-7 text-center cursor-pointer gap-40"
          >
            <td className="">{student.id}</td>
            <td className="">{student.name}</td>
            <td className="">{student.present}</td>
            <td className="">{student.absent}</td>
            <td className="">{student.percentage}%</td>
          </tr>
        ))}
      </tbody>
      <div>
        {popupModal && <PopUP {...popupModal} closePopUp={closePopUp} />}
      </div>
    </div>
  );
}
