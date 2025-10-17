import { Shield, Award, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            About HomeTech Systems
          </h1>
          <p className="text-xl text-gray-400">
            Leading the way in home security and automation technology since
            2010
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
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

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Target className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-400">
                      To provide cutting-edge security and automation solutions
                      that enhance safety, convenience, and peace of mind for
                      every home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Award className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Our Values
                    </h3>
                    <p className="text-gray-400">
                      Excellence, integrity, and customer satisfaction drive
                      everything we do. We believe in building lasting
                      relationships through quality workmanship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Our Team
                    </h3>
                    <p className="text-gray-400">
                      Certified professionals with extensive training in the
                      latest security technologies and smart home systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-400">Experience the HomeTech difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zinc-800 border border-zinc-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Years Experience
              </h3>
              <p className="text-gray-400 text-sm">
                Industry expertise you can trust
              </p>
            </div>

            <div className="text-center">
              <div className="bg-zinc-800 border border-zinc-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">5K+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Projects Completed
              </h3>
              <p className="text-gray-400 text-sm">
                Proven track record of success
              </p>
            </div>

            <div className="text-center">
              <div className="bg-zinc-800 border border-zinc-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Satisfaction Rate
              </h3>
              <p className="text-gray-400 text-sm">
                Committed to your happiness
              </p>
            </div>

            <div className="text-center">
              <div className="bg-zinc-800 border border-zinc-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-red-600">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Support Available
              </h3>
              <p className="text-gray-400 text-sm">
                Always here when you need us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our Managing Director
            </h2>
            <div className="mb-6">
              <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-zinc-600" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Sukhman Sekhon
              </h3>
              <p className="text-red-600 font-medium mb-4">Managing Director</p>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              With over 15 years of experience in security systems and home
              automation, Sukhman leads our team with a vision for innovation
              and excellence. His commitment to staying ahead of technology
              trends ensures that HomeTech Systems delivers the most advanced
              solutions to our clients.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:text-red-500 transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
