import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-400">
            Ready to secure your home? Contact us for a free consultation
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition"
                  >
                    <option value="">Select a service</option>
                    <option value="cctv">CCTV Systems</option>
                    <option value="alarms">Fire & Security Alarms</option>
                    <option value="automation">Home Automation</option>
                    <option value="av">AV Distribution</option>
                    <option value="networking">Networking</option>
                    <option value="vacuum">Central Vacuum</option>
                    <option value="theater">Home Theater</option>
                    <option value="wiring">Smart Wiring</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@hometech.com</p>
                    <p className="text-gray-400">support@hometech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">123 Security Boulevard</p>
                    <p className="text-gray-400">Tech City, TC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-400">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Social Media
                    </h3>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition"
                    >
                      @hometech
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Why Choose HomeTech?
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Free consultation and quote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Certified and experienced technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Quality products and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Comprehensive warranty coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>24/7 emergency support available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="h-96 bg-zinc-800 flex items-center justify-center">
              <MapPin className="h-20 w-20 text-zinc-700" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
