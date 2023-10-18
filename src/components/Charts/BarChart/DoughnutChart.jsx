import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  const gradientColors = [
    {
      start: "#BD87ED",
      end: "#633BEA",
    },
    {
      start: "#F1EFFC",
      end: "#F1EFFC",
    },
    {
      start: "#ED60AE",
      end: "#F8208C",
    },
  ];

  useEffect(() => {
    const width = 200;
    const height = 200;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "rotate(90)");

    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc()
      .outerRadius((d) => d.data.outerRadius)
      .innerRadius((d) => d.data.innerRadius);

    const g = svg
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    g.append("path")
      .attr("d", arc)
      .style("fill", (d, i) => {
        // Create a unique gradient ID for each arc
        const gradientId = `gradient-${i}`;

        // Define the gradient
        const gradient = svg
          .append("defs")
          .append("linearGradient")
          .attr("id", gradientId)
          .attr("x1", "0%")
          .attr("x2", "0%")
          .attr("y1", "100%")
          .attr("y2", "0%");

        gradient
          .append("stop")
          .attr("offset", "0%")
          .style("stop-color", gradientColors[i].start);

        gradient
          .append("stop")
          .attr("offset", "100%")
          .style("stop-color", gradientColors[i].end);

        return `url(#${gradientId})`;
      });

  }, [data]);

  return (
    <div className="relative">
      <div className="absolute left-16 top-16 p-1 pt-3">
        <div className="flex flex-col justify-center items-center p-0 m-0">
          <div className="text-xl font-bold leading-none">65%</div>
          <div className="text-xs text-gray-600 font-semibold leading-none">Total New</div>
          <div className="text-xs text-gray-600 font-semibold leading-none">Customers</div>
        </div>
      </div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default DoughnutChart;
