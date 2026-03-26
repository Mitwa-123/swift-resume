  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import SignIn from "./components/Pages/signIn";
  import SignUp from "./components/Pages/signUp";
  import ForgotPassword from "./components/Pages/forgotPassword";
  import Home from "./components/Pages/home";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
