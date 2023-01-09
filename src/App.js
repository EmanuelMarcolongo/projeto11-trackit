import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Constants/globalStyles.js";
import { UserContext } from "./Constants/userContext";
import { useState } from "react";
import TodayPage from "./Pages/TodayPage/TodayPage.js";
import HistoryPage from "./Pages/HistoryPage/HistoryPage.js";
import SignInPage from "./Pages/SignInPage/SignIn-Page.js";
import SignUpPage from "./Pages/SignUpPage/SignUp-Page.js";
import HabitPage from "./Pages/HabitsPage/HabitsPage.js";


function App() {
  const [userInfo, setUserInfo] = useState({});
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <UserContext.Provider value={{ userInfo, setUserInfo, progress, setProgress }}>
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route
                path="/cadastro"
                element={<SignUpPage />}
              />
            
              <Route
                path="/habitos"
                element={
                  <HabitPage />
                }
              />
              <Route
                path="/hoje"
                element={<TodayPage  />}
              />
              <Route
                path="/historico"
                element={<HistoryPage  />}
              />
            </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
