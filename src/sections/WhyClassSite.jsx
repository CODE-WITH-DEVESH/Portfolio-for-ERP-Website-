import { Check } from "lucide-react";

export default function WhyClassSite() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TITLE */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your School is Unique{" "}
            <span className="text-red-500">We've got it Covered</span>
          </h2>

        </div>


        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-20">

          <Stat number="16+" label="Years of Experience" />
          <Stat number="1000+" label="Partner Schools" />
          <Stat number="752000+" label="Registered Students" />
          <Stat number="50000+" label="Teachers Enrolled" />
          <Stat number="15+" label="School Services" />

        </div>


        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute w-[420px] h-[420px] bg-gray-100 rounded-full"></div>

            <img
              src="https://placehold.co/350x700"
              alt="mobile app"
              className="relative z-10 drop-shadow-2xl"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <h3 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
              Why Is Class Sites App India's Fastest-growing{" "}
              <span className="text-red-500">School ERP software?</span>
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Experience Triple Assurance from us: Best Value, Peace of Mind,
              and Continuous updates. Our mission is to make every school
              100% smart and digital.
            </p>

            <h4 className="font-semibold text-lg mb-4">
              With Class Sites App, you get:
            </h4>


            <ul className="space-y-3">

              <Feature text="Zero Hardware Costs" />
              <Feature text="100% Data Security & Privacy" />
              <Feature text="Guaranteed New Updates Every Month" />
              <Feature text="No Technical Skills Required" />
              <Feature text="Reliable Support System" />
              <Feature text="User-Friendly Interface" />
              <Feature text="Effortlessly Boost Admissions" />

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}


function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900">{number}</h3>
      <p className="text-gray-500 text-sm mt-2">{label}</p>
    </div>
  );
}


function Feature({ text }) {
  return (
    <li className="flex gap-3 items-start">

      <div className="bg-red-100 text-red-500 rounded-full p-1 mt-1">
        <Check size={14} />
      </div>

      <p className="text-gray-600">{text}</p>

    </li>
  );
}