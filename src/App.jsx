import { Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import AllQuestions from "./pages/AllQuestions/AllQuestions";
import axiosBase from "./endPoints/axios";
import PostQuestion from "./components/questions/PostQuestion";
import SingleQuestion from "./pages/singleQuestion/SingleQuestion";
import Outleted from "./outlet/Outlet";
import HomeSignup from "./pages/sign/HomeSignup";
import "./App.css";

const AppStateContext = createContext(null);

export const useAppState = () => useContext(AppStateContext);

function App() {
  const [decode, setDecode] = useState(null);
  const [message, setmessage] = useState({
    success: "",
    waiting: "",
  });

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const headerToken = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await axiosBase?.get("/users/check", {
          ...headerToken,
        });
        setDecode(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };

    if (token) {
      checkUser();
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userid");
    setDecode(null);
  };
  return (
    <AppStateContext.Provider value={{ decode, logout, message, setmessage }}>
      <Routes>
        <Route path="/" element={<Outleted />}>
          <Route path="/" element={<HomeSignup />} />
          <Route path="/all-questions" element={<AllQuestions />} />
          <Route path="/postQuestion" element={<PostQuestion />} />
          <Route
            path="/singleQuestion/:questionid"
            element={<SingleQuestion />}
          />
        </Route>
      </Routes>
    </AppStateContext.Provider>
  );
}

export default App;
