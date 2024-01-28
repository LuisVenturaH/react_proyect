import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      setUsers(users);
    }
    fetchData();
  }, []);

  return (
    <div>
      {users ? (
        users.data.map((user) => <p key={user.id}>{user.first_name}</p>)
      ) : (
        <p>Cargando usuarios...</p>
      )}
    </div>
  );
}
