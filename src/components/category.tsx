"use client"
import Link from "next/link"
import { Ticket, Sticker } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl font-display font-bold text-primary">Select Your Category</h1>
          <p className="text-muted-foreground mt-2 font-montserrat text-lg">Choose what you'd like to shop for</p>
        </div>
      </header>

      {/* Category Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stickers Category */}
          <Link href="/stickers">
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="inline-block p-8 bg-primary/20 rounded-2xl mb-6 group-hover:bg-primary/30 transition-all">
                    <Sticker size={80} className="text-primary" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-primary mb-3">Stickers</h2>
                  <p className="text-muted-foreground font-montserrat text-lg">
                    Browse our collection of premium stickers
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Tickets Category */}
          <Link href="/tickets">
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="inline-block p-8 bg-secondary/20 rounded-2xl mb-6 group-hover:bg-secondary/30 transition-all">
                    <Ticket size={80} className="text-secondary" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-secondary mb-3">Tickets</h2>
                  <p className="text-muted-foreground font-montserrat text-lg">Select your event tickets</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
