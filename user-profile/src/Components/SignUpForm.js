// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const SignUpForm = ({ onSubmit }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [allergies, setAllergies] = useState([]);

//   const handleAllergyChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setAllergies([...allergies, value]);
//     } else {
//       setAllergies(allergies.filter((allergy) => allergy !== value));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit((data) => onSubmit({ ...data, allergies }))}>
//       <h2>Sign Up</h2>

//       <label>Name:</label>
//       <input {...register("name", { required: "Name is required" })} />
//       {errors.name && <span>{errors.name.message}</span>}

//       <label>Email:</label>
//       <input
//         type="email"
//         {...register("email", { required: "Email is required" })}
//       />
//       {errors.email && <span>{errors.email.message}</span>}

//       <label>Dietary Preferences:</label>
//       <select
//         {...register("dietaryPreference", {
//           required: "Please select a dietary preference",
//         })}
//       >
//         <option value="">Select one</option>
//         <option value="vegetarian">Vegetarian</option>
//         <option value="vegan">Vegan</option>
//         <option value="keto">Keto</option>
//         <option value="paleo">Paleo</option>
//       </select>
//       {errors.dietaryPreference && (
//         <span>{errors.dietaryPreference.message}</span>
//       )}

//       <label>Fitness Goals:</label>
//       <select
//         {...register("fitnessGoal", {
//           required: "Please select a fitness goal",
//         })}
//       >
//         <option value="">Select one</option>
//         <option value="weightLoss">Weight Loss</option>
//         <option value="muscleGain">Muscle Gain</option>
//         <option value="maintenance">Maintenance</option>
//       </select>
//       {errors.fitnessGoal && <span>{errors.fitnessGoal.message}</span>}

//       <label>Allergies:</label>
//       <div>
//         <input type="checkbox" value="Peanuts" onChange={handleAllergyChange} />{" "}
//         Peanuts
//         <input
//           type="checkbox"
//           value="Dairy"
//           onChange={handleAllergyChange}
//         />{" "}
//         Dairy
//         <input
//           type="checkbox"
//           value="Gluten"
//           onChange={handleAllergyChange}
//         />{" "}
//         Gluten
//         <input type="checkbox" value="Soy" onChange={handleAllergyChange} /> Soy
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignUpForm;

// ====================================================================================

/*
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [allergies, setAllergies] = useState([]);

  const handleAllergyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAllergies([...allergies, value]);
    } else {
      setAllergies(allergies.filter((allergy) => allergy !== value));
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ ...data, allergies }))}>
      <h2>Sign Up</h2>

      <label>Name:</label>
      <input {...register('name', { required: 'Name is required' })} />
      {errors.name && <span>{errors.name.message}</span>}

      <label>Email:</label>
      <input type="email" {...register('email', { required: 'Email is required' })} />
      {errors.email && <span>{errors.email.message}</span>}

      <label>Dietary Preferences:</label>
      <select {...register('dietaryPreference', { required: 'Please select a dietary preference' })}>
        <option value="">Select one</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="keto">Keto</option>
        <option value="paleo">Paleo</option>
      </select>
      {errors.dietaryPreference && <span>{errors.dietaryPreference.message}</span>}

      <label>Fitness Goals:</label>
      <select {...register('fitnessGoal', { required: 'Please select a fitness goal' })}>
        <option value="">Select one</option>
        <option value="weightLoss">Weight Loss</option>
        <option value="muscleGain">Muscle Gain</option>
        <option value="maintenance">Maintenance</option>
      </select>
      {errors.fitnessGoal && <span>{errors.fitnessGoal.message}</span>}

      <label>Allergies:</label>
      <div>
        <input type="checkbox" value="Peanuts" onChange={handleAllergyChange} /> Peanuts
        <input type="checkbox" value="Dairy" onChange={handleAllergyChange} /> Dairy
        <input type="checkbox" value="Gluten" onChange={handleAllergyChange} /> Gluten
        <input type="checkbox" value="Soy" onChange={handleAllergyChange} /> Soy
      </div>

      <label>Preferred Daily Caloric Intake (optional):</label>
      <input
        type="number"
        {...register('calories', {
          valueAsNumber: true,
          min: { value: 1000, message: 'Minimum value is 1000' },
          max: { value: 5000, message: 'Maximum value is 5000' }
        })}
        placeholder="e.g. 2000"
      />
      {errors.calories && <span>{errors.calories.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;

*/

// =============================================================================================

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [allergies, setAllergies] = useState([]);

  const handleAllergyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAllergies([...allergies, value]);
    } else {
      setAllergies(allergies.filter((allergy) => allergy !== value));
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ ...data, allergies }))}>
      <h2>Sign Up</h2>

      <label>Name:</label>
      <input {...register('name', { required: 'Name is required' })} />
      {errors.name && <span>{errors.name.message}</span>}

      <label>Email:</label>
      <input type="email" {...register('email', { required: 'Email is required' })} />
      {errors.email && <span>{errors.email.message}</span>}

      <label>Height (cm):</label>
      <input type="number" {...register('height', { required: 'Height is required', valueAsNumber: true })} />
      {errors.height && <span>{errors.height.message}</span>}

      <label>Weight (kg):</label>
      <input type="number" {...register('weight', { required: 'Weight is required', valueAsNumber: true })} />
      {errors.weight && <span>{errors.weight.message}</span>}

      <label>Age:</label>
      <input type="number" {...register('age', { required: 'Age is required', valueAsNumber: true })} />
      {errors.age && <span>{errors.age.message}</span>}

      <label>Gender:</label>
      <select {...register('gender', { required: 'Please select your gender' })}>
        <option value="">Select one</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <span>{errors.gender.message}</span>}

      <label>Activity Level:</label>
      <select {...register('activityLevel', { required: 'Please select an activity level' })}>
        <option value="sedentary">Sedentary</option>
        <option value="light">Light Exercise</option>
        <option value="moderate">Moderate Exercise</option>
        <option value="heavy">Heavy Exercise</option>
      </select>
      {errors.activityLevel && <span>{errors.activityLevel.message}</span>}

      <label>Dietary Preferences:</label>
      <select {...register('dietaryPreference', { required: 'Please select a dietary preference' })}>
        <option value="">Select one</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="keto">Keto</option>
        <option value="paleo">Paleo</option>
      </select>
      {errors.dietaryPreference && <span>{errors.dietaryPreference.message}</span>}

      <label>Fitness Goals:</label>
      <select {...register('fitnessGoal', { required: 'Please select a fitness goal' })}>
        <option value="">Select one</option>
        <option value="weightLoss">Weight Loss</option>
        <option value="muscleGain">Muscle Gain</option>
        <option value="maintenance">Maintenance</option>
      </select>
      {errors.fitnessGoal && <span>{errors.fitnessGoal.message}</span>}

      <label>Allergies:</label>
      <div>
        <input type="checkbox" value="Peanuts" onChange={handleAllergyChange} /> Peanuts
        <input type="checkbox" value="Dairy" onChange={handleAllergyChange} /> Dairy
        <input type="checkbox" value="Gluten" onChange={handleAllergyChange} /> Gluten
        <input type="checkbox" value="Soy" onChange={handleAllergyChange} /> Soy
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;


