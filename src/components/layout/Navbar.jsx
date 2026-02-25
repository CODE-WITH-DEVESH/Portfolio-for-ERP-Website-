function Navabr() {
  return (
    <>
      <header class="sticky top-0 z-50 bg-black text-white shadow">
        <div class="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <div class="font-bold text-yellow-400 text-xl">Logo</div>
          {/* <div class="font-bold text-yellow-400 text-xl">Logo</div> */}

          <nav class="hidden md:flex gap-6">
            <a href="#" class="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#" class="hover:text-yellow-400 transition">
              Features
            </a>
            <a href="#" class="hover:text-yellow-400 transition">
              Solutions
            </a>
            <a href="#" class="hover:text-yellow-400 transition">
              Contect
            </a>
            <a href="#" class="hover:text-yellow-400 transition">
              Get Demo
            </a>
          </nav>

          <div class="hidden md:flex gap-4">
            <button class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:scale-105 transition">
              Login
            </button>

            <button class="bg-gray-700 px-4 py-2 rounded-lg hover:scale-105 transition">
              Sign Up
            </button>
          </div>

          <button class="md:hidden text-2xl">☰</button>
        </div>
      </header>
    </>
  );
}
export default Navabr;
