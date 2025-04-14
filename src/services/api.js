export const fetchUsers = async () => {
    const res = await fetch("https://api.example.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  };
  
  export const fetchProjects = async () => {
    const res = await fetch("https://api.example.com/projects");
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
  };
  