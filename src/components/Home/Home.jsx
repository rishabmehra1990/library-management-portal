import { useEffect, useState } from "react";
import Testimonials from "../testimonials/Testimonials";

function Home() {

    const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/testimonials")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Failed to fetch testimonials:", err));
  }, []);

  return (
    <div>
      <div><Testimonials testimonials={testimonials}/></div>
    </div>
  )
}

export default Home
