import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-red-700 rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <p className="text-yellow-300 font-medium mb-4">
              Real-time Updates and Clear Communication Between
              <span className="underline"> Teachers, Parents & Students</span>
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ready to make <br /> your school smarter?
            </h2>

            <p className="text-lg text-gray-100 mb-8">
              Make the smart choice! Get Class Sites App today.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition">
                Get Started Now
                <ArrowRight size={18} />
              </button>

              <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition">
                Read FAQs
              </button>

            </div>

            <p className="mt-6 text-gray-200">
              Get Free Demo From Class Sites App Experts
            </p>

          </div>


          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* main image */}
            <img
              src="/cta-main.jpg"
              className="rounded-full w-72 h-72 object-cover shadow-xl"
              alt="demo"
            />

            {/* top image */}
            <img
              src="/cta-student.jpg"
              className="absolute top-0 right-0 w-28 h-28 rounded-full border-4 border-white shadow-lg"
              alt="student"
            />

            {/* bottom image */}
            <img
              src="/cta-teacher.jpg"
              className="absolute bottom-0 left-0 w-28 h-28 rounded-full border-4 border-white shadow-lg"
              alt="teacher"
            />

          </div>

        </div>

      </div>

    </section>
  );
}