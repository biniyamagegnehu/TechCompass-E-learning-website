export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CodeCompass. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for beginners in tech</p>
        </div>
      </div>
    </footer>
  )
}