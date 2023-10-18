import React from "react";
import {TbBox} from 'react-icons/tb';
import { LuUserSquare2, LuBadgePercent, LuLayoutDashboard } from 'react-icons/lu';
import {PiWallet} from "react-icons/pi"
import { RiQuestionnaireLine } from "react-icons/ri";
import { AiOutlineDollar } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import {BsHandbag} from "react-icons/bs";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";

export const links = [
  {
    title: "Dashboard",
    icon: <LuLayoutDashboard size={20}/>,
  },
  {
    title: "Product",
    icon: <TbBox size={20} />,
  },
  {
    title: "Customers",
    icon: <LuUserSquare2 size={20} />,
  },
  {
    title: "Income",
    icon: <PiWallet size={20} />,
  },
  {
    title: "Promote",
    icon: <LuBadgePercent  size={20}/>,
  },
  {
    title: "Help",
    icon: <RiQuestionnaireLine size={20} />,
  },
];

export const earningData = [
  {
    icon: <AiOutlineDollar />,
    amount: "198k",
    percentage: "37.8",
    title: "Earning",
    iconColor: "#00A746",
    iconBg: "#E3FFF0",
  },
  {
    icon: <GoChecklist />,
    amount: "2.4k",
    percentage: "-2",
    title: "Orders",
    iconColor: "#A507FE",
    iconBg: "#E7DBFF",
  },
  {
    icon: <PiWallet />,
    amount: "2.4k",
    percentage: "-2",
    title: "Balance",
    iconColor: "#0558BF",
    iconBg: "#CCF2FF",
  },
  {
    icon: <BsHandbag />,
    amount: "89k",
    percentage: "11",
    title: "Total Sales",
    iconColor: "#D8010F",
    iconBg: "#FECBEC",
  },
];

export const DoughnutChartData = [
  { label: "Last year", value: 35, innerRadius: 50, outerRadius: 80},
  { label: "Last month", value: 45, innerRadius: 55, outerRadius: 75 },
  { label: "Last week", value: 20, innerRadius: 45, outerRadius: 85 },  
];

export const chartDataPoints = [
  { label: "Jan", value: 60 },
  { label: "Feb", value: 40 },
  { label: "Mar", value: 95 },
  { label: "Apr", value: 70 },
  { label: "May", value: 80 },
  { label: "Jun", value: 30 },
  { label: "Jul", value: 83 },
  { label: "Aug", value: 100 },
  { label: "Sep", value: 90 },
  { label: "Oct", value: 75 },
  { label: "Nov", value: 70 },
  { label: "Dec", value: 80 }
];

export const dummyProductData = [
  {
    name: 'Product A',
    image: product1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stock: 32,
    price: 45.99,
    totalSales: 20,
  },
  {
    name: 'Product B',
    image: product2,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stock: 32,
    price: 45.99,
    totalSales: 20,
  },
  {
    name: 'Product C',
    image: product3,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    stock: 75,
    price: 19.99,
    totalSales: 70,
  },
  {
    name: 'Product D',
    image: product4,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    stock: 30,
    price: 39.99,
    totalSales: 50,
  },
  {
    name: 'Product E',
    image: product5,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.',
    stock: 60,
    price: 24.99,
    totalSales: 80,
  },
];
