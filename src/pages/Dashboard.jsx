import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

import {
  Card,
  BarChart,
  MainHeader,
  DoughnutChart,
  ProductTable,
  Dropdown,
  SearchBar,
} from "../components";
import {
  earningData,
  DoughnutChartData,
  dummyProductData,
} from "../data/dummy";
import { chartDataPoints } from "../data/dummy";

const Dashboard = () => {
  const {
    screenSize,
  } = useStateContext();

  return (
    <div className="m-2 md:m-4 md:mx-7">
    <MainHeader />
    <div className="flex flex-wrap lg:flex-nowrap overflow-hidden md:flex-col">
      <div className="flex flex-wrap md:justify-between justify-center lg:gap-0 gap-2 mt-10">
        {earningData.map((item) => (
          <Card item={item} />
        ))}
      </div>

      <div className="flex flex-wrap md:justify-between justify-center mt-10 md:pb-0">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-lg">
          <div className="text-md font-bold pb-1">Overview</div>
          <div className="text-xs text-gray-400">Monthly Earning</div>
          <BarChart dataPoints={chartDataPoints} />
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-lg mt-10 md:m-0">
          <div className="text-md font-bold pb-1">Customers</div>
          <div className="text-xs text-gray-400">
            Customers that buy products
          </div>
          <div className="w-full">
            <div className="shadow-lg rounded-full my-4 mx-5">
              <DoughnutChart data={DoughnutChartData} />
            </div>
          </div>
        </div>
      </div>
      {screenSize>900 && <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-lg mt-10">
        <div className="flex flex-wrap">
          <div className="text-lg font-bold mr-auto">Product Sell</div>
          <div className="mr-6">
            <SearchBar bgColor="bg-gray-50" width="w-36" />
          </div>
          <Dropdown className="ml-auto" />
        </div>
        <ProductTable products={dummyProductData} />
      </div>}
    </div>
    </div>
  );
};

export default Dashboard;
