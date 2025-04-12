import { testimonials } from "@/lib/data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-50/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            What <span className="text-gradient">Users</span> Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Join thousands of users who have simplified their task management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              rating={testimonial.rating}
              content={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
