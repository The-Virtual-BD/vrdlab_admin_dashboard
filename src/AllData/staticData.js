import { AiFillHome } from "react-icons/ai";
import {
	BsFileTextFill,
	BsFillPersonFill,
	BsHeartPulseFill,
} from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";

export const sidebarMenu = [
	{
		id: 1,
		name: "Overview",
		icon: <AiFillHome />,
		path: "/admin-dashboard/dashboard",
	},
	{
		id: 2,
		name: "Projects",
		icon: <BsHeartPulseFill />,
		path: "/admin-dashboard/projects",
	},
	{
		id: 3,
		name: "Publications",
		icon: <FaRegNewspaper />,
		path: "/admin-dashboard/publications",
	},
	{
		id: 4,
		name: "News",
		icon: <BsFileTextFill />,
		path: "/admin-dashboard/news",
	},
	{
		id: 5,
		name: "Researchers",
		icon: <BsFillPersonFill />,
		path: "/admin-dashboard/teams",
	},
	{
		id: 5,
		name: "Articales",
		icon: <BsFillPersonFill />,
		path: "/admin-dashboard/articale",
	},
];
