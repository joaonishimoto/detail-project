'use client'
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mainContent, setMainContent] = useState(1);

  const updateMainContent = (newContent) => {
    setMainContent(mainContent + newContent);
  };

  return (
    <AppContext.Provider value={{ mainContent, updateMainContent }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
