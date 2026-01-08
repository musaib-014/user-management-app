import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to Fetch User");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading user details...</p>;
  if (error)
    return (
      <p>
        Error: {error} <br />
        <Link to="/users">⬅ Back to Users</Link>
      </p>
    );
  if (!user)
    return (
      <p>
        User not found <br /> <Link to="/users">⬅ Back to Users</Link>
      </p>
    );

  console.log(user);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <p>
        <strong>Company:</strong> {user.company?.name}
      </p>

      <Link to="/users">⬅ Back to Users</Link>
    </div>
  );
}

export default UserDetails;
