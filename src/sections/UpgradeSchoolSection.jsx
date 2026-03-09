import { Star, Settings, Layers } from "lucide-react";

export default function UpgradeSchoolSection() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">

            Are You Ready To <span className="text-red-500">Upgrade Your School</span>{" "}
            With Smart AI-Powered <span className="text-red-500">School ERP Software?</span>

          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Class Sites App is one of the most experienced School ERP providers
            in India with over 20 years of IT experience and 8+ years in Ed-tech.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL UI */}
          <div className="relative flex justify-center">

            {/* Main Card */}
            <div className="bg-white rounded-xl shadow-xl p-6 w-60 text-center">
              <img
                src="https://placehold.co/150x180"
                alt="certificate"
                className="rounded-lg px-6"
              />
              {/* <p className="text-sm mt-3 font-semibold">One Click Certificates</p> */}
            </div>

            {/* Floating cards */}
            {/* <div className="absolute -top-6 -left-8 bg-white shadow-lg rounded-lg p-3 text-xs">
              🚌 Van Tracking
            </div>

            <div className="absolute top-24 -right-10 bg-white shadow-lg rounded-lg p-3 text-xs">
              💰 Fee Collection
            </div>

            <div className="absolute bottom-0 -left-12 bg-white shadow-lg rounded-lg p-3 text-xs">
              ⭐ Festival Banners
            </div> */}

          </div>


          {/* RIGHT CONTENT */}
          <div className="space-y-8">

            <Feature
              icon={<Layers />}
              title="Built with more than 100+ Modules"
              text="Over 100+ modules designed to simplify school operations and improve experience for students, teachers and parents."
            />

            <Feature
              icon={<Star />}
              title="User Friendly Portal & Apps"
              text="Our easy-to-use design ensures smooth navigation for all users and saves time effortlessly."
            />

            <Feature
              icon={<Settings />}
              title="Free Lifetime Updates"
              text="We deliver continuous innovation with updates every month to keep your school ahead."
            />

            {/* Buttons */}
            <div className="flex gap-4 pt-4">

              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                Call Us Now
              </button>

              <button className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                Book a free demo
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-4">

      <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-500 rounded-lg">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-lg text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
          {text}
        </p>
      </div>

    </div>
  );
}