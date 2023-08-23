import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, { ...newFood, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h1>React IronNutrition</h1>
      <AddFoodForm createFood={addFood} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={deleteFood} />
      ))}
      
      
    </div>
  );
}

export default App;
