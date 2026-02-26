function Navabr() {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-red-900/90"></div>

        <header className="relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 text-white">
            <div className="text-3xl font-bold">
              classes<span className="text-yellow-400">Sites</span>
            </div>

            <nav className="hidden md:flex gap-8">
              <a href="#" className="hover:text-yellow-400">Home</a>
              <a href="#" className="hover:text-yellow-400">About</a>
              <a href="#" className="hover:text-yellow-400">Solutions</a>
              <a href="#" className="hover:text-yellow-400">Apps</a>
              <a href="#" className="hover:text-yellow-400">Resources</a>
            </nav>

            <button className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-red-900 transition">
              Add Free Demo
            </button>
          </div>
        </header>

        <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              School Portal App
            </h1>

            <p className="text-yellow-400 text-lg md:text-2xl max-w-3xl mx-auto">
              Manage your school portal with Class ON App – your one-stop solution for efficient management
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navabr;