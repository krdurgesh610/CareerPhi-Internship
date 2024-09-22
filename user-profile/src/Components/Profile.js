// import React from "react";

// const Profile = ({ user }) => {
//   if (!user) {
//     return <div>No profile created yet</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>
//         <strong>Name:</strong> {user.name}
//       </p>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
//       <p>
//         <strong>Dietary Preference:</strong> {user.dietaryPreference}
//       </p>
//       <p>
//         <strong>Fitness Goal:</strong> {user.fitnessGoal}
//       </p>
//       <p>
//         <strong>Allergies:</strong> {user.allergies.join(", ")}
//       </p>
//     </div>
//   );
// };

// export default Profile;

// =====================================================================================

import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <div>No profile created yet</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Dietary Preference:</strong> {user.dietaryPreference}</p>
      <p><strong>Fitness Goal:</strong> {user.fitnessGoal}</p>
      <p><strong>Allergies:</strong> {user.allergies.join(', ')}</p>
      {user.calories && <p><strong>Preferred Caloric Intake:</strong> {user.calories} kcal</p>}
    </div>
  );
};

export default Profile;

