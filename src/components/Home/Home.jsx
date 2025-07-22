import { useEffect, useState } from "react";
import Testimonials from "../testimonials/Testimonials";
import GetData from "../util/GetData";

function Home() {
    const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  const fetchTestimonials = async () => {
    const response = await GetData("testimonials");
    setTestimonials(response);
  };
  fetchTestimonials();
}, []);

  return (
    <div>
      <div><Testimonials testimonials={testimonials}/></div>
    </div>
  );
}

export default Home
