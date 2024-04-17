import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Storage from "./pages/Storage";
import PhonesAndTablets from "./pages/PhonesAndTablets";
import LaptopsAndDesktops from "./pages/LaptopsAndDesktops";
import Audio from "./pages/Audio";
import Accessories from "./pages/Accessories";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/forgot-password" element={< ForgotPassword/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/audio" element={< Audio/>} />
        <Route path="/laptops-and-desktops" element={< LaptopsAndDesktops/>} />
        <Route path="/phones-and-tablets" element={< PhonesAndTablets/>} />
        <Route path="/storage" element={< Storage/>} />
      </Routes>
    </Router>
  );
}

export default App;
