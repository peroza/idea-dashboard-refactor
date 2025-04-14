import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchProjects } from "../services/api";

const Dashboard = () => {
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const loading = usersLoading || projectsLoading;
  const error = usersError || projectsError;

  const userList = useMemo(() => {
    return users ?? [];
  }, [users]);
  
  const projectList = useMemo(() => {
    return projects ?? [];
  }, [projects]);

  return (
    <div>
        <h2>Dashboard</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading data.</p>}

        <h3>Users</h3>
        <ul>
            {userList.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

        <h3>Projects</h3>
        <ul>
            {projectList.map((project) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
    </div>
  );
};

export default Dashboard;
