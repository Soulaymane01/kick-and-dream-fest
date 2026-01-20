import { useState, useEffect } from 'react';
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, X } from 'lucide-react';
import ticketsData from "../data/tickets.json";
import type { Ticket } from '../lib/types';
import { redirectToTicketsForm } from '../lib/googleForms';

interface TicketsPageProps {
  onBack: () => void;
}

export default function TicketsPage({ onBack }: TicketsPageProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const activeTickets = ticketsData.filter((s: any) => s.available === true);
    setTickets(activeTickets);
    setLoading(false);
  }, []);

  const increaseQuantity = () => {
    if (selectedTicket && quantity < selectedTicket.max_quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelectTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setQuantity(1);
  };

  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTicket) {
      redirectToTicketsForm(selectedTicket, quantity, name, phone);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
            Choose Your Tickets
          </h1>
          <p className="text-lg text-gray-600">
            Select a tier and choose your quantity
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        ) : (
          <>
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Tier</h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
                {tickets.map((ticket) => {
                  const isSelected = selectedTicket?.id === ticket.id;

                  return (
                    <button
                      key={ticket.id}
                      onClick={() => handleSelectTicket(ticket)}
                      className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                        isSelected
                          ? 'ring-4 ring-blue-500 shadow-xl scale-105'
                          : 'hover:shadow-lg hover:scale-102 shadow-md'
                      } bg-white p-6 w-full`}
                    >
                      {isSelected && (
                        <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg">
                          <Check className="w-5 h-5" />
                        </div>
                      )}

                      <div className="text-center">
                        <div className="w-full h-full mb-4 overflow-hidden rounded-lg">
                          <img
                            src={ticket.ticket_url}
                            alt={ticket.tier}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {ticket.tier}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                          {ticket.description}
                        </p>
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {ticket.price.toFixed(2)} MAD
                        </div>
                        <p className="text-xs text-gray-500">per ticket</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Quantity Selection Modal */}
      {selectedTicket && !showCheckoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setSelectedTicket(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Select Quantity
            </h2>

            <div className="flex items-center justify-center gap-6 mb-8">
              <button
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Minus className="w-6 h-6 text-gray-700" />
              </button>

              <div className="text-center min-w-[100px]">
                <div className="text-5xl font-bold text-gray-900">
                  {quantity}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {quantity === 1 ? 'ticket' : 'tickets'}
                </div>
              </div>

              <button
                onClick={increaseQuantity}
                disabled={quantity >= selectedTicket.max_quantity}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Plus className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mb-6">
              Maximum {selectedTicket.max_quantity} tickets per order
            </p>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-600">Total Price</p>
                  <p className="text-4xl font-bold text-gray-900">
                    {totalPrice.toFixed(2)} MAD
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">You selected</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {quantity} × {selectedTicket.tier}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-6 h-6" />
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Form Modal */}
      {showCheckoutModal && selectedTicket && (
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Ticket:</span>
                  <span className="font-semibold">{selectedTicket.tier}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-semibold">{quantity}</span>
                </div>
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
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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