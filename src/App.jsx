import { Routes, Route } from "react-router-dom";

import UserLayout from "./UserLayout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
    </Routes>
  );
}

export default App;
