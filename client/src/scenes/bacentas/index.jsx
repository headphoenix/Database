import React, { useState } from "react";
import "../region/region.scss"
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


const Bacentas = () => {
    const theme = useTheme();
        
  return (
    <Box m="1.5rem 2.5rem">
          <div className="left">
            <h1 className="title">Constituency Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle"></h2>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Campus:</span>
                  <span className="itemValue">
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Assigned Hostel:</span>
                  <span className="itemValue"></span>
                </div>
              </div>
            </div>
          </div>
      <Header title="BACENTAS" subtitle="List of Customers" />
      </Box>
  )
}


export default Bacentas