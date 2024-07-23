export const AttendanceData = [
	{
		id: "1",
		name: "Hasnain",
		percentage: "88",
		present: "13",
		absent: "3",
	},
	{
		id: "2",
		name: "Raza",
		percentage: "96",
		present: "15",
		absent: "1",
	},
	{
		id: "3",
		name: "Ali",
		percentage: "92",
		present: "12",
		absent: "2",
	},
	{
		id: "4",
		name: "Ahmed",
		percentage: "96",
		present: "15",
		absent: "1",
	},
	{
		id: "5",
		name: "Adil",
		percentage: "84",
		present: "12",
		absent: "4",
	},
];

export interface paramsType {
	name: string;
	title: string;
	dueDate: string;
	status: string;
	id: string;
	percentage: string;
	absent: string;
	present: string;
	closePopUp?: () => void;
}
