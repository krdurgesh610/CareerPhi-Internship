// import React, { useState } from "react";
// import SignUpForm from "../src/Components/SignUpForm";
// import Profile from "../src/Components/Profile";

// const App = () => {
//   const [userProfile, setUserProfile] = useState(null);

//   const handleSignUp = (profile) => {
//     setUserProfile(profile);
//   };

//   return (
//     <div className="App">
//       {!userProfile ? (
//         <SignUpForm onSubmit={handleSignUp} />
//       ) : (
//         <Profile user={userProfile} />
//       )}
//     </div>
//   );
// };

// export default App;

// 96e6eff76d334eec96c438e0b8f944bd

// ==========================================================================================

import React, { useState } from 'react';
import axios from 'axios';
import SignUpForm from '../src/Components/SignUpForm';
import Profile from '../src/Components/Profile';
import MealRecommendations from '../src/Components/MealRecommendations';

const App = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);
  const API_KEY = '96e6eff76d334eec96c438e0b8f944bd';  // Replace with your Spoonacular API key

  const calculateTDEE = ({ weight, height, age, gender, activityLevel }) => {
    let BMR;
    if (gender === 'male') {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
    }[activityLevel];

    return BMR * activityMultiplier;
  };

  const calculateMacros = (tdee, fitnessGoal) => {
    let protein, carbs, fats;

    switch (fitnessGoal) {
      case 'weightLoss':
        protein = 0.4 * tdee / 4;
        carbs = 0.4 * tdee / 4;
        fats = 0.2 * tdee / 9;
        break;
      case 'muscleGain':
        protein = 0.3 * tdee / 4;
        carbs = 0.5 * tdee / 4;
        fats = 0.2 * tdee / 9;
        break;
      case 'maintenance':
        protein = 0.3 * tdee / 4;
        carbs = 0.4 * tdee / 4;
        fats = 0.3 * tdee / 9;
        break;
      default:
        protein = carbs = fats = 0;
    }

    return { protein, carbs, fats };
  };

  const fetchMealPlan = async (diet, excludeIngredients, tdee, macros) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate`, {
          params: {
            apiKey: API_KEY,
            timeFrame: 'week',
            diet,
            exclude: excludeIngredients.join(','),
            targetCalories: Math.round(tdee),
          }
        });
      setMealPlan(response.data);
    } catch (error) {
      console.error('Error fetching meal plan:', error);
    }
  };

  const handleSignUp = (profile) => {
    const tdee = calculateTDEE(profile);
    const macros = calculateMacros(tdee, profile.fitnessGoal);
    setUserProfile({ ...profile, tdee, macros });

    fetchMealPlan(profile.dietaryPreference, profile.allergies, tdee, macros);
  };

  return (
    <div className="App">
      {!userProfile ? (
        <SignUpForm onSubmit={handleSignUp} />
      ) : (
        <>
          <Profile user={userProfile} />
          {mealPlan && <MealRecommendations mealPlan={mealPlan} />}
        </>
      )}
    </div>
  );
};

export default App;

