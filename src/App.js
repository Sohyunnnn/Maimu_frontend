import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import CheckTaste from "./pages/CheckTaste/CheckTaste";
import CheckNote from "./pages/CheckNote/CheckNote";
import MyPage from "./pages/MyPage/MyPage";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import WriteNote from "./pages/WriteNote/WriteNote";

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
            <Route path="/DetailPage" element={<DetailPage />}></Route>
            <Route path="/LoadingPage" element={<LoadingPage />}></Route>
            <Route path="/CheckTaste" element={<CheckTaste />}></Route>
            <Route path="/CheckNote" element={<CheckNote />}></Route>
            <Route path="/MyPage" element={<MyPage />}></Route>
            <Route path="/ProfileEdit" element={<ProfileEdit />}></Route>
            <Route path="/Withdrawal" element={<Withdrawal />}></Route>
            <Route path="/WriteNote" element={<WriteNote />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
