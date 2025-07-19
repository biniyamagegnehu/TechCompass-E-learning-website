import Header from '../components/Header';
import Footer from '../components/Footer';
import image from '../assets/e-learning-photo.jpg'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechCompass</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding beginners through the ever-evolving world of technology
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-blue-100 rounded-full w-48 h-48 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  TechCompass was born from a simple observation: the tech learning landscape is overwhelming for beginners. 
                  Our mission is to simplify technology education by providing clear, structured roadmaps that guide absolute 
                  beginners from their first line of code to professional competency.
                </p>
                <p className="text-gray-700">
                  We believe that anyone can learn tech skills with the right guidance, regardless of their background or 
                  prior experience.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Structured Learning",
                  description: "We provide step-by-step paths that build skills progressively"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Beginner Focus",
                  description: "Every resource is vetted for accessibility to newcomers"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  title: "Open Access",
                  description: "Quality tech education should be available to everyone"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team/Story Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  TechCompass was founded in 2025 by developer who remembered his own struggles when first 
                  learning to code. Frustrated by fragmented tutorials and outdated resources, we set out to create 
                  a better way to navigate the tech learning journey.
                </p>
                <p className="text-gray-700">
                  What began as a side project has grown into a comprehensive platform trusted by thousands of beginners 
                  worldwide. 
                </p>
              </div>
              <div>
                <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
                  <span className="text-gray-400"><img src={image} alt="" /></span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of beginners who've successfully navigated their tech education with our guidance
            </p>
            <a
              href="/roadmaps"
              className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Roadmaps
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}