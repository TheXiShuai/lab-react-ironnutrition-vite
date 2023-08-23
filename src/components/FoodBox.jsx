import React from "react";

function FoodBox(props) {
  const { id, name, image, calories, servings } = props.food;

  const handleDelete = () => {
    props.onDelete(id);
  };

  return (
    <div className="FoodBox">
      <p>{name}</p>
      <img src={image} alt={name} />

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} kcal</b>
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;
