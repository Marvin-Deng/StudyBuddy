import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [studentSearchResults, setStudentSearchResults] = useState([]);
  const [classSearchResults, setClassSearchResults] = useState([]);

  const updateSearchResults = (results, category) => {
    if (category === "Students") {
      setStudentSearchResults(results);
    } else if (category === "Classes") {
      setClassSearchResults(results);
    }
  };

  return (
    <AppContext.Provider
      value={{
        studentSearchResults,
        classSearchResults,
        updateSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
