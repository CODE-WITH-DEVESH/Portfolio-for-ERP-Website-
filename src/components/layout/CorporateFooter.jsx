export default function CorporateFooter() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-3xl font-bold text-blue-700">
            class<span className="text-red-500">sites</span>
          </div>

          {/* <p className="text-gray-600 text-lg max-w-2xl">
            “Elevate your school’s success with Class ON – the all-in-one
            solution for educational excellence.”
          </p> */}
        </div>

        <div className="border-t border-gray-200 my-10"></div>

        <div className="grid gap-12 md:grid-cols-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About Class ON</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Who We Are</li>
              <li className="hover:text-blue-600 cursor-pointer">Awards</li>
              <li className="hover:text-blue-600 cursor-pointer">Partners</li>
              <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Solution for Schools
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">School ERP</li>
              <li className="hover:text-blue-600 cursor-pointer">School CRM</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Fee Software
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Website Design
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Brochure</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Feature Tour
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Testimonials
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Learn More</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Social Links</h3>

            <div className="flex gap-4 mb-6 text-xl text-gray-500">
              <span className="hover:text-blue-600 cursor-pointer">D</span>
              <span className="hover:text-blue-600 cursor-pointer">E</span>
              <span className="hover:text-blue-600 cursor-pointer">V</span>
              <span className="hover:text-blue-600 cursor-pointer">E</span>
              <span className="hover:text-blue-600 cursor-pointer">S</span>
              <span className="hover:text-blue-600 cursor-pointer">H</span>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
                Google Play
              </button>
              <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
                App Store
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-semibold text-gray-800 mb-8">
            Our Recent Achievements
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 ClassSites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
