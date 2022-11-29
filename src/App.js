import Allmeetups from "./pages/AllmeetupsPage";
import Newmeetups from "./pages/NewmeetupsPage";
import Favourites from "./pages/FavouritePage";
import MainNav from "./components/layout/MainNavigation";
import MainLayout from "./components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNav />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Allmeetups />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/new" element={<Newmeetups />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
