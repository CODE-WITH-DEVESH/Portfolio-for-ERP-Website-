import {
  IdCard,
  PenTool,
  Globe,
  Megaphone
} from "lucide-react";

export default function SchoolServices() {

  const services = [
    {
      icon: IdCard,
      title: "School ID Cards",
      desc: "Use our easy ID card creator with ready-made templates and customization options."
    },
    {
      icon: PenTool,
      title: "School Logo Designing",
      desc: "Our experienced designers create unique logos that capture your school’s identity."
    },
    {
      icon: Globe,
      title: "School Website",
      desc: "Build beautiful and user-friendly websites that engage parents and students."
    },
    {
      icon: Megaphone,
      title: "School Branding",
      desc: "We analyze your school’s needs and build a complete branding strategy."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Explore Our Variety of{" "}
          <span className="text-red-500">School Related Services!</span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-3xl mx-auto mt-6">
          We are one of few Indian companies that provide unique and high-quality
          school essential products along with ERP software.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}

        </div>

      </div>

    </section>
  );
}



function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-left">

      <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-500 rounded-lg mb-6">
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

    </div>
  );
}