import { GradesData } from "../../data/GradesData";
import React from "react";

export default function Assignments() {
  return (
    <table className="">
      <thead className="bg-blue-50">
        <tr className="grid grid-cols-5 border text-center py-5 gap-32">
          <th className="">Id</th>
          <th className="">Name</th>
          <th className="">Course</th>
          <th className="">Status</th>
          <th className="">Grade</th>
        </tr>
      </thead>
      <tbody>
        {GradesData?.map((student) => (
          <tr className="grid grid-cols-5 bg-slate-100 border py-7 text-center  gap-40">
            <td className="">{student.id}</td>
            <td className="">{student.name}</td>
            <td className="">{student.course}</td>
            <td className="">{student.status}</td>
            <td className="">{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
