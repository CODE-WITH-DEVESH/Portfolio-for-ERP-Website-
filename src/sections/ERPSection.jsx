export default function ERPSection() {
  const features = [
    "100+ Smart Modules Integrated With Dedicated Mobile Apps",
    "Enterprise-Grade Secure Cloud Infrastructure",
    "SMS, WhatsApp, Email & Payment Gateway Integrations",
    "Supports GPS Tracking, RFID, QR Scanner & Biometrics",
    "Flexible Fee Collection System With Low Ownership Cost",
    "24/7 Dedicated Customer Support Team",
    "Regular Monthly Updates With New Features",
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="relative flex justify-center">
          <img
            src="/phone.png"
            alt="ERP App"
            className="w-[320px] md:w-[380px] drop-shadow-xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-16 left-0 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="text-blue-500 text-xl">🔄</div>
            <div className="text-sm font-semibold text-gray-700">
              Lifetime Free Updates
            </div>
          </div>

          <div className="absolute bottom-2 left-10 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="text-green-500 text-xl">🛡️</div>
            <div className="text-sm font-semibold text-gray-700">
              100% Data Protection
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Modern School Management Platform
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Simplify School Operations With
            <span className="text-red-500"> Smart School ERP</span> Software
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Managing attendance, timetables, fee records, report cards,
            and certificates manually can be time-consuming. Our School ERP
            platform automates these processes, helping schools save time,
            reduce costs, and improve operational efficiency through
            secure cloud technology.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-3 mb-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="text-red-500 mt-1" size={18} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md">
            Call Us Now
          </button>
        </div>

      </div>
    </section>
  );
}