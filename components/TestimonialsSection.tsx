import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatarColor?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Client Testimonials",
  subtitle = "What our customers say",
  testimonials,
}) => {
  return (
    <section className="py-20 px-4 bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">&rdquo;{t.message}&rdquo;</p>
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full mr-3 ${
                    t.avatarColor || "bg-blue-200"
                  }`}
                ></div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
