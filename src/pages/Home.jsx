import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20"> {/* Added pt-20 to account for fixed header */}
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary-500 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text">
              Navigate Your <span className="text-primary-500">Tech Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral mb-8">
              Beginner-friendly guides to help you master programming and technology
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/roadmaps"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Explore Roadmaps
              </Link>
              <Link
                to="/platforms"
                className="bg-white border border-neutral-200 hover:border-primary-300 text-text font-medium px-8 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Discover Platforms
              </Link>
            </div>
          </div>
        </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text mb-4">Why Choose TechCompass?</h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                We simplify technology learning with clear, structured paths designed for beginners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Beginner-Centric",
                  desc: "Designed specifically for those starting from zero"
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Structured Paths",
                  desc: "Step-by-step roadmaps to guide your learning"
                },
                {
                  icon: (
                    <svg className="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Trusted Resources",
                  desc: "Only the best beginner-friendly platforms"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-text">{item.title}</h3>
                  <p className="text-center text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-indigo-100">
              Join thousands of beginners who've successfully navigated their tech education with our guidance.
            </p>
            <Link
              to="/roadmaps"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}