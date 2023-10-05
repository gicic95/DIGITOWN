import React, { createContext, useState, useContext } from 'react';

interface MyContextType {
  lastActivePage: number;
  setLastActivePage: (value: number) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: React.ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [lastActivePage, setLastActivePage] = useState(1);

  return (
    <MyContext.Provider value={{ lastActivePage, setLastActivePage }}>
      {children}
    </MyContext.Provider>
  );
};

function useMyContext(): MyContextType {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}

export { MyContext, MyContextProvider, useMyContext };
