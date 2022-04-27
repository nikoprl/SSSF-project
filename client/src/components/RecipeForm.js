import * as React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Paper,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, AddPhotoAlternate, Remove } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useForm from "../hooks/FormHooks";
import { createRecipe } from "../hooks/apihooks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#FFF",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const RecipeForm = () => {
  const validators = {
    title: ["required", "minStringLength: 1"],
    description: ["required", "minStringLength:1"],
    ingredient: ["required", "minStringLength: 1"],
    hour: [
      "required",
      "minStringLength: 1",
      "minNumber:-1",
      "maxNumber:99",
      "matchRegexp:^[0-9]$|^[1-9][0-9]$|^(99)$",
    ],
    minutes: [
      "required",
      "minStringLength: 1",
      "minNumber:0",
      "maxNumber:59",
      "matchRegexp:^[0-9]$|^[1-9][0-9]$|^(59)$",
    ],
  };

  const errorMessages = {
    title: ["Required field", "Field can't be empty"],
    description: ["Required field", "Field can't be empty"],
    ingredient: ["Required field", "Field can't be empty"],
    hour: [
      "Required field",
      "Can't be empty",
      "Can't be negative",
      "Can't be over 99",
      "Only numbers allowed",
    ],
    minutes: ["Required field", "Field can't be empty"],
  };

  const createeRecipe = async () => {
    try {
      console.log("Create recipe on submit");
      createRecipe(values);
    } catch (e) {
      console.log(e.message);
    }
  };

  const {
    values,
    handleSubmit,
    handleInputChange,
    handleFileChange,
    setValues,
    handleInputChangeByName,
  } = useForm(createeRecipe, {
    title: "",
    description: "",
    ingredients: [],
    hour: 0,
    minutes: 0,
  });

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...values.ingredients];
    console.log("List", list);
    console.log("deleting", index);
    list.splice(index, 1);
    console.log("List", list);

    setValues((values) => ({
      ...values,
      ingredients: list,
    }));
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    console.log("add");
    const list = [...values.ingredients, ""];
    setValues((values) => ({
      ...values,
      ingredients: list,
    }));

    console.log(values);
  };

  const handleTextBoxInputChange = (e, index) => {
    const { value } = e.target;

    const list = [...values.ingredients];
    list[index] = value;
    setValues((values) => ({
      ...values,
      ingredients: list,
    }));
  };

  return (
    <>
      <Box sx={{ mt: 12, mb: 10 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item xs={1} sm={15} md={7} lg={7}>
            <Item
              elevation={15}
              sx={{ borderRadius: "16px", padding: "60px" }}
              style={{ minHeight: "auto" }}
            >
              <Typography component="h4" variant="h4" gutterBottom>
                Create new
              </Typography>
              <ValidatorForm onSubmit={handleSubmit}>
                <Grid container direction="column">
                  <FormControl
                    sx={{ m: 1, maxWidth: "75ch" }}
                    variant="outlined"
                  >
                    <Button>
                      <AddPhotoAlternate /> Upload image
                    </Button>
                  </FormControl>

                  <Divider
                    flexItem
                    sx={{
                      mt: 2,
                      color: "#c5c5c5",
                      "&::before, &::after": { borderColor: "#505050" },
                    }}
                  >
                    Recipe name
                  </Divider>
                  <FormControl
                    sx={{ m: 1, maxWidth: "75ch" }}
                    variant="outlined"
                    color="white"
                  >
                    <TextValidator
                      sx={{
                        backgroundColor: "#33303e",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      fullWidth
                      id="outlined-title"
                      name="title"
                      label=""
                      onChange={handleInputChange}
                      value={values.title}
                      validators={validators.title}
                      errorMessages={errorMessages.title}
                    />
                  </FormControl>
                  <Divider
                    flexItem
                    sx={{
                      mt: 3,
                      color: "#c5c5c5",
                      "&::before, &::after": { borderColor: "#505050" },
                    }}
                  >
                    Description
                  </Divider>
                  <FormControl
                    sx={{ m: 1, maxWidth: "75ch" }}
                    variant="outlined"
                  >
                    <TextValidator
                      sx={{
                        backgroundColor: "#33303e",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      multiline
                      rows={8}
                      fullWidth
                      id="outlined-description"
                      name="description"
                      label=""
                      onChange={handleInputChange}
                      value={values.description}
                      validators={validators.description}
                      errorMessages={errorMessages.description}
                    />
                  </FormControl>
                  <Divider
                    flexItem
                    sx={{
                      mt: 3,
                      color: "#c5c5c5",
                      "&::before, &::after": { borderColor: "#505050" },
                    }}
                  >
                    Ingredients
                  </Divider>
                  {values.ingredients.map((inc, i) => {
                    return (
                      <FormControl
                        key={i}
                        sx={{ m: 1, width: "75ch" }}
                        variant="outlined"
                      >
                        <TextValidator
                          sx={{
                            backgroundColor: "#33303e",
                            color: "white",
                            borderRadius: "5px",
                          }}
                          fullWidth
                          id="outlined-ingredient"
                          name="ingredient"
                          label="Ingredient"
                          onChange={(e) => handleTextBoxInputChange(e, i)}
                          value={inc}
                          validators={validators.ingredient}
                          errorMessages={errorMessages.ingredient}
                        />
                        <Box
                          sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                          }}
                        >
                          <Tooltip title="Remove" arrow>
                            <Button
                              sx={{
                                minWidth: "unset",
                                height: "25px",
                                width: "25px",
                                mx: 1,
                                my: 2,
                                alignSelf: "center",
                              }}
                              variant="contained"
                              color="error"
                              onClick={handleRemoveClick}
                            >
                              <Remove />
                            </Button>
                          </Tooltip>
                        </Box>
                      </FormControl>
                    );
                  })}
                  <Tooltip title="Add" arrow>
                    <Button
                      sx={{
                        minWidth: "unset",
                        height: "25px",
                        width: "25px",
                        mx: 1,
                        my: 2,
                        alignSelf: "center",
                      }}
                      variant="contained"
                      color="success"
                      onClick={handleAddClick}
                    >
                      <Add />
                    </Button>
                  </Tooltip>
                  <Divider
                    flexItem
                    sx={{
                      mt: 3,
                      color: "#c5c5c5",
                      "&::before, &::after": { borderColor: "#505050" },
                    }}
                  >
                    Prepare time
                  </Divider>
                  <Box>
                    <FormControl
                      sx={{ m: 1, maxWidth: "75ch" }}
                      variant="outlined"
                    >
                      <TextValidator
                        sx={{
                          backgroundColor: "#33303e",
                          color: "white",
                          borderRadius: "5px",
                        }}
                        fullWidth
                        id="outlined-time-hour"
                        name="hour"
                        label=""
                        type="number"
                        onChange={handleInputChange}
                        value={values.hour}
                        validators={validators.hour}
                        errorMessages={errorMessages.hour}
                        InputProps={{ inputProps: { min: 0, max: 23 } }}
                      />
                    </FormControl>
                    <FormControl
                      sx={{ m: 1, maxWidth: "75ch" }}
                      variant="outlined"
                    >
                      <TextValidator
                        sx={{
                          backgroundColor: "#33303e",
                          color: "white",
                          borderRadius: "5px",
                        }}
                        fullWidth
                        id="outlined-time-minute"
                        name="minutes"
                        label=""
                        type="number"
                        onChange={handleInputChange}
                        value={values.minutes}
                        validators={validators.minutes}
                        errorMessages={errorMessages.minutes}
                        InputProps={{ inputProps: { min: 0, max: 59 } }}
                      />
                    </FormControl>
                  </Box>
                  <ColorButton sx={{ mt: 5, mb: 2 }} type="submit">Submit</ColorButton>
                </Grid>
              </ValidatorForm>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeForm;
