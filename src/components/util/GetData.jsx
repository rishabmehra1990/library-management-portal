import { fetchData } from "./api";

const GetData = async (resource) => {
  try {
    const data = await fetchData(resource);
    return data;
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error);
  }
};

export default GetData;
