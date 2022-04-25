import {
  AccessTimeOutlined,
  FavoriteOutlined,
  Circle
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "mui-image";
import React, { useState, useEffect } from 'react';
import { getRecipeById} from "../hooks/apihooks";

const CCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
}));

const RecipeSingle = () => {
  const [Recipe, setData] = useState({ recipes: [] });

  useEffect(()=> {
    const fetchData = async () => {
    const result = await getRecipeById();
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
          <Grid item xs={14} sm={13} md={7} lg={7}>
            <CCard
              elevation={15}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                minWidth: "450px",
                maxWidth: "900px",
              }}
            >
              <Image
                src=""
                easing="linear"
                fit="cover"
                height={250}
                bgColor="grey"
              />
              <Box display="inline-flex">
                <Box width="70%">
                  <Typography
                    variant="h5"
                    textAlign="left"
                    margin="7px 9px"
                    flexGrow={2}
                    sx={{ fontStyle: "italic" }}
                  >
                   {Recipe.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      marginLeft: "0px",
                      backgroundColor: "#2c2c2c",
                      borderRadius: "0px 20px 20px 0px",
                      padding: "10%",
                      height: "calc(100% - 2.5rem)",
                    }}
                  >                    
                    {Recipe.description}
                  </Typography>
                </Box>
                <Box width="40%">
                  <Typography
                    sx={{ mt: 4, mb: 2 }}
                    variant="h6"
                    component="div"
                  >
                    Ingredients:
                  </Typography>
                  <List dense>
                  {
                  Recipe.ingredients.map(ingredient => (
                    <ListItem key={ingredient}>
                      <ListItemIcon>
                        <Circle fontSize='2px' 
                          sx={{ fill: "#FFF", color: "#FFF" }}
                        />
                      </ListItemIcon>
                      <ListItemText>{ingredient}</ListItemText>
                    </ListItem> )
                    )
                  }
                  </List>
                </Box>
              </Box>
              <Box
                textAlign="center"
                display="inline-flex"
                gap="5px"
                alignItems="center"
                justifyContent="center"
                alignSelf="flex-end"
                margin="15px 0px"
                width="100%"
              >
                <CardActions>
                  <Button variant="contained" color="error">
                    <FavoriteOutlined />
                    Favorite
                  </Button>
                </CardActions>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#2c2e27",
                    height: "37px",
                    padding: "0px 14px",
                    borderRadius: "4px",
                  }}
                >
                  <AccessTimeOutlined sx={{ marginRight: "7px" }} />
                  <Box component="span" sx={{ fontFamily: "monospace" }}>
                    1h 10 min
                  </Box>
                </Box>
              </Box>
            </CCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeSingle;
