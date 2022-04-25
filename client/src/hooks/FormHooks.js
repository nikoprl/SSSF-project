import { useState } from "react";

const useForm = (callback, initState) => {
  const [values, setValues] = useState(initState);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleInputChangeByName = (field, value) => {
    setValues(() => ({
      ...values,
      [field]: value,
    }));
  };

  const handleFileChange = (event) => {
    event.persist();
    console.log(event.target.files);
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.files[0],
    }));
  };

  return {
    values,
    handleSubmit,
    handleInputChange,
    handleFileChange,
    setValues,
    handleInputChangeByName,
  };
};

export default useForm;
