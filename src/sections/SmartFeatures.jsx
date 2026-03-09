import {
  ClipboardList,
  Award,
  CheckSquare,
  BookOpen,
  Video,
  ShieldCheck,
  Building,
  LayoutDashboard,
  User
} from "lucide-react";

export default function SmartFeatures() {

  const features = [
    { icon: ClipboardList, title: "Admission Management" },
    { icon: Award, title: "Certificate Creator" },
    { icon: CheckSquare, title: "Attendance Manager" },
    { icon: BookOpen, title: "Homework Manager" },
    { icon: Video, title: "Live Classes" },
    { icon: ShieldCheck, title: "Smart Gatepass" },
    { icon: Building, title: "Institute Setup" },
    { icon: LayoutDashboard, title: "Academic Portal" },
    { icon: User, title: "Admission Manager" },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

          Make your School{" "}
          <span className="text-red-500">100% Smart</span>
          <br />
          with Our Smart Features

        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Manage Every Aspect of Your School with Class Sites App
        </p>


        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}

        </div>


        {/* Button */}
        <div className="mt-14">
          <button className="px-8 py-3 border border-gray-400 rounded-lg hover:bg-gray-900 hover:text-white transition">
            View all Features
          </button>
        </div>

      </div>

    </section>
  );
}


function FeatureCard({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition">

      <div className="bg-red-100 text-red-500 p-3 rounded-lg">
        <Icon size={20} />
      </div>

      <p className="font-medium text-gray-700">
        {title}
      </p>

    </div>
  );

}