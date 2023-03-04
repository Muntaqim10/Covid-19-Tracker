import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../styles/InfoContainer.css';

function InfoContainer({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoContainer ${active && "infoContainer--selected"} ${
        isRed && "infoContainer--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoContainer__cases ${!isRed && "infoContainer__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoContainer__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoContainer;