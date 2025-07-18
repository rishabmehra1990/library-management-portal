const fetchData = async (resource) => {
  try {
    const response = await fetch(`http://localhost:4000/${resource}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${resource}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error);
    throw error;
  }
};

export default fetchData
