import { AccessTimeOutlined } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
}));

const RecipeGrid = () => {
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
          <Grid item xs={14} sm={13} md={7} lg={6}>
            <Item
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                minHeight: "600px",
                minWidth: "350px",
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
              <Typography variant="h5" flexGrow={1}>
                Recipe Name
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
                <span>10 min</span>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={14} sm={13} md={7} lg={6}>
            <Item
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                minHeight: "600px",
                minWidth: "350px",
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
              <Typography variant="h5" flexGrow={1}>
                Recipe Name
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
                <span>10 min</span>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={14} sm={13} md={7} lg={6}>
            <Item
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                minHeight: "600px",
                minWidth: "350px",
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
              <Typography variant="h5" flexGrow={1}>
                Recipe Name
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
                <span>10 min</span>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={14} sm={13} md={7} lg={6}>
            <Item
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                minHeight: "600px",
                minWidth: "350px",
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
              <Typography variant="h5" flexGrow={1}>
                Recipe Name
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
                <span>10 min</span>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeGrid;
