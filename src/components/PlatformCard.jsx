export default function PlatformCard({ name, description, url, freeOption }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Visit Platform
          </a>
          {freeOption && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              Free Option
            </span>
          )}
        </div>
      </div>
    </div>
  )
}