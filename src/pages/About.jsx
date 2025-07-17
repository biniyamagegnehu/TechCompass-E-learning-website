import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About CodeCompass</h1>
            
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                CodeCompass was created to help absolute beginners navigate the often overwhelming world of programming and technology. 
                When you're just starting out, it can be difficult to know where to begin or what path to follow.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="mb-4">
                We believe that anyone can learn to code with the right guidance. Our goal is to provide clear, 
                beginner-friendly roadmaps that remove the confusion from the learning process.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">What Makes Us Different</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>No technical jargon - we explain everything in plain language</li>
                <li>Step-by-step learning paths with no assumed knowledge</li>
                <li>Only the most beginner-friendly resources and platforms</li>
                <li>Completely free - no paywalls or upsells</li>
              </ul>
              
              <p>
                Whether you're looking to start a new career, build your own projects, or just understand technology better, 
                CodeCompass is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}