import Header from '../components/Header'
import Footer from '../components/Footer'
import PlatformCard from '../components/PlatformCard'

export default function Platforms() {
  const platforms = [
    {
      name: "freeCodeCamp",
      description: "A completely free, self-paced coding bootcamp with interactive coding challenges and projects.",
      url: "https://www.freecodecamp.org/",
      freeOption: true
    },
    {
      name: "Codecademy",
      description: "Interactive learning platform with courses in various programming languages and technologies.",
      url: "https://www.codecademy.com/",
      freeOption: true
    },
    {
      name: "Khan Academy",
      description: "Free educational platform with excellent beginner-friendly computer programming courses.",
      url: "https://www.khanacademy.org/computing/computer-programming",
      freeOption: true
    },
    {
      name: "Udemy",
      description: "Popular platform with affordable courses on all tech topics, often on sale.",
      url: "https://www.udemy.com/",
      freeOption: false
    },
    {
      name: "Coursera",
      description: "Offers courses from top universities with financial aid available.",
      url: "https://www.coursera.org/",
      freeOption: true
    },
    {
      name: "Scrimba",
      description: "Interactive coding platform with a unique video+code editor format.",
      url: "https://scrimba.com/",
      freeOption: true
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 pt-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Recommended Learning Platforms</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              These platforms offer excellent resources for beginners. Many have free options to get you started.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={index}
                  name={platform.name}
                  description={platform.description}
                  url={platform.url}
                  freeOption={platform.freeOption}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}