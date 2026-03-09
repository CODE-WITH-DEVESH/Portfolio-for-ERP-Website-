import { Check } from "lucide-react";

export default function SmarterSchoolSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase text-sm tracking-widest text-gray-500 mb-4">
              Say Goodbye To Stress With Class Sites App
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Here's How We Make Your School{" "}
              <span className="text-red-500">Smarter</span>
            </h2>

            <ul className="space-y-6">

              <FeatureItem text="Say goodbye to paperwork overload with digital assignments, submissions and grading." />

              <FeatureItem text="Create and manage class schedules, attendance, homework and activities easily." />

              <FeatureItem text="Auto reminders for fees, bus tracking, visitor management and certificate generation." />

              <FeatureItem text="Organize lesson plans, teaching materials and documents in one central hub." />

            </ul>

          </div>


          {/* RIGHT IMAGE + FLOATING CARDS */}
          <div className="relative flex justify-center">

            {/* Main Image */}
            <img
              src="https://placehold.co/450x500"
              alt="teacher"
              className="rounded-xl shadow-2xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute top-16 -left-10 bg-white shadow-xl rounded-lg px-4 py-3 text-sm">
              📘 Homework Assigned
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-24 -left-12 bg-white shadow-xl rounded-lg px-4 py-3 text-sm">
              🎥 Live Class Scheduled
            </div>

            {/* Floating Card 3 */}
            <div className="absolute bottom-8 right-[-40px] bg-white shadow-xl rounded-lg px-4 py-3 text-sm">
              💰 Fee Collection Today
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              ✓
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


function FeatureItem({ text }) {
  return (
    <li className="flex gap-4">
      <div className="w-6 h-6 flex items-center justify-center bg-red-100 text-red-500 rounded-full">
        <Check size={14} />
      </div>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </li>
  );
}