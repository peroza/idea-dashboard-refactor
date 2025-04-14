import React, { useEffect, useState } from "react";
import { fetchUsers, fetchProjects } from "../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const [usersData, projectsData] = await Promise.all([
          fetchUsers(),
          fetchProjects(),
        ]);
        setUsers(usersData);
        setProjects(projectsData);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <p>Loading...</p>}
      <h3>Users</h3>
      <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
      <h3>Projects</h3>
      <ul>{projects.map((project) => <li key={project.id}>{project.name}</li>)}</ul>
    </div>
  );
};

export default Dashboard;
