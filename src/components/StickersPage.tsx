import { useState, useEffect } from 'react';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import stickersData from '../data/stickers.json';
import type { Sticker } from '../lib/types';
import { redirectToStickersForm } from '../lib/googleForms';

interface StickersPageProps {
  onBack: () => void;
}

export default function StickersPage({ onBack }: StickersPageProps) {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [selectedStickers, setSelectedStickers] = useState<Sticker[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const activeStickers = stickersData.filter((s: any) => s.active === true);
    setStickers(activeStickers);
    setLoading(false);
  }, []);

  const toggleSticker = (sticker: Sticker) => {
    const isSelected = selectedStickers.some((s) => s.id === sticker.id);

    if (isSelected) {
      setSelectedStickers(selectedStickers.filter((s) => s.id !== sticker.id));
    } else if (selectedStickers.length < 2) {
      setSelectedStickers([...selectedStickers, sticker]);
    }
  };

  const isSelected = (stickerId: string) => {
    return selectedStickers.some((s) => s.id === stickerId);
  };

  const totalPrice = selectedStickers.reduce((sum, s) => sum + s.price, 0);

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToStickersForm(selectedStickers, name, phone);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Categories
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Stickers
          </h1>
          <p className="text-lg text-gray-600">
            Select exactly 2 stickers from our collection
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-orange-800 font-semibold">
              {selectedStickers.length} / 2 selected
            </span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stickers.map((sticker) => {
                const selected = isSelected(sticker.id);
                const canSelect = selectedStickers.length < 2 || selected;

                return (
                  <button
                    key={sticker.id}
                    onClick={() => toggleSticker(sticker)}
                    disabled={!canSelect}
                    className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                      selected
                        ? 'ring-4 ring-orange-500 shadow-xl scale-105'
                        : canSelect
                        ? 'hover:shadow-lg hover:scale-102 shadow-md'
                        : 'opacity-50 cursor-not-allowed'
                    } bg-white`}
                  >
                    {selected && (
                      <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white rounded-full p-2 shadow-lg">
                        <Check className="w-5 h-5" />
                      </div>
                    )}

                    <div className="aspect-square overflow-hidden p-4">
                      <img
                        src={sticker.image_url}
                        alt={sticker.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-600">
                          {sticker.price.toFixed(2)} MAD
                        </span>
                        {selected && (
                          <span className="text-sm font-semibold text-orange-600">
                            Selected
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedStickers.length === 2 && (
              <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-40">
                <div className="container mx-auto px-4 py-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <p className="text-sm text-gray-600 mb-1">Total Price</p>
                      <p className="text-3xl font-bold text-gray-900">
                        {totalPrice.toFixed(2)} MAD
                      </p>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <ShoppingCart className="w-6 h-6" />
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Complete Your Order
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {totalPrice.toFixed(2)} MAD
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowCheckoutModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}