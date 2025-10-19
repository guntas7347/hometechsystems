import { CheckCircle, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
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
          <div className="text-center max-w-3xl mx-auto">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Packages
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect security and automation package for your home.
              All plans include professional installation and warranty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Basic Security
                </h3>
                <p className="text-gray-600">
                  Perfect for apartments and small homes
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      4x HD CCTV Cameras
                    </p>
                    <p className="text-sm text-gray-600">
                      1080p resolution with night vision
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Basic Alarm System
                    </p>
                    <p className="text-sm text-gray-600">
                      Door/window sensors and motion detectors
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Mobile App Access
                    </p>
                    <p className="text-sm text-gray-600">
                      iOS and Android control
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Cloud Storage</p>
                    <p className="text-sm text-gray-600">
                      7 days of video storage
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      1 Year Warranty
                    </p>
                    <p className="text-sm text-gray-600">
                      Parts and labor included
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Support</p>
                    <p className="text-sm text-gray-600">
                      Business hours response
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-gray-900 text-white py-4 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 relative border-4 border-blue-400 shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Complete Home
                </h3>
                <p className="text-blue-100">
                  Comprehensive protection for family homes
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      12x 4K CCTV Cameras
                    </p>
                    <p className="text-sm text-blue-100">
                      Ultra HD with advanced night vision
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Advanced Alarm System
                    </p>
                    <p className="text-sm text-blue-100">
                      Glass break sensors and smoke detectors
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Home Automation Hub
                    </p>
                    <p className="text-sm text-blue-100">
                      Control lights, locks, and thermostat
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Professional Network Setup
                    </p>
                    <p className="text-sm text-blue-100">
                      Mesh WiFi system for whole home
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      30 Days Cloud Storage
                    </p>
                    <p className="text-sm text-blue-100">
                      Plus local backup DVR
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">3 Years Warranty</p>
                    <p className="text-sm text-blue-100">
                      Extended coverage included
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Priority Phone Support
                    </p>
                    <p className="text-sm text-blue-100">
                      Direct technician access
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-600 py-4 rounded-lg text-center font-semibold hover:bg-gray-50 transition shadow-lg"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Premium Estate
                </h3>
                <p className="text-gray-600">
                  Ultimate protection for luxury properties
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Unlimited 4K Cameras
                    </p>
                    <p className="text-sm text-gray-600">
                      AI-powered facial recognition
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Complete Smart Home
                    </p>
                    <p className="text-sm text-gray-600">
                      Voice control and automation
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Multi-Room AV Distribution
                    </p>
                    <p className="text-sm text-gray-600">
                      Audio and video throughout property
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Premium Home Theater
                    </p>
                    <p className="text-sm text-gray-600">
                      Dolby Atmos sound system
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Enterprise Network
                    </p>
                    <p className="text-sm text-gray-600">
                      High-speed fiber infrastructure
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Unlimited Cloud Storage
                    </p>
                    <p className="text-sm text-gray-600">90+ days retention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      5 Years Warranty
                    </p>
                    <p className="text-sm text-gray-600">
                      Lifetime tech support
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      24/7 Priority Support
                    </p>
                    <p className="text-sm text-gray-600">
                      Dedicated account manager
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-gray-900 text-white py-4 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Individual Services Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  CCTV Cameras (Per Unit)
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• HD/4K options available</li>
                  <li>• Night vision capability</li>
                  <li>• Professional installation included</li>
                  <li>• 2-year warranty</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Alarm Systems
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Fire and security sensors</li>
                  <li>• 24/7 monitoring option</li>
                  <li>• Mobile alerts</li>
                  <li>• Professional setup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Home Automation
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Smart lighting and climate</li>
                  <li>• Voice control integration</li>
                  <li>• Automated schedules</li>
                  <li>• Mobile app control</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Home Theater
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Surround sound systems</li>
                  <li>• 4K projection setup</li>
                  <li>• Acoustic treatment</li>
                  <li>• Custom design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Network Setup
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Mesh WiFi systems</li>
                  <li>• Whole-home coverage</li>
                  <li>• Wired infrastructure</li>
                  <li>• Professional configuration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Central Vacuum
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Whole-house system</li>
                  <li>• Multiple inlet ports</li>
                  <li>• HEPA filtration</li>
                  <li>• Installation included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
