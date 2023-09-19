import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import "./AddItemForm.css"

function AddItemForm() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "", // Added recipe field
    serve: "", // Added serve field
    type: "snack", // Default to snack, but user can choose drink
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Determine which method to call based on the selected type
      const addItemMethod = formData.type === "snack" ? SnackOrBoozeApi.addSnack : SnackOrBoozeApi.addDrink;

      // Create a new item object with the selected fields
      const newItem = {
        name: formData.name,
        description: formData.description,
        recipe: formData.recipe,
        serve: formData.serve,
      };

      // Send the form data to your API to add the item
      await addItemMethod(newItem);

      // Redirect the user to the menu page for snacks or drinks
      history.push(formData.type === "snack" ? "/snacks" : "/drinks");
    } catch (error) {
      console.error("Error adding item:", error);
      // Handle error and display to the user
    }
  };

  return (
    <div>
      <h2 className="form-h2">Add an Item</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="form-h2" for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-h2" for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-h2"  for="recipe">Recipe</Label>
          <Input
            type="text"
            name="recipe"
            id="recipe"
            value={formData.recipe}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-h2"  for="serve">Serve</Label>
          <Input
            type="text"
            name="serve"
            id="serve"
            value={formData.serve}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-h2"  for="type">Type</Label>
          <Input
            type="select"
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </Input>
        </FormGroup>
        <Button color="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
  );
}

export default AddItemForm;
