import { Shield, Award, Users, Target, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Shield className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About HomeTech Systems
          </h1>
          <p className="text-xl text-blue-100">
            Leading the way in home security and automation technology since
            2010
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  HomeTech Systems was founded with a simple mission: to make
                  advanced home security and automation accessible to everyone.
                  What started as a small team of passionate technologists has
                  grown into a trusted leader in the industry.
                </p>
                <p>
                  Over the years, we&rsquo;ve installed thousands of systems
                  across residential and commercial properties, earning a
                  reputation for quality, reliability, and exceptional customer
                  service. Our expertise spans CCTV surveillance, alarm systems,
                  home automation, AV distribution, and comprehensive smart home
                  solutions.
                </p>
                <p>
                  Led by Managing Director Sukhman Sekhon, our team brings
                  together decades of combined experience in security
                  technology, electrical systems, and smart home integration. We
                  stay at the forefront of industry innovations to deliver
                  cutting-edge solutions that protect what matters most.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Team"
                className="rounded-2xl shadow-2xl"
                height={1000}
                width={1000}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-xl transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide cutting-edge security and automation solutions that
                enhance safety, convenience, and peace of mind for every home.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-xl transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Values
              </h3>
              <p className="text-gray-600">
                Excellence, integrity, and customer satisfaction drive
                everything we do. We believe in building lasting relationships
                through quality workmanship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-xl transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Team
              </h3>
              <p className="text-gray-600">
                Certified professionals with extensive training in the latest
                security technologies and smart home systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Experience the HomeTech difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-900 font-semibold mb-2">
                Years Experience
              </p>
              <p className="text-gray-600 text-sm">
                Industry expertise you can trust
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5K+</h3>
              <p className="text-gray-900 font-semibold mb-2">
                Projects Completed
              </p>
              <p className="text-gray-600 text-sm">
                Proven track record of success
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">100%</h3>
              <p className="text-gray-900 font-semibold mb-2">
                Satisfaction Rate
              </p>
              <p className="text-gray-600 text-sm">
                Committed to your happiness
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-900 font-semibold mb-2">
                Support Available
              </p>
              <p className="text-gray-600 text-sm">
                Always here when you need us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Meet Our Managing Director
            </h2>
            <div className="mb-8">
              <div className="w-32 h-32 bg-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Sukhman Sekhon</h3>
              <p className="text-blue-200 font-medium mb-6">
                Managing Director
              </p>
            </div>
            <p className="text-blue-50 max-w-2xl mx-auto mb-8 leading-relaxed">
              With over 15 years of experience in security systems and home
              automation, Sukhman leads our team with a vision for innovation
              and excellence. His commitment to staying ahead of technology
              trends ensures that HomeTech Systems delivers the most advanced
              solutions to our clients.
            </p>
            <a
              href="https://www.instagram.com/hometech_systems_ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
