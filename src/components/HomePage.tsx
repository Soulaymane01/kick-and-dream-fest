import { Ticket, Sticker } from 'lucide-react';

interface HomePageProps {
  onSelectCategory: (category: 'stickers' | 'tickets') => void;
}

export default function HomePage({ onSelectCategory }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            African Cup Kids
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your category and get your exclusive merchandise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <button
            onClick={() => onSelectCategory('stickers')}
            className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300">
                <Sticker className="w-12 h-12 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stickers</h2>
              <p className="text-gray-600 mb-6">
                Choose 2 exclusive stickers from our collection
              </p>
              <div className="inline-flex items-center text-orange-600 font-semibold">
                Shop Now
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectCategory('tickets')}
            className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <Ticket className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tickets</h2>
              <p className="text-gray-600 mb-6">
                Select your tier and quantity for the event
              </p>
              <div className="inline-flex items-center text-blue-600 font-semibold">
                Shop Now
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
