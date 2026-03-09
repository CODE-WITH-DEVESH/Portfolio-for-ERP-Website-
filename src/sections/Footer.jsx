import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* COLUMN 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 border-b-2 border-red-500 inline-block pb-1">
              About Class Sites App
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm mt-4">
              <li>Who We Are</li>
              <li>Why Class Sites App?</li>
              <li>Awards & Recognition</li>
              <li>Our School Partners</li>
              <li>Earn With Us</li>
              <li>Blogs</li>
              <li>Press & Media</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 border-b-2 border-red-500 inline-block pb-1">
              Solution for Schools
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm mt-4">
              <li>School ERP Software</li>
              <li>School CRM Software</li>
              <li>School Fee Software</li>
              <li>School Logo Design</li>
              <li>School Website Design</li>
              <li>School ID Cards</li>
              <li>Grow School Admissions</li>
              <li>How to Choose School Software</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 border-b-2 border-red-500 inline-block pb-1">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm mt-4">
              <li>Brochure</li>
              <li>Feature Tour</li>
              <li>Testimonial</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-8 mb-4 border-b-2 border-red-500 inline-block pb-1">
              Class Sites App USP
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm mt-4">
              <li>Pricing & Plan</li>
              <li>New Features</li>
              <li>Download</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 border-b-2 border-red-500 inline-block pb-1">
              Learn More
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm mt-4">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 border-b-2 border-red-500 inline-block pb-1">
              Social Links
            </h3>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4 text-gray-600">
              <Twitter size={18} />
              <Facebook size={18} />
              <Instagram size={18} />
              <Youtube size={18} />
            </div>

            {/* APP BUTTONS */}
            <div className="mt-6 space-y-3">

              <img
                src="/google-play.png"
                className="w-40"
                alt="Google Play"
              />

              <img
                src="/app-store.png"
                className="w-40"
                alt="App Store"
              />

            </div>

          </div>

        </div>


        {/* ACHIEVEMENTS */}
        <div className="mt-16 text-center">

          <h3 className="font-semibold text-gray-800 mb-6">
            Our Recent Achievements
          </h3>

          <div className="flex flex-wrap justify-center gap-8">

            <img src="/award1.png" className="h-16" />
            <img src="/award2.png" className="h-16" />
            <img src="/award3.png" className="h-16" />
            <img src="/award4.png" className="h-16" />

          </div>

        </div>


        {/* BOTTOM LINE */}
        <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 Class Sites App. All rights reserved.
        </div>

      </div>
    </footer>
  );
}