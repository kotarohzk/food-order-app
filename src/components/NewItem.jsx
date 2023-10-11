import styled from "@emotion/styled";
import { CheckCircle, CloudUpload } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useItemsContext } from "../store/ItemsProvider";
import { v4 as uuidv4 } from "uuid";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function NewItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState({});
  const { addNewItem } = useItemsContext();

  const validateName = () => {
    return name.length > 0 ? "" : "Name is required";
  };

  const validateDescription = () => {
    if (description.length <= 0) {
      return "Description is required";
    }
    if (description.length > 45) {
      return "maximum length for description is 45 characters";
    }
    return "";
  };

  const validatePrice = () => {
    return price.length <= 0
      ? "Price is required"
      : isNaN(price)
      ? "Price must be a valid number"
      : "";
  };

  const validateFile = () => {};

  const validateForm = () => {
    const results = {
      name: validateName(),
      description: validateDescription(),
      price: validatePrice(),
      file: validateFile(),
    };
    setErrors(results);
    const values = Object.values(results);
    return values.every((value) => Boolean(value) === false);
  };

  return (
    <form noValidate autoComplete="off">
      <Stack justifyContent="center" alignItems="center" gap={2}>
        <TextField
          fullWidth
          variant="filled"
          required
          label="Name"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          multiline
          required
          variant="filled"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={Boolean(errors.description)}
          helperText={errors.description}
        />
        <TextField
          fullWidth
          variant="filled"
          required
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          error={Boolean(errors.price)}
          helperText={errors.price}
        />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
        >
          Upload file
          <VisuallyHiddenInput
            file={file}
            type="file"
            required
            accept="image/*"
            onChange={(e) => {
              const formData = new FormData();
              formData.append("image", e.target.files[0]);
              setFile(formData);
            }}
          />
        </Button>
        {Boolean(file) && <CheckCircle color="success" />}
        <Button
          variant="contained"
          color="success"
          onClick={async () => {
            const success = validateForm();
            if (success) {
              try {
                const response = await fetch(
                  `https://api.imgbb.com/1/upload?key=e4f559281b121de1adc6b05c62051494`,
                  { method: "POST", body: file }
                );
                const data = await response.json();
                console.log(data.data.url);
                addNewItem({
                  name,
                  desc: description,
                  price,
                  image: data.data.url,
                  id: uuidv4(),
                });
                setFile("");
                setPrice("");
                setName("");
                setDescription("");
              } catch (error) {
                console.log(error);
              }
            }
          }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default NewItem;
