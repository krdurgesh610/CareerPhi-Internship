import React from 'react';

const MealRecommendations = ({ mealPlan }) => {
  return (
    <div>
      <h2>Meal Plan for the Week</h2>
      {mealPlan.week && Object.keys(mealPlan.week).map((day) => (
        <div key={day}>
          <h3>{day}</h3>
          {mealPlan.week[day].meals.map((meal) => (
            <div key={meal.id}>
              <h4>{meal.title}</h4>
              <p>Calories: {meal.nutrition.nutrients.find(n => n.name === 'Calories').amount}</p>
              <p>Ready in: {meal.readyInMinutes} minutes</p>
              <p>Servings: {meal.servings}</p>
              <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MealRecommendations;
