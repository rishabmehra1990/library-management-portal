import { useEffect, useState } from "react";
import Testimonials from "../testimonials/Testimonials";
import GetTestimonials from "../util/GetTestimonials";

function Home() {
    const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    GetTestimonials(setTestimonials);
  }, []);

  return (
    <div>
      <div><Testimonials testimonials={testimonials}/></div>
    </div>
  );
}

export default Home
