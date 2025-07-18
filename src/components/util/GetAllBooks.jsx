import fetchData from "./api";

const GetAllBooks = async (setProducts) => {
  try {
    const data = await fetchData("Books");
    setProducts(data);
  } catch (error) {
    console.error("Error fetching Books:", error);
  }
};

export default GetAllBooks;
