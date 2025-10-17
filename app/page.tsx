import {
  Shield,
  Camera,
  Bell,
  Wifi,
  Home,
  Theater,
  Wind,
  Network,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
        <div className="relative text-center px-4 max-w-5xl mx-auto">
          <Shield className="h-20 w-20 text-red-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Secure Your Home
            <br />
            with <span className="text-red-600">Smart Technology</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Professional CCTV, alarms, home automation, and advanced security
            systems for modern living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition inline-flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-700 transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive home security and automation solutions tailored to
              your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Camera className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                CCTV Systems
              </h3>
              <p className="text-gray-400 text-sm">
                Advanced surveillance with 4K cameras, night vision, and remote
                monitoring
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Bell className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Fire & Security Alarms
              </h3>
              <p className="text-gray-400 text-sm">
                Smart alarm systems with instant alerts and emergency response
                integration
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Home className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Home Automation
              </h3>
              <p className="text-gray-400 text-sm">
                Control lighting, climate, and security from your smartphone
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Theater className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                AV Distribution
              </h3>
              <p className="text-gray-400 text-sm">
                Multi-room audio and video distribution systems
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Network className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Networking
              </h3>
              <p className="text-gray-400 text-sm">
                High-speed network infrastructure and WiFi mesh systems
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Wind className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Central Vacuum
              </h3>
              <p className="text-gray-400 text-sm">
                Built-in vacuum systems for effortless home cleaning
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Theater className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Home Theater
              </h3>
              <p className="text-gray-400 text-sm">
                Custom cinema-quality entertainment systems
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-red-600 transition group">
              <Wifi className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Wiring
              </h3>
              <p className="text-gray-400 text-sm">
                Structured cabling for future-proof connectivity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-400">See our work in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600 transition">
              <div className="h-64 bg-zinc-800 flex items-center justify-center">
                <Camera className="h-16 w-16 text-zinc-700" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">
                  Luxury Villa Security
                </h3>
                <p className="text-gray-400 text-sm">
                  24-camera CCTV system with facial recognition
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600 transition">
              <div className="h-64 bg-zinc-800 flex items-center justify-center">
                <Home className="h-16 w-16 text-zinc-700" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">
                  Smart Home Integration
                </h3>
                <p className="text-gray-400 text-sm">
                  Full home automation with voice control
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600 transition">
              <div className="h-64 bg-zinc-800 flex items-center justify-center">
                <Theater className="h-16 w-16 text-zinc-700" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">
                  Home Theater Setup
                </h3>
                <p className="text-gray-400 text-sm">
                  7.2 surround sound with 4K projection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-400">What our customers say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg">
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-300 mb-4">
                &rdquo;Outstanding service! The CCTV system they installed gives
                us complete peace of mind. Highly professional team.&rdquo;
              </p>
              <p className="text-white font-semibold">Sarah Johnson</p>
              <p className="text-gray-500 text-sm">Homeowner</p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg">
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-300 mb-4">
                &rdquo;The home automation system has transformed our living
                experience. Everything works seamlessly together.&rdquo;
              </p>
              <p className="text-white font-semibold">Michael Chen</p>
              <p className="text-gray-500 text-sm">Property Developer</p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg">
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-300 mb-4">
                &rdquo;Best investment we made for our home. The alarm system
                and monitoring are top-notch. Excellent support!&rdquo;
              </p>
              <p className="text-white font-semibold">Emily Rodriguez</p>
              <p className="text-gray-500 text-sm">Family Home</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-gray-400">
              Choose the perfect solution for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-red-600 transition">
              <h3 className="text-2xl font-bold text-white mb-4">
                Basic Security
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$2,999</span>
                <span className="text-gray-400">/installation</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>4 HD CCTV Cameras</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic Alarm System</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile App Access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1 Year Warranty</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full bg-zinc-800 text-white py-3 rounded-lg text-center font-semibold hover:bg-zinc-700 transition"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-b from-red-900/20 to-zinc-900 border-2 border-red-600 p-8 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Complete Home
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$7,999</span>
                <span className="text-gray-400">/installation</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>12 4K CCTV Cameras</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced Alarm System</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Home Automation Hub</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Network Setup</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>3 Years Warranty</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full bg-red-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-red-700 transition"
              >
                Get Started
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-red-600 transition">
              <h3 className="text-2xl font-bold text-white mb-4">
                Premium Estate
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$15,999+</span>
                <span className="text-gray-400">/custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited 4K Cameras</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete Smart Home</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AV Distribution</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Home Theater</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>5 Years Warranty</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 Priority Support</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full bg-zinc-800 text-white py-3 rounded-lg text-center font-semibold hover:bg-zinc-700 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Home?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get a free consultation and custom quote for your property
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
