  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import SignIn from "./components/Pages/signIn";
  import SignUp from "./components/Pages/signUp";
  import Home from "./components/Pages/home";
import CreateAccount from "./components/Pages/createAccount";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
