import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users";
function App() {
  return (
    <div>
      <h1>User Management</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
