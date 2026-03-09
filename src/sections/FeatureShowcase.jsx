export default function FeatureShowcase() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">

            <img
              src="https://placehold.co/400x700"
              alt="Mobile App"
              className="w-80 md:w-96 drop-shadow-2xl"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
              Now Simply School Management Tasks
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">

              Simplify School Operations <br />

              <span className="text-red-600">
                With Smart School ERP Software
              </span>

            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Managing attendance, timetables, fees, report cards and certificates
              manually is overwhelming. Class Site ERP automates everything so
              schools can save time, money and effort.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                100+ Useful Modules meshed with Mobile Apps
              </li>

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                100% Secure and Reliable Cloud System
              </li>

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                SMS, WhatsApp, Email & Payment Gateway Integration
              </li>

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                GPS, RFID, QR Scanner & Biometrics Supported
              </li>

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                Flexible Payment System and Low Cost Ownership
              </li>

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                24/7 Dedicated Support Team
              </li>

              <li className="flex items-center gap-3">
                <span className="text-red-500">✓</span>
                Every Month New Update Guaranteed
              </li>

            </ul>

            {/* CTA */}
            <button className="mt-10 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg">
              Call Us Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}