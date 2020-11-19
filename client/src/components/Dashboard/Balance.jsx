import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { Typography } from "@material-ui/core/";
import Title from "../Template/Title.jsx";
import styles from "./Dashboard.module.css";

const Balance = ({ purchasedStocks }) => {
  const { userData } = useContext(UserContext);
  const [portfolioBalance, setPortfolioBalance] = useState(0);

  useEffect(() => {
    const getPortfolioBalance = () => {
      let total = 0;
      purchasedStocks.forEach((stock) => {
        total += Number(stock.currentPrice) * Number(stock.quantity);
      });
  
      return Math.round((total + Number.EPSILON) * 100) / 100;
    };
    setPortfolioBalance(getPortfolioBalance());
  }, [purchasedStocks]);

  return (
    <React.Fragment>
      {chartData && (
        <div style={{ minHeight: "240px" }}>
          <Title>Explore {chartData.name}'s Stock Chart</Title>
          <LineChart
            pastDataPeriod={chartData.data}
            stockInfo={{ ticker: chartData.ticker }}
            duration={"3 years"}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Balance;
