export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 shadow">
        <h1 className="text-2xl font-bold text-indigo-600">StartupX</h1>
        <nav className="space-x-6 font-medium">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-20 bg-gray-50">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Power up your business with <span className="text-indigo-600">StartupX</span>
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Modern, scalable and reliable platform to help you grow faster and reach more customers.
          </p>
          <a
            href="#pricing"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://source.unsplash.com/600x400/?startup,tech"
            alt="Hero"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Why choose StartupX?</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">⚡ Fast Performance</h4>
            <p className="text-gray-600">Experience blazing fast load times and smooth interactions across all devices.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">🔒 Secure Platform</h4>
            <p className="text-gray-600">Your data is protected with enterprise-grade security and encryption.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">🚀 Easy to Scale</h4>
            <p className="text-gray-600">Grow without limits — StartupX scales with your business seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} StartupX. All rights reserved.</p>
      </footer>
    </div>
  );
}
