import { ArrowLeft, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our portfolio of successful installations across residential
            and commercial properties
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                CCTV Systems
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Luxury Villa Security Installation
              </h2>
              <p className="text-gray-600 mb-6">
                Complete security overhaul for a 12,000 sq ft luxury villa. The
                project included 24 4K cameras with night vision, facial
                recognition software, and a centralized monitoring system
                accessible from anywhere in the world.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">24x 4K Ultra HD Cameras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    AI-Powered Facial Recognition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Night Vision up to 100ft
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Cloud Storage & Local Backup
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">Completed: January 2025</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg"
                  alt="CCTV Installation"
                  className="w-full h-96 object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
                    alt="Security Camera"
                    className="w-full h-48 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/8729712/pexels-photo-8729712.jpeg"
                    alt="Control Panel"
                    className="w-full h-48 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Smart Home"
                className="w-full h-96 object-cover"
                width={1920}
                height={1080}
              />
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Home Automation
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Smart Home Integration
              </h2>
              <p className="text-gray-600 mb-6">
                Transform a modern family home into a fully automated smart
                residence. Integration includes lighting, climate control,
                security, entertainment, and voice control throughout the
                property.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Voice-Activated Controls (Alexa & Google)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Smart Lighting (200+ LED fixtures)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Climate Control Zones (8 zones)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Integrated Security System
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">Completed: December 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Home Theater
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Premium Home Cinema Experience
              </h2>
              <p className="text-gray-600 mb-6">
                Custom-built home theater with professional-grade equipment and
                acoustic treatment. Features include 7.2.4 Dolby Atmos surround
                sound, 4K laser projection on a 150-inch screen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    7.2.4 Dolby Atmos Sound System
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    4K Laser Projector (5000 Lumens)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    150&rdquo; Acoustically Transparent Screen
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Professional Acoustic Treatment
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">Completed: November 2024</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg"
                  alt="Home Theater"
                  className="w-full h-96 object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg"
                    alt="Theater Seating"
                    className="w-full h-48 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg"
                    alt="Sound System"
                    className="w-full h-48 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative rounded-xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-96 object-cover"
              >
                <source
                  src="https://videos.pexels.com/video-files/3015486/3015486-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Security Alarms
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Commercial Building Security
              </h2>
              <p className="text-gray-600 mb-6">
                Comprehensive security and alarm system for a 5-story commercial
                building. Integration with emergency services and building
                management systems for optimal safety.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Smart Alarms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Advanced Security Integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    24/7 Emergency Monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">
                    Automated Emergency Response
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">Completed: October 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <Image
                src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"
                alt="Network Installation"
                className="w-full h-48 object-cover"
                width={1920}
                height={1080}
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  Networking
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  Enterprise WiFi Mesh
                </h3>
                <p className="text-gray-600 text-sm">
                  High-speed network for 8,000 sq ft property
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <Image
                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                alt="AV Distribution"
                className="w-full h-48 object-cover"
                width={1920}
                height={1080}
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  AV Distribution
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  Multi-Room Audio
                </h3>
                <p className="text-gray-600 text-sm">
                  12-zone audio system with centralized control
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <Image
                src="https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg"
                alt="Central Vacuum"
                className="w-full h-48 object-cover"
                width={1920}
                height={1080}
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  Central Vacuum
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  Built-in Vacuum System
                </h3>
                <p className="text-gray-600 text-sm">
                  Whole-house vacuum with 15 inlet ports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us bring your vision to life with our expert installation
            services
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
