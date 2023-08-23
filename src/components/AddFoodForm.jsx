import React, { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings
    };

    props.createFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Calories:</label>
      <input
        type="number"
        name="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <label>Servings:</label>
      <input
        type="number"
        name="servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
