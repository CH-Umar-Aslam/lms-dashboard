"use client";
import React, { useEffect, useState } from "react";
import { courseOptions } from "../../../data/cards.data";
import Assignments from "@/pages/courses/Assignments";
import Attendance from "@/pages/courses/Attendance";
import Grades from "@/pages/courses/Grades";
import DetailsPopup from "@/components/PopUP";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updatePage } from "@/lib/store/features/CurrentPage/currentPageSlice";

export default function page() {
  const [currentSidebarTitle, setCurrentSidebarTitle] = useState<string>("2");
  const pageNum = useAppSelector((state) => state.course.value);
  useEffect(() => {
    setCurrentSidebarTitle(pageNum);
  }, [pageNum]);

  const dispatch = useAppDispatch();

  const handleSidebarClick = (id: any) => {
    dispatch(updatePage(id));
    setCurrentSidebarTitle(id);
  };
  const renderSidebarClick = () => {
    switch (currentSidebarTitle) {
      case "1":
        return <p>No data Avaialable for selected field</p>;
      case "2":
        return <Assignments />;
      case "3":
        return <Grades />;
      case "4":
        // console.log("clicked 2 ");
        return <Attendance />;
      case "5":
        return <p>No data Avaialable for selected field</p>;
      case "6":
        return <p>No data Avaialable for selected field</p>;
      case "7":
        return <p>No data Avaialable for selected field</p>;
      case "8":
        return <p>No data Avaialable for selected field</p>;
      case "9":
        return <p>No data Avaialable for selected field</p>;
      default:
        break;
    }
  };

  return (
    <div className="flex  ml-8 mt-20">
      <div className={`w-28  space-y-8 text-lg font-semibold   `}>
        {courseOptions?.map((item) => (
          <p
            className={`${
              currentSidebarTitle === item.id
                ? "text-blue-500 "
                : "text-gray-700"
            }`}
            onClick={() => handleSidebarClick(item.id)}
            key={item.id}
          >
            {item.title}
          </p>
        ))}
      </div>

      <span className="  ml-24  mt-20 w-full ">{renderSidebarClick()}</span>
    </div>
  );
}
