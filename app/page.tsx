import {
  Camera,
  Bell,
  Wifi,
  Home,
  Theater,
  Wind,
  Network,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)]">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80 to-blue-500/60 z-0"></div>

        <div className="relative text-center px-4 max-w-5xl mx-auto z-10 animate-fadeInUp">
          <Image
            className="h-20 w-20 filter invert brightness-0 mx-auto mb-6 animate-float"
            src="/assets/logo.png"
            alt="logo"
            width={1000}
            height={1000}
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Protect Your Home with <br />
            <span className="text-blue-200">Smart Technology</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Advanced CCTV, alarms, automation, and security systems designed for
            modern living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#services"
              className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 px-4 bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security and automation solutions for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Camera className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                CCTV Systems
              </h3>
              <p className="text-gray-600 text-sm">
                4K surveillance with night vision and remote monitoring
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Bell className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Security Alarms
              </h3>
              <p className="text-gray-600 text-sm">
                Smart alarms with instant alerts and emergency response
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Home className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Home Automation
              </h3>
              <p className="text-gray-600 text-sm">
                Control everything from your smartphone
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Theater className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AV Systems
              </h3>
              <p className="text-gray-600 text-sm">
                Multi-room audio and video distribution
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Network className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Networking
              </h3>
              <p className="text-gray-600 text-sm">
                High-speed WiFi mesh systems
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Wind className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Central Vacuum
              </h3>
              <p className="text-gray-600 text-sm">
                Built-in vacuum cleaning systems
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Theater className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Home Theater
              </h3>
              <p className="text-gray-600 text-sm">
                Cinema-quality entertainment
              </p>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] border-2 border-gray-200 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <Wifi className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smart Wiring
              </h3>
              <p className="text-gray-600 text-sm">Future-proof connectivity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Works
            </h2>
            <p className="text-xl text-gray-600">
              See our installations in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg"
                  alt="CCTV Installation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Luxury Villa Security
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  24-camera 4K CCTV system with facial recognition and night
                  vision
                </p>
                <Link
                  href="/works"
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Smart Home"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Complete Smart Home
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Full automation with voice control, lighting, and climate
                  systems
                </p>
                <Link
                  href="/works"
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src="https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg"
                  alt="Home Theater"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Premium Home Theater
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  7.2 surround sound with 4K projection and acoustic treatment
                </p>
                <Link
                  href="/works"
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/works"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">What our customers say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                &rdquo;Outstanding service! The CCTV system gives us complete
                peace of mind. Highly professional team.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                &rdquo;The home automation system transformed our living
                experience. Everything works seamlessly together.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-gray-600 text-sm">Property Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                &rdquo;Best investment for our home. The alarm system and
                monitoring are top-notch. Excellent support!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-gray-600 text-sm">Family Home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free consultation and custom quote for your property
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center bg-[conic-gradient(at_top_left,_#3b82f6_0%,_transparent_30%)] text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View Pricing Plans <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
