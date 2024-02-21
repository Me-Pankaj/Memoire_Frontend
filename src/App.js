import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { DarkModeProvider } from "./DarkMode";

function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <DarkModeProvider>
      <Header setSearch={setSearch} setDarkMode={setDarkMode} darkMode={darkMode} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} />
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
