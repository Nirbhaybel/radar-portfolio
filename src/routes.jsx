import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Publication from "./pages/Publication";

import Patents from "./pages/patents";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/publications" element={<Publication />} />
      <Route path="/patents" element={<Patents />} />
    </Routes>
  );
}