import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const Card = ({ item }) => {
  let arrow, color;
  if (item.percentage > 0) {
    arrow = <AiOutlineArrowUp />;
    color = "text-green-600";
  } else {
    arrow = <AiOutlineArrowDown />;
    color = "text-red-600";
  }

  return (
    <div
      key={item.title}
      className="bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg w-62 p-3 rounded-lg flex flex-row gap-4 items-center"
    >
      <button
        type="button"
        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
        className="text-52 opacity-0.9 rounded-full p-4 hover:drop-shadow-xl w-100 h-100 flex items-center justify-center"
      >
        {item.icon}
      </button>
      <div className="flex flex-col">
        <p className="text-11 text-gray-400 ">{item.title}</p>
        <span className="text-xl font-semibold text-gray-800 dark:text-slate-200">
          ${item.amount}
        </span>
        <div className="flex justify-center gap-0.5">
          <button type="button" className={`text-xs ${color}`}>
            {arrow}
          </button>
          <h1 className={`text-11 ${color} font-bold`}>
            {Math.abs(item.percentage)}%
          </h1>
          <h1 className="text-11 tracking-tight">this month</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
