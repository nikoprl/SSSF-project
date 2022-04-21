import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#FFF",
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
          <Grid item xs={7}>
          <Item sx={{ borderRadius: "16px" }} style={{ minHeight: "600px" }}>
              <Image src="placeholdr.png" height={250} margin="-10px" bgColor="grey" />
              Recipe Placeholder
            </Item>
          </Grid>
          <Grid item xs={7}>
          <Item sx={{ borderRadius: "16px" }} style={{ minHeight: "600px" }}>
              <Image src="placeholdr.png" height={250} bgColor="grey" />
              Recipe Placeholder
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item sx={{ borderRadius: "16px" }} style={{ minHeight: "600px" }}>
              <Image src="placeholdr.png" height={250} bgColor="grey" />
              Recipe Placeholder
            </Item>
          </Grid>
          <Grid item xs={7}>
          <Item sx={{ borderRadius: "16px" }} style={{ minHeight: "600px" }}>
              <Image src="placeholdr.png" height={250} bgColor="grey" />
              Recipe Placeholder
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeGrid;
