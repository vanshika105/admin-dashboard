import Bar from "./Bar";

const BarChart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="flex items-center gap-3 justify-center h-60">
      {props.dataPoints.map((dataPoint) => (
        <Bar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default BarChart;
