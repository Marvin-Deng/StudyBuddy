import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <AppContext.Provider value={{ searchResults, updateSearchResults }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
