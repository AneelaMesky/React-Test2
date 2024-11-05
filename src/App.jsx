import { useEffect, useState } from "react";
import { createContext } from "react";

import "./App.css";
import { getUserData } from "./services/userService";
import UserTable from "./components/UserTable";
import { UserContext } from "./components/User";

function App() {
  const [userList, setUserList] = useState([]);
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    getUserData()
      .then((res) => {
        console.log({ res });
        setUserList(res);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <UserContext.Provider value={{ userList, setTheme, theme }}>
      <button onClick={() => setTheme((prev) => (prev == 1 ? 0 : 1))}>
        Switch Theme
      </button>
      <UserTable users={userList} />
    </UserContext.Provider>
  );
}

export default App;
