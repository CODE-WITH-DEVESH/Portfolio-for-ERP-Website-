import { School, Users, GraduationCap, Bus } from "lucide-react";

export default function SmartAppsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              One Stop Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Improve Your School <br />
              Management with{" "}
              <span className="text-red-500">Smart Apps</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Mobile apps provide a simple communication link between
              students, parents, teachers, staff, and the school,
              keeping everyone connected easily.
            </p>

            <ul className="space-y-4 text-gray-600 mb-8">

              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                Boost your school's efficiency with our advanced apps
                offering a complete solution.
              </li>

              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                Improve teamwork among teachers, students, and parents
                with our easy-to-use platform.
              </li>

            </ul>

            <button className="bg-red-500 hover:bg-red-600 transition px-7 py-4 text-white rounded-lg font-semibold shadow-lg">
              Make Your School Digital →
            </button>

          </div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            <FeatureCard
              icon={<School size={28} />}
              title="School App"
              text="Your all-in-one solution for easy management and communication."
            />

            <FeatureCard
              icon={<Users size={28} />}
              title="Parent App"
              text="Track your child's progress, fees, attendance and activities."
            />

            <FeatureCard
              icon={<GraduationCap size={28} />}
              title="Teacher App"
              text="Teachers manage classrooms and connect with parents easily."
            />

            <FeatureCard
              icon={<Bus size={28} />}
              title="Driver App"
              text="Parents can track routes and communicate with drivers."
            />

          </div>

        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition duration-300 group">

      <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-500 rounded-lg mb-4 group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </div>
  );
}