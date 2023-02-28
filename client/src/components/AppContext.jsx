import React from "react";

export const AppContext = React.createContext();

function AppProvider({ children }) {
  return (
    <AppContext.Provider >
      {children}
    </AppContext.Provider>
  );
}