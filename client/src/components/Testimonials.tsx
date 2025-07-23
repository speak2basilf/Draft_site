import React from "react";

const testimonials = [
  {
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "CliniGlobal's Clinical Research program was a game-changer for my career. The faculty were exceptional, and the practical exposure prepared me perfectly for my role as a CRA.",
    name: "Akhila",
    role: "Clinical Research Manager",
    company: "Pfizer India",
    rating: 5,
  },
  {
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The comprehensive Clinical SAS curriculum and hands-on training gave me the confidence to excel in statistical programming. Got a 250% salary hike at Novartis.",
    name: "Vikram ",
    role: "Clinical SAS Programmer",
    company: "Novartis",
    rating: 5,
  },
  {
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "From a complete beginner to working at J&J - this journey was made possible by CliniGlobal. The Bioinformatics program and expert mentorship made all the difference.",
    name: "Meera",
    role: "Bioinformatics Specialist",
    company: "Johnson & Johnson",
    rating: 5,
  },
  {
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The AI & ML in Healthcare program at CliniGlobal is unmatched. The real-world projects and case studies prepared me perfectly for my role at Roche.",
    name: "Rajesh Kumar",
    role: "AI & ML Healthcare Specialist",
    company: "Roche",
    rating: 5,
  },
  {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The MBA in Healthcare Management program provided excellent technical training and leadership skills development. Secured a management role at GSK.",
    name: "Rani Devi",
    role: "Healthcare Operations Manager",
    company: "GSK",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Hear from Our Alumni
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-600">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.testimonial}"</p>
              <div className="text-yellow-500">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
