import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

// // App.js

// // Recursive component to render key-value pairs
// const DBData = ({ data, level = 0 }) => {
//   return (
//     <ul style={{ paddingLeft: (level + 1) * 20 }}> {/* Indentation for nested levels */}
//       {Object.entries(data).map(([key, value]) => (
//         <li key={key}>
//           <strong>{key}:</strong>
//           {typeof value === 'object' && value !== null ? (
//             // If value is an object, recursively render it
//             <DBData data={value} level={level + 1} />
//           ) : (
//             // Otherwise, render the value directly
//             <span style={{ marginLeft: 10 }}>{value.toString()}</span>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Initialize the Firebase database with the provided configuration

//     // Reference to the specific collection in the database
//     const collectionRef = ref(database, "Users");


//     // Function to fetch data from the database
//     const fetchData = () => {
//       // Listen for changes in the collection
//       onValue(collectionRef, (snapshot) => {
//         const dataItem = snapshot.val();

//         // Check if dataItem exists
//         if (dataItem) {
//           // Convert the object values into an array
//           setData(dataItem);
//         }
//       });
//     };

//     // Fetch data when the component mounts
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from database:</h1>
//       <DBData data={data}></DBData>
//     </div>
//   );
// }

// export default App;

import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;