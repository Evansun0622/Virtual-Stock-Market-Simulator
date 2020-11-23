import React from "react";
import { Grid, CardContent, Typography, Card } from "@material-ui/core/";
import Title from "../Template/Title";
import styles from "./Search.module.css";
import clsx from "clsx";

const Header = ({ text }) => {
  return (
    <Typography variant="body1" color="inherit" align="center" display="block">
      {text}
    </Typography>
  );
};

const Body = ({ text }) => {
  return (
    <Typography variant="body2" color="inherit" align="center" display="block">
      {text}
    </Typography>
  );
};

const Info = ({stockInfo, price}) => {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        component={Card}
        className={clsx(styles.card, styles.cardBorder)}
      >
        <CardContent>
          <Title>{stockInfo.name}</Title>
          <Typography variant="body2">{stockInfo.description}</Typography>
          <Grid container spacing={3} className={styles.addMargin}>
            <Grid item sm={3} xs={4} className={styles.centerGrid}>
              <div className={styles.information}>
                <Header text={"Stock Symbol:"} />
                <Body text={stockInfo.ticker} />
              </div>
            </Grid>
            <Grid item sm={3} xs={4} className={styles.centerGrid}>
              <div className={styles.information}>
                <Header text={"Current Price:"} />
                <Body text={price} />
              </div>
            </Grid>
            <Grid item sm={3} xs={4} className={styles.centerGrid}>
              <div className={styles.information}>
                <Header text={"Exchange:"} />
                <Body text={stockInfo.exchangeCode} />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Info;
