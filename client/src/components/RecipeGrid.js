import { AccessTimeOutlined } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "mui-image";
import React, { useState, useEffect } from 'react';
import { getRecipes } from "../hooks/apihooks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "#FFF",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  overflow: "hidden",
  minWidth: "350px",
  maxWidth: "900px",
}));

const RecipeGrid = () => {
  const [data, setData] = useState({ recipes: [] });

  useEffect(()=> {
    const fetchData = async () => {
    const result =await getRecipes();
    setData(result);
  };
  fetchData();
} ,[]);

  return (
    <>
      <Box sx={{ mt: 12, mb: 10 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          columns={16}
        >
           {data.recipes.map(recipe => (
          <Grid key={recipe.id} item xs={14} sm={13} md={7} lg={6}>
            <Item elevation={15}>
              <Image
                src=""
                easing="linear"
                fit="cover"
                height={250}
                bgColor="grey"
              />
              <Typography variant="h5" flexGrow={1}>
                {recipe.title}
              </Typography>
              <Box
                textAlign="center"
                display="inline-flex"
                gap="5px"
                alignItems="center"
                alignSelf="flex-end"
                margin="15px"
              >
                <AccessTimeOutlined />
                <span>{recipe.time}</span>
              </Box>
            </Item>
          </Grid>
           ))}
        </Grid>
      </Box>
    </>
  );
};

export default RecipeGrid;
