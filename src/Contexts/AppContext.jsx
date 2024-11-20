import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

// Create a Context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [playState, setPlayState] = useState(false);

  return (
    <AppContext.Provider value={{ playState, setPlayState }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
