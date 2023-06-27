import { Route, Routes } from "react-router-dom";
import FetchPersonController from "./controller/FetchPersonController";

export default function PersonRoutes() {
  return (
    <Routes>
      <Route path="/fetch" element={<FetchPersonController />} />
    </Routes>
  )
}