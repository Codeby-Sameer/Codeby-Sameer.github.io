import { Heart, Target, Zap } from 'lucide-react';

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accentPink bg-clip-text text-transparent">
                About GC Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 italic font-light">
              Growth & Creative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                We Know... We Are Small, Yet <span className="text-accentOrange">"Genuine"</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At GC Technologies, we believe in empowering businesses through innovation, technology,
                and genuine partnerships. Our commitment to excellence drives us to deliver solutions
                that truly make a difference.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine deep industry expertise with cutting-edge technology to help organizations
                navigate their digital transformation journey. From staffing solutions to comprehensive
                IT services, we're your trusted partner for growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h4>
                    <p className="text-gray-600">
                      To be the trusted partner for businesses seeking innovative technology solutions and exceptional talent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-accentPink/10 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accentPink rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
                    <p className="text-gray-600">
                      Delivering growth-driven solutions through creative technology implementation and strategic consulting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accentPink/10 to-accentOrange/10 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accentPink to-accentOrange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Our Values</h4>
                    <p className="text-gray-600">
                      Genuine partnerships, innovation, excellence, and unwavering commitment to client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
