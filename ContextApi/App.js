import "./App.css";
import { createContext } from "react";
import ChildB from "./ChildB";
import ChildA from "./ChildA";

export const data = createContext();
export const data1 = createContext();

function App() {
  const name = "Imran";
  const gender = "Male";

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildB />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
// export {data};
