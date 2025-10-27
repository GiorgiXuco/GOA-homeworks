import React from "react";

// Usage: drop this file into your React project (e.g. src/components/SHOPHero.jsx)
// Requirements: TailwindCSS must be configured in the project.
// Put the provided hero image in `public/hero.png` or update the `heroImage` path below.

const heroImage = "/mnt/data/6537558c-230a-4843-a9bb-efea824ef9b4.png"; // update if needed

export default function SHOPHero() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            {/* NAVBAR */}
            <header className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-8">
                            <div className="text-2xl font-extrabold tracking-tight">SHOP.CO</div>

                            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-1">Shop <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.974l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" /></svg></div>
                                <div>On Sale</div>
                                <div>New Arrivals</div>
                                <div>Brands</div>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <div className="relative">
                                    <input
                                        className="w-80 pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                        placeholder="Search for products..."
                                    />
                                    <svg className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.9 14.32a7 7 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600">
                                <button aria-label="cart" className="p-2 rounded-md hover:bg-gray-100">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="10" cy="20" r="1" />
                                        <circle cx="18" cy="20" r="1" />
                                    </svg>
                                </button>
                                <button aria-label="profile" className="p-2 rounded-md hover:bg-gray-100">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 14a6 6 0 00-8 0" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8">
                <section className="relative overflow-hidden mt-10 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* LEFT */}
                        <div className="py-20 px-6 lg:px-12">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
                                FIND CLOTHES
                                <br />
                                THAT MATCHES
                                <br />
                                YOUR STYLE
                            </h1>

                            <p className="mt-6 text-gray-500 max-w-xl">
                                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </p>

                            <div className="mt-8">
                                <button className="inline-block bg-black text-white rounded-full px-6 py-3 text-sm font-medium hover:opacity-95">Shop Now</button>
                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl">
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">200+</div>
                                    <div className="text-xs text-gray-500 mt-2">International Brands</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">2,000+</div>
                                    <div className="text-xs text-gray-500 mt-2">High-Quality Products</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">30,000+</div>
                                    <div className="text-xs text-gray-500 mt-2">Happy Customers</div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT - image + decorative shapes */}
                        <div className="relative h-96 lg:h-[560px]">
                            {/* decorative star shapes */}
                            <svg className="absolute right-32 top-12 w-12 h-12 text-black opacity-90" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l1.9 4.7L19 8l-4.1 2.3L12 15l-2.9-4.7L5 8l5.1-1.3L12 2z" />
                            </svg>
                            <svg className="absolute left-8 top-48 w-8 h-8 text-black opacity-90" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l1.9 4.7L19 8l-4.1 2.3L12 15l-2.9-4.7L5 8l5.1-1.3L12 2z" />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-end">
                                <div className="w-3/4 lg:w-[650px] h-full flex items-end justify-end">
                                    <img src={heroImage} alt="models" className="object-contain h-full translate-x-8 lg:translate-x-16" />
                                </div>
                            </div>

                            {/* subtle right-side rounded bg */}
                            <div className="absolute inset-y-0 right-0 w-1/2 bg-white"></div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer spacing */}
            <div className="h-24" />
        </div>
    );
}
