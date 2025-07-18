import fetchData from "./api";

const GetTestimonials = async (setTestimonials) => {
  try {
    const data = await fetchData("testimonials");
    setTestimonials(data);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }
};

export default GetTestimonials;
