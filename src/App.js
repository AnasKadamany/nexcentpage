import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero Section/Hero";
import Clients from "./Components/Clients/Clients";
import Benefits from "./Components/Benefits/Benefits";
import Unlock from "./Components/Unlock/Unlock";
import Achievements from "./Components/achievements/achievements";
import Calender from "./Components/Calender/Calender";
import Customer from "./Components/Customer/Customer";
import Community from "./Components/Community/Community";
import Frame from "./Components/Frame/Frame";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Clients />
      <Benefits />
      <Unlock />
      <Achievements />
      <Calender />
      <Customer />
      <Community />
      <Frame />
      <Footer />
    </div>
  );
}

export default App;
