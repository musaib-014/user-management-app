import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <h1>User Management</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/users/:id"
          element={
            <ErrorBoundary>
              <UserDetails />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
