import { useState } from "react";
import { createContext } from "react";
import CHARTS from '../../chart-data.json'

export const DataContext = createContext({
  data: [],
});
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(CHARTS)
  const value = { data };
  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  );
};
