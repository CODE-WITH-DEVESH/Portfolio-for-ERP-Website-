export default function PremiumHeroDemo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white py-24">

     
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

   
        <div className="space-y-8">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI-Powered School ERP Software  
            <span className="block text-yellow-300">
              For Indian Schools
            </span>
          </h1>

          <p className="text-lg text-red-100 leading-relaxed max-w-xl">
            Class Sites App ERP offers India's first AI-powered school ERP software
            designed to transform how schools operate. Built with 100+ modules,
            mobile apps, and smart automation tools to help institutions run
            faster, smarter, and more efficiently.
          </p>

       
          <div className="flex items-center gap-6 pt-4">

            <div className="text-5xl font-bold text-white">
              100%
            </div>

            <div className="text-red-200 text-sm leading-relaxed">
              Secure & Reliable Cloud-Based  
              <br/>
              School ERP Software In India
            </div>

          </div>

        </div>


     
        <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-10 backdrop-blur-lg">

          <h3 className="text-2xl font-semibold mb-2">
            Book Your Free Demo
          </h3>

          <p className="text-gray-500 mb-6">
            We are available to serve you always!
          </p>

          <form className="space-y-4">

      
            <input
              type="text"
              placeholder="Your Full Name*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
            />

            {/* school name */}
            <input
              type="text"
              placeholder="School Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
            />

            {/* email + phone */}
            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />

              <input
                type="text"
                placeholder="Contact Number*"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />

            </div>

            {/* designation + website */}
            <div className="grid md:grid-cols-2 gap-4">

              <select
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option>Your Designation</option>
                <option>Principal</option>
                <option>Administrator</option>
                <option>Teacher</option>
              </select>

              <input
                type="text"
                placeholder="School Website"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />

            </div>

          

           
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              By submitting this form you accept our
              <span className="text-blue-600"> Privacy Policy</span> and
              <span className="text-blue-600"> Terms & Conditions</span>
            </p>

          </form>

        </div>

      </div>


      <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[100%]"></div>

    </section>
  );
}