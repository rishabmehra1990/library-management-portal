export const fetchData = async (resource) => {
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

export const postData = async (resource, data) => {
  try {
    const response = await fetch(`http://localhost:4000/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`Failed to post to ${resource}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error posting to ${resource}:`, error);
    throw error;
  }
};
