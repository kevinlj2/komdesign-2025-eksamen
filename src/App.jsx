import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ExchangeArticle from "./pages/ExchangeArticle";
import TankArticle from "./pages/TankArticle";
import FutureweekArticle from "./pages/FutureweekArticle";
import ScreenArticle from "./pages/ScreenArticle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="jorda-rundt-studenter-på-utveksling"
          element={<ExchangeArticle />}
        />
        <Route path="stridsvogner-mot-johannes" element={<TankArticle />} />
        <Route
          path="framtidsuka-i-halden-vekker-nysgjerrighet-og-kreativitet"
          element={<FutureweekArticle />}
        />
      </Route>
      <Route
        path="skjerm-for-leggetid-skaper-sovnkrise-vi-ser-en-stille-helseutfordring-vokse-sier-forskere"
        element={<ScreenArticle />}
      />
    </Routes>
  );
}

export default App;
