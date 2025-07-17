export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-4">TechCompass</h3>
            <p className="text-neutral-500">
              Beginner-friendly guides to navigate your tech journey.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-neutral-500 hover:text-primary-500 transition">Home</a></li>
              <li><a href="/roadmaps" className="text-neutral-500 hover:text-primary-500 transition">Roadmaps</a></li>
              <li><a href="/platforms" className="text-neutral-500 hover:text-primary-500 transition">Platforms</a></li>
              <li><a href="/about" className="text-neutral-500 hover:text-primary-500 transition">About</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-500 hover:text-primary-500 transition">Blog</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-primary-500 transition">Tutorials</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-primary-500 transition">Cheatsheets</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Stay Updated</h4>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TechCompass. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}