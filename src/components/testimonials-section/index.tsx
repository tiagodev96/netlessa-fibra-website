"use client";

import TestimonialHeader from "./TestimonialHeader";
import TestimonialCarousel from "./TestimonialCarousel";

type TestimonialsSectionProps = {
  id: string;
  title: string;
  description: string;
  user_testimonials: {
    rating: number;
    name: string;
    comment: string;
    neighbourhood: string;
    avatar: {
      id: string;
      url: string;
      alt: string;
    };
  }[];
};

export default function TestimonialsSection(props: TestimonialsSectionProps) {
  const { title, description, user_testimonials } = props;

  return (
    <section className="bg-light-green">
      <div className="py-24">
        <div className="section-container">
          <TestimonialHeader title={title} description={description} />
        </div>
        <TestimonialCarousel user_testimonials={user_testimonials} />
      </div>
    </section>
  );
}
