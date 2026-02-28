export default function AppCardsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Applications</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
           Powerful and intelligent digital tools crafted for next-generation school administration.
          </p>
        </div>
<div className="grid gap-12 md:grid-cols-3">
        
          <div className="group text-center">
            <div className="overflow-hidden rounded-2xl shadow-lg transition duration-500 group-hover:shadow-blue-500/30">
              <img
                src=""
                alt="Parents App"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              Parent App
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Parents can easily monitor their child’s academic performance,
              attendance, and daily activities directly through the Parent App.
            </p>

            <button className="mt-6 text-blue-600 font-medium hover:underline">
              Explore More →
            </button>
          </div>

         
          <div className="group text-center">
            <div className="overflow-hidden rounded-2xl shadow-lg transition duration-500 group-hover:shadow-blue-500/30">
              <img
                src=""
                alt="Teacher App"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              Teacher App
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Teachers can efficiently manage classroom tasks, update records,
              and complete daily responsibilities within seconds.
            </p>

            <button className="mt-6 text-blue-600 font-medium hover:underline">
              Explore More →
            </button>
          </div>

        
          <div className="group text-center">
            <div className="overflow-hidden rounded-2xl shadow-lg transition duration-500 group-hover:shadow-blue-500/30">
              <img
                src=""
                alt="Driver App"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              Driver App
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Schools and parents can track the school transport location in
              real-time using an advanced live tracking system.
            </p>

            <button className="mt-6 text-blue-600 font-medium hover:underline">
              Explore More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
