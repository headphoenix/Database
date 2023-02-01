import React, { useContext, useState } from "react";
import "../region/region.scss";
import "./index.styles.scss";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetRegionsQuery } from "../../state/api";
import { Link } from "react-router-dom";
import { DataContext } from "context/chart/chart.context";
import MyResponsiveLine from "./chart.component";

const Bacentas = () => {
  const theme = useTheme();
  const { data } = useContext(DataContext);

  return (
    <Box m="1.5rem 2.5rem">
      <h1 className="title">Constituency Information</h1>
      <div className="box-container">
        <div className="box">
          <div className="left">
            <div className="item">
              <div className="image">
                <img
                  src={require("../../pexels-pixabay-415829.jpg")}
                  alt=""
                  className="itemImg"
                />
              </div>
              <div className="details">
                <Header title="BACENTAS" subtitle="List of Customers" />
                <h2 className="itemTitle"></h2>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Campus:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Assigned Hostel:</span>
                  <span className="itemValue"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <div className="chart"> */}
              <MyResponsiveLine data={data} />
            {/* </div> */}
          
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Bacentas;
