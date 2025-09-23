import React from "react";
import Marquee from "react-fast-marquee";
import SectionHeading from "./sectionheading";

const Testimonials = () => {
  const data = [
    {
      quote:
        "Working with this developer was an absolute pleasure. The attention to detail and clean code exceeded my expectations.",
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Delivered on time with top-notch quality. Communication was smooth and professional throughout the project.",
      name: "David Martinez",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The UI design and animations were fantastic. My team was impressed with how intuitive and polished everything looked.",
      name: "Emily Carter",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      quote:
        "Went above and beyond to ensure the project met all requirements. Truly a reliable and talented developer.",
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      quote:
        "Creative problem-solving and technical expertise made the project a success. I highly recommend collaborating!",
      name: "Ava Patel",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ];

  return (
    <div className="py-4 my-4 px-4 shadow-section-inset">

    <SectionHeading className="pb-4" delay={0.8}>
      People Love my work
    </SectionHeading>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <Marquee pauseOnHover={true} speed={40} gradient={false} className="py-4">
        
 {data.map((item, idx) => (
          <TestimonialsCard
            key={`testimonials-${idx}`}
            quote={item.quote}
            name={item.name}
            avatar={item.avatar}
          />
        ))}
       
       
      </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialsCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="h-50 shadow-aceternity rounded-xl p-4 mx-4 
    max-w-60 flex flex-col w-full gap-4">
      <p className="text-sm text-neutral-700 ">“{quote}”</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <span className="text-sm  text-neutral-200">{name}</span>
      </div>
    </div>
  );
};
