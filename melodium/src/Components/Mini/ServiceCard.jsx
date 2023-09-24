import React, { useEffect, useRef } from "react";
import "./ServiceCard.css";

export const ServiceCard = ({ imgsource, title }) => {
  const serviceCardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceCardRef.current.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (serviceCardRef.current) {
      observer.observe(serviceCardRef.current);
    }

    return () => {
      if (serviceCardRef.current) {
        observer.unobserve(serviceCardRef.current);
      }
    };
  }, []);

  return (
    <div className={`servicecardcontainer`} ref={serviceCardRef}>
      <img src={imgsource} className="service1" alt={title} />
      <div className="servicetitle">
        <h1>{title}</h1>
      </div>
      <div className="knowmore">
        <h1>Know More</h1>
      </div>
    </div>
  );
};

export default ServiceCard;
