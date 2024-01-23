import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import MainPage from "./pages/MainPage/MainPage";
// import MyPage from "./pages/MyPage/MyPage";
import { useEffect } from "react";
import MyPage from "./pages/MyPage/MyPage";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="WebAppFrame">
      <div className="Frame">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<StartPage />} />
            <Route path="/MainPage" element={<MainPage />}></Route>
            <Route path="/MyPage" element={<MyPage />}></Route>
            <Route path="/ProfileEdit" element={<ProfileEdit />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
