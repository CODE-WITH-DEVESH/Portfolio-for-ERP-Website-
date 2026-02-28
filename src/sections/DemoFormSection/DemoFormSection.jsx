export default function DemoFormSection() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">


          <div className="relative bg-blue-600 p-10 flex items-center justify-center">

            <div className="text-white space-y-6 max-w-md">
              <h2 className="text-4xl font-bold leading-tight">
                Join the future of education!
              </h2>

              <p className="text-blue-100">
                Manage your school smarter with our complete digital solution.
              </p>

              <img
                src=""
                alt="App Preview"
                className="rounded-2xl shadow-2xl mt-6"
              />
            </div>

          </div>


      
          <div className="p-10">

            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Request a Free Demo
            </h3>

            <form className="space-y-6">

             
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Select School Type
                </label>
                <select
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Independent School</option>
                  <option>Public School</option>
                  <option>Private School</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  School Name with City
                </label>
                <input
                  type="text"
                  placeholder="Eg. ABC International School, Delhi"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <select
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Principal</option>
                    <option>Admin</option>
                    <option>Teacher</option>
                  </select>
                </div>

              </div>

            
             

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/30"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}