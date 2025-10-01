import React, { useEffect, useState } from "react";
import { getUsers, createUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Erro ao carregar usuários:", err);
    }
  };

  const handleAddUser = async () => {
    if (!name) return;
    try {
      await createUser(name);
      setName("");
      loadUsers();
    } catch (err) {
      console.error("Erro ao adicionar usuário:", err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Frontend React + Spring Boot API</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Digite um nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddUser} style={{ marginLeft: "0.5rem" }}>
          Adicionar
        </button>
      </div>

      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;