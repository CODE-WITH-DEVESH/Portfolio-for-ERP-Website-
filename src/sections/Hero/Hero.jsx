export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Benefits for School Administration
              <span className="text-indigo-600"> Faster & Smarter</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              School owners and principals are able to monitor daily activities
              and evaluate the performance and progress of both staff members
              and students effectively.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition">
                Check the Benefits
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
                Arrange a Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src=""
              alt="Classsites"
              className="w-full max-w-xl rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
