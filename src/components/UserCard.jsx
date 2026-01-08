import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <li>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  );
}

export default UserCard;
