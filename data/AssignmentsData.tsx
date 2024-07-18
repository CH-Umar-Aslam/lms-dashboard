export const AssignmentsData = [
  {
    id: "1",
    name: "Hasnain",
    title: "Assignment 1",
    status: "Pending",
    dueDate: "6-18-2023",
  },
  {
    id: "2",
    name: "Raza",
    title: "Assignment 2",
    status: "Submitted",
    dueDate: "6-17-2023",
  },
  {
    id: "3",
    name: "Ali",
    title: "Assignment 3",
    status: "Pending",
    dueDate: "6-19-2023",
  },
  {
    id: "4",
    name: "Ahmed",
    title: "Assignment 4",
    status: "Pending",
    dueDate: "6-20-2023",
  },
  {
    id: "5",
    name: "Adil",
    title: "Assignment 5",
    status: "Submitted",
    dueDate: "6-20-2023",
  },
];

export interface paramsType {
  id: string;
  name: string;
  title: string;
  status: string;
  dueDate: string;
  closePopUp?: () => void;
}
