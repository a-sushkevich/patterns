// Presentational
function UserList({ users }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

// Container
function UserListContainer() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  return <UserList users={users} />;
}
