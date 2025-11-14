import { Activity, Cloud, Brain, FileText } from 'lucide-react';

function SolutionsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-accentPink via-secondary to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              GC Tech can help build digital capabilities, deploy applications,
              technology and infrastructure specific to industry solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Industry Solution – Pharm: "chAInIQ"
                  </span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Advanced distributed quality management solution for pharmaceutical manufacturing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">IoT Data Integration</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Real-time data from IoT-enabled machines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Critical production assets monitoring</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Injectable production process focus</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accentPink/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accentPink rounded-xl flex items-center justify-center mb-6">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud-Based Data Lake</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Centralized cloud-based data storage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Seamless data aggregation and access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Holistic view of production processes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-accentPink/10 to-accentOrange/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accentPink to-accentOrange rounded-xl flex items-center justify-center mb-6">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Driven Insights</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-accentPink mt-1">•</span>
                      <span>Advanced AI and machine learning tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accentPink mt-1">•</span>
                      <span>Actionable insights for manufacturers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accentPink mt-1">•</span>
                      <span>Optimized operations and quality control</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-darkBlue to-primary text-white rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  ChAInIQ transforms how pharmaceutical companies manage their production lines by integrating
                  IoT and AI technology, optimizing operations, and providing deep insights into every aspect
                  of the supply chain. This solution not only addresses immediate manufacturing challenges but
                  also ensures long-term operational success and product quality in the highly regulated pharma sector.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-secondary to-accentOrange bg-clip-text text-transparent">
                    Application Tracking System: "@laS"
                  </span>
                </h2>
                <p className="text-gray-600 text-lg italic">AI at the Heart of Smarter Hiring</p>
              </div>

              <div className="bg-lightGray rounded-2xl p-8 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Atlas is a boutique solution tailored specifically for small and medium-sized businesses.
                  It focuses on smart matching using embedded AI, ensuring that you can find the right talent
                  quickly and efficiently without the complexities of larger ATS platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Smart Matching</h3>
                    <p className="text-gray-600">
                      Uses embedded AI to intelligently match candidates to job roles, ensuring faster
                      and more accurate hiring decisions.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accentPink rounded-lg flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Seamless API Integrations</h3>
                    <p className="text-gray-600">
                      Integrated with Digiverifier and Hirex.ai, automating candidate verification
                      and advanced resume parsing.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accentPink to-accentOrange rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Efficiency and Scalability</h3>
                    <p className="text-gray-600">
                      Simplifies every stage from job posting to onboarding, allowing businesses
                      to grow while maintaining efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
