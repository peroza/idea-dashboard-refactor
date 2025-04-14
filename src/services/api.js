const MOCK_USERS = [
    { id: 1, name: "Amina Hassan" },
    { id: 2, name: "Luis Fernández" },
    { id: 3, name: "Elena Rossi" },
  ];
  
  const MOCK_PROJECTS = [
    { id: 1, name: "Resilience Boost Initiative" },
    { id: 2, name: "Crop Monitoring Pilot" },
    { id: 3, name: "Emergency Relief Deployment" },
  ];
  
  const simulateFetch = (data, shouldFail = false, delay = 700) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail && Math.random() < 0.2) {
          reject(new Error("Simulated API failure"));
        } else {
          resolve(data);
        }
      }, delay);
    });
  };
  
  export const fetchUsers = () => simulateFetch(MOCK_USERS);
  export const fetchProjects = () => simulateFetch(MOCK_PROJECTS);
  