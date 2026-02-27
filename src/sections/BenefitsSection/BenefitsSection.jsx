export default function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* ================= LEFT SIDE ================= */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Advantages for Educational<span className="text-indigo-600"> Institutions </span>
            </h2>

            <ul className="space-y-4 text-gray-600 text-lg">
              <li>• Assignment & Homework Management</li>
              <li>• Fee Defaulter Control with App Access Restriction</li>
              <li>• Automated Daily Data Backup System</li>
              <li>• WhatsApp Reports for Important School Activities</li>
              <li>• Fully Customizable ERP Platform</li>
              <li>• Multi-Dashboard Analytical Overview</li>
              <li>• Easy School Website Management</li>
              <li>• Accounts & Inventory Management System</li>
              <li>• One-Click Comprehensive Fee Reports</li>
              <li>• Role-Based Administrative Access Control</li>
              <li>• Smart Online Admission & Registration System</li>
              <li>• 10+ Communication Channels for Parents & Teachers</li>
              
            </ul>
          </div>

        
          <div className="grid sm:grid-cols-2 gap-8">
          {/* Yeha se Card 1 Start kar diya ha  */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-indigo-500 text-4xl mb-4">☁️</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secured Cloud System
              </h3>

              <p className="text-gray-600">
                Trust our secure cloud system for worry-free data management.
                Your information is always protected.
              </p>
            </div>

            {/* Yeha se Card 2 Start kar diya ha  */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-indigo-500 text-4xl mb-4">⚙️</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Monthly Free Updates
              </h3>

              <p className="text-gray-600">
                Stay up-to-date without extra fees. Our software delivers
                monthly updates effortlessly.
              </p>
            </div>

             {/* Yeha se Card 3 Start kar diya ha  */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-indigo-500 text-4xl mb-4">❌</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No Hardware Required
              </h3>

              <p className="text-gray-600">
                No need for hardware headaches. Our software operates
                seamlessly, saving you space and hassle.
              </p>
            </div>

         {/* Yeha se Card 4 Start kar diya ha  */}
         {/* Yeha se Card ko KInte bar Copy kar skata hu mai  */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-indigo-500 text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Save Paper, Time & Money
              </h3>

              <p className="text-gray-600">
                Go green and save! Cut paper waste, streamline tasks, and watch
                your savings grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
