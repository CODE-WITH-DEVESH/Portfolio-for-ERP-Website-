export default function AdmissionsVideoSection() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* SMALL TITLE */}
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
          Are you a school owner or part of school management?
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

          Increase School <span className="text-red-500">Admissions</span>{" "}
          with Proven Strategies & Techniques

        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mx-auto mt-6">
          Our effective strategies and straightforward enrollment process
          make choosing your school hassle-free for students and families.
        </p>

      </div>


      {/* VIDEO CARD */}
      <div className="max-w-5xl mx-auto mt-16 px-6">

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

          {/* VIDEO IMAGE */}
          <img
            src="https://placehold.co/1200x650"
            alt="video"
            className="w-full"
          />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">

            <button className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}