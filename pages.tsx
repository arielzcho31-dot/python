"use client";

import Image from "next/image";
import React from "react";

// A simple Tailwind + Next.js page.tsx that recreates the Event Hopper layout
// Replace the /images/*.jpg paths with your real image files in the public/ folder.

const events = [
  {
    id: 1,
    title: "Summer Music Fest",
    date: "August 15, 2024",
    location: "Sunset Park, New York, NY",
    tag: "Music",
    price: "$75",
    img: "/images/event1.jpg",
  },
  {
    id: 2,
    title: "Tech Innovators Conference",
    date: "September 20, 2024",
    location: "Convention Center, San Francisco, CA",
    tag: "Tech",
    price: "$499",
    img: "/images/event2.jpg",
  },
  {
    id: 3,
    title: "Artisan Food Fair",
    date: "July 28, 2024",
    location: "Market Square, Chicago, IL",
    tag: "Food",
    price: "$15",
    img: "/images/event3.jpg",
  },
  {
    id: 4,
    title: "Championship Basketball Finals",
    date: "August 5, 2024",
    location: "United Center, Chicago, IL",
    tag: "Sports",
    price: "$150",
    img: "/images/event4.jpg",
  },
  {
    id: 5,
    title: "Modern Art Exhibition",
    date: "September 1, 2024",
    location: "Art Institute, Chicago, IL",
    tag: "Arts",
    price: "$25",
    img: "/images/event5.jpg",
  },
  {
    id: 6,
    title: "Indie Film Festival",
    date: "October 10, 2024",
    location: "Indie Cinema, Austin, TX",
    tag: "Arts",
    price: "$20",
    img: "/images/event6.jpg",
  },
  {
    id: 7,
    title: "Rock the Park",
    date: "July 20, 2024",
    location: "Millennium Park, Chicago, IL",
    tag: "Music",
    price: "Free",
    img: "/images/event7.jpg",
  },
  {
    id: 8,
    title: "Marathon 2024",
    date: "October 13, 2024",
    location: "Grant Park, Chicago, IL",
    tag: "Sports",
    price: "Free",
    img: "/images/event8.jpg",
  },
];

// The user said the order is wrong and the SECOND image must appear FIRST.
// We'll produce an orderedEvents array where the second element of `events` becomes the first.
const orderedEvents = React.useMemo(() => {
  // clone array to avoid mutation
  const copy = [...events];
  if (copy.length >= 2) {
    const second = copy.splice(1, 1); // remove second
    return [...second, ...copy]; // put second first
  }
  return copy;
}, []);

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Topbar */}
      <header className="bg-sky-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-sky-600 rounded flex items-center justify-center text-white font-bold">EH</div>
            <nav className="flex gap-6 text-slate-700 font-medium">
              <a href="#">Home</a>
              <a href="#">My Tickets</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a className="text-sm text-slate-600">Log In</a>
            <button className="bg-sky-400 text-white px-4 py-2 rounded-md text-sm">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="h-64 md:h-96 w-full bg-black/60 flex items-center justify-center" style={{ backgroundImage: `url('/images/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg">Discover Your Next Experience</h1>
            <p className="mt-3 text-sm md:text-lg opacity-90">From concerts to conferences, find and book tickets to the best events in town.</p>

            <div className="mt-6 mx-auto w-full max-w-xl">
              <div className="relative">
                <input className="w-full rounded-xl px-4 py-3 pl-12 text-slate-700 shadow-md" placeholder="Search events by name, location..." />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events / Filters */}
      <section className="max-w-7xl mx-auto px-6 py-12 -mt-8">
        <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
        <div className="mt-4 flex justify-center gap-3">
          {['All', 'Music', 'Sports', 'Arts', 'Tech', 'Food'].map((f) => (
            <button key={f} className={`px-4 py-2 rounded-full text-sm ${f === 'All' ? 'bg-sky-400 text-white' : 'bg-white border'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderedEvents.map((e) => (
            <article key={e.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-40 sm:h-44 md:h-48 w-full">
                {/* Next/Image gives better layout but it's fine with img too */}
                <Image src={e.img} alt={e.title} fill style={{ objectFit: 'cover' }} />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">{e.title}</h3>
                <div className="mt-3 text-sm text-slate-500 space-y-1">
                  <div className="flex items-center gap-2">📅 <span>{e.date}</span></div>
                  <div className="flex items-center gap-2">📍 <span>{e.location}</span></div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 rounded-full text-xs border bg-slate-50">{e.tag}</span>
                    <div className="text-sky-600 font-bold">{e.price}</div>
                  </div>

                  <button className="bg-sky-500 text-white px-3 py-2 rounded-md text-sm">Get Tickets</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-50 border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded flex items-center justify-center text-white font-bold">EH</div>
            <div className="text-sm">© 2025 Event Hopper</div>
          </div>

          <nav className="flex gap-6 text-sm text-slate-600">
            <a>About Us</a>
            <a>Contact</a>
            <a>Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
