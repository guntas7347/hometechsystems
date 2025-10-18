import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100">
            Ready to secure your home? Contact us for a free consultation
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 transition"
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
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (778)-833-4133</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      hometechsystemsltd@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">7999 King George</p>
                    <p className="text-gray-600">Surrey BC, V3W5B3</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">
                      Social Media
                    </h3>
                    <a
                      href="https://www.instagram.com/hometech_systems_ltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      @hometechsystems
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose HomeTech?
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Free consultation and quote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Certified and experienced technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Quality products and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Comprehensive warranty coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>24/7 emergency support available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.303899007696!2d-122.84926892334288!3d49.14462147931676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9f62755b8db%3A0x31a630f18b993b49!2s7999%20King%20George%20Blvd%2C%20Surrey%2C%20BC%20V3W%205B3%2C%20Canada!5e0!3m2!1sen!2sca!4v1739817600000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Home Tech Systems"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
