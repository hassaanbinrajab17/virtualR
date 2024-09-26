import React from "react";
import image1 from "../assets/user1.jpg";
import image2 from "../assets/user2.jpg";
import image3 from "../assets/user3.jpg";
import image4 from "../assets/user4.jpg";
import image5 from "../assets/user5.jpg";
import image6 from "../assets/user6.jpg";

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: image1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: image2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: image3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: image4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: image5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: image6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="mt-20 ">
        <h2 className="text-3xl sm:text-5xl lg:6xl text-center my-10 lg:my-20">
          What people are saying
        </h2>
        <div className="flex flex-wrap justify-center ">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                  <p>{testimonial.text}</p>  
                  <div className="flex mt-8 items-start">
                    <img
                      className="h-12 w-12 mr-6 border border-neutral-300 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.user}
                    />
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
