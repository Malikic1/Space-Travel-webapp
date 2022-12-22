import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Destination from "./pages/DestinationPage";
import Crew from "./pages/CrewPage";
import Technology from "./pages/TechnologyPage";
import MainNavigation from "./layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
