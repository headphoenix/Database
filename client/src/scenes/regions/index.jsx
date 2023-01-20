import React, { useState } from "react";
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

const Region = ({
  _id,
  name,
  leader,
  totalMembers,
  description,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {leader}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body1">{totalMembers} Members</Typography>
      </CardContent>
    </Card>
  );
};

const Regions = () => {
  const { data, isLoading } = useGetRegionsQuery();
  console.log(data);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="REGIONS" subtitle="See the various Regions" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              leader,
              totalMembers,
              description,
            }) => (
              <Link to="/bacentas" state={{ _id,
                name,
                leader,
                totalMembers,
                description,
                }}>
              <Region
                key={_id}
                _id={_id}
                name={name}
                leader={leader}
                totalMembers={totalMembers}
                description={description}
              />
              </Link>
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Regions;