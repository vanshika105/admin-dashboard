const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  const currentMonth = months[d.getMonth()];

  return (
    <div className="flex h-full flex-col items-center gap-1 md:gap-4">
      <div className="h-full w-4 md:w-11 rounded-xl flex flex-col justify-end">
          <div
            className={`w-full rounded-xl hover:bg-barColor hover:drop-shadow-xl transition duration-300 ${
              props.label === currentMonth ? "bg-barColor" : "bg-lightPurple"
            }`}
            style={{ height: barFillHeight, color: "#5A32EA" }}
          ></div>
      </div>
      <div className=" text-9 md:text-xs font-semibold text-center text-gray-600">
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
