import { Route, Routes } from "react-router-dom";
import PersonController from "./module/person/controller/PersonController";

export default function MainRoute() {
  return (
    <Routes> 
      <Route path="/person" element={<PersonController />} />
    </Routes>
  );
}