import React from "react"

export const Component = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-black text-white font-sans">
                {/* Header/Navbar */}
                <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-md">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="material-symbols-outlined text-yellow-500 text-3xl">balance</span>
                            <h1 className="text-2xl font-bold tracking-tight">
                                <span className="text-yellow-500">Legal</span>Consult
                            </h1>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <a
                                href="#"
                                className="font-medium hover:text-yellow-500 transition-colors duration-200 border-b-2 border-yellow-500"
                            >
                                Home
                            </a>
                            <a href="#" className="font-medium hover:text-yellow-500 transition-colors duration-200">
                                Services
                            </a>
                            <a href="#" className="font-medium hover:text-yellow-500 transition-colors duration-200">
                                Attorneys
                            </a>
                            <a href="#" className="font-medium hover:text-yellow-500 transition-colors duration-200">
                                Resources
                            </a>
                            <a href="#" className="font-medium hover:text-yellow-500 transition-colors duration-200">
                                About
                            </a>
                            <a href="#" className="font-medium hover:text-yellow-500 transition-colors duration-200">
                                Contact
                            </a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="hidden md:block px-5 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors duration-200">
                                Consultation
                            </button>
                            <details className="relative md:hidden">
                                <summary className="list-none cursor-pointer p-2">
                                    <span className="material-symbols-outlined text-2xl text-white hover:text-yellow-500 transition-colors duration-200">
                                        menu
                                    </span>
                                </summary>
                                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden z-10">
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Services
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Attorneys
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Resources
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            About
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative py-20 bg-gray-950 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Expert Legal <span className="text-yellow-500">Solutions</span> For Your Complex
                                    Issues
                                </h2>
                                <p className="text-gray-300 text-lg mb-8">
                                    Our team of experienced attorneys provides comprehensive legal consultancy services
                                    tailored to your specific needs.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-all duration-200 transform hover:-translate-y-1">
                                        Free Consultation
                                    </button>
                                    <button className="px-6 py-3 border border-yellow-500 text-white font-semibold rounded hover:bg-gray-900 transition-all duration-200 transform hover:-translate-y-1">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Legal professionals in a meeting"
                                    className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
                                    keywords="legal consultation, law office, attorneys meeting, professional legal team"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-black bg-opacity-80 p-6 rounded-lg shadow-xl border border-gray-800">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-yellow-500 text-4xl font-bold">98%</span>
                                        <p className="text-sm">Success rate in client cases</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/10 to-transparent"></div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="inline-block px-3 py-1 bg-gray-900 text-yellow-500 rounded-full text-sm font-medium mb-4">
                                Our Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Legal Solutions</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                We provide a wide range of legal services to meet the diverse needs of our clients, from
                                individuals to corporations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service Card 1 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4">person</span>
                                <h3 className="text-xl font-semibold mb-3">Personal Legal Advice</h3>
                                <p className="text-gray-400 mb-4">
                                    Personalized legal consultation for individuals facing various legal challenges in
                                    their daily lives.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Learn more
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            {/* Service Card 2 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4">
                                    business
                                </span>
                                <h3 className="text-xl font-semibold mb-3">Corporate Law</h3>
                                <p className="text-gray-400 mb-4">
                                    Comprehensive legal services for businesses, including formation, compliance,
                                    contracts, and dispute resolution.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Learn more
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            {/* Service Card 3 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4">gavel</span>
                                <h3 className="text-xl font-semibold mb-3">Litigation Services</h3>
                                <p className="text-gray-400 mb-4">
                                    Expert representation in court proceedings, arbitration, and other dispute
                                    resolution mechanisms.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Learn more
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            {/* Service Card 4 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4">
                                    real_estate_agent
                                </span>
                                <h3 className="text-xl font-semibold mb-3">Real Estate Law</h3>
                                <p className="text-gray-400 mb-4">
                                    Legal advice and representation for property transactions, leases, development
                                    projects, and property disputes.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Learn more
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            {/* Service Card 5 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4">
                                    family_restroom
                                </span>
                                <h3 className="text-xl font-semibold mb-3">Family Law</h3>
                                <p className="text-gray-400 mb-4">
                                    Sensitive legal support for family matters including divorce, child custody,
                                    adoption, and domestic relations.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Learn more
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            {/* Service Card 6 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4">
                                    description
                                </span>
                                <h3 className="text-xl font-semibold mb-3">Contract Law</h3>
                                <p className="text-gray-400 mb-4">
                                    Expert drafting, review, and negotiation of contracts to protect your interests and
                                    ensure legal compliance.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Learn more
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-gray-950">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="inline-block px-3 py-1 bg-gray-900 text-yellow-500 rounded-full text-sm font-medium mb-4">
                                Our Team
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Attorneys</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Our team of highly qualified legal professionals is dedicated to providing exceptional
                                service and achieving the best outcomes for our clients.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Attorney 1 */}
                            <div className="group">
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                        alt="Legal professional portrait"
                                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        keywords="lawyer portrait, attorney, legal professional, law expert"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <div className="flex justify-center space-x-3">
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <span className="material-symbols-outlined text-lg">mail</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <i className="fa-brands fa-linkedin text-lg"></i>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <i className="fa-brands fa-twitter text-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold">Jonathan Mitchell</h3>
                                <p className="text-yellow-500 mb-2">Corporate Law Specialist</p>
                                <p className="text-gray-400">
                                    With over 15 years of experience in corporate law and mergers & acquisitions.
                                </p>
                            </div>

                            {/* Attorney 2 */}
                            <div className="group">
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                                        alt="Female attorney portrait"
                                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        keywords="female lawyer, woman attorney, professional attorney, legal counsel"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <div className="flex justify-center space-x-3">
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <span className="material-symbols-outlined text-lg">mail</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <i className="fa-brands fa-linkedin text-lg"></i>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <i className="fa-brands fa-twitter text-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold">Sophia Rodriguez</h3>
                                <p className="text-yellow-500 mb-2">Family Law Attorney</p>
                                <p className="text-gray-400">
                                    Dedicated to helping families navigate complex legal challenges with compassion.
                                </p>
                            </div>

                            {/* Attorney 3 */}
                            <div className="group">
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                        alt="Professional lawyer portrait"
                                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        keywords="attorney portrait, male lawyer, legal expert, law professional"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <div className="flex justify-center space-x-3">
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <span className="material-symbols-outlined text-lg">mail</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <i className="fa-brands fa-linkedin text-lg"></i>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                                                >
                                                    <i className="fa-brands fa-twitter text-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold">David Chen</h3>
                                <p className="text-yellow-500 mb-2">Litigation Expert</p>
                                <p className="text-gray-400">
                                    A seasoned litigator with a strong track record in complex dispute resolution.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="px-6 py-3 border border-yellow-500 text-white font-semibold rounded hover:bg-gray-900 transition-all duration-200 transform hover:-translate-y-1">
                                View All Attorneys
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="inline-block px-3 py-1 bg-gray-900 text-yellow-500 rounded-full text-sm font-medium mb-4">
                                Testimonials
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                We take pride in providing excellent service and achieving the best possible outcomes
                                for our clients.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-500">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                    </span>
                                </div>
                                <blockquote className="mb-6 text-gray-300">
                                    "The legal team provided exceptional guidance through our corporate restructuring.
                                    Their expertise and attention to detail saved us from potential legal pitfalls."
                                </blockquote>
                                <div className="flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjB0ZXN0aW1vbmlhbHxlbnwwfHx8fDE3NTk5MjYwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Client portrait"
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        keywords="client testimonial, customer portrait, satisfied client"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Robert Johnson</h4>
                                        <p className="text-gray-400 text-sm">CEO, Tech Innovations Inc.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-500">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                    </span>
                                </div>
                                <blockquote className="mb-6 text-gray-300">
                                    "I was facing a complicated divorce, but my attorney handled everything with
                                    professionalism and empathy. The outcome exceeded my expectations."
                                </blockquote>
                                <div className="flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1753161024053-4ef8b6237973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjbGllbnR8ZW58MHx8fHwxNzU5ODU3OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Client portrait"
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        keywords="female client, woman testimonial, customer review"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Emily Williams</h4>
                                        <p className="text-gray-400 text-sm">Marketing Director</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-500">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star_half</span>
                                    </span>
                                </div>
                                <blockquote className="mb-6 text-gray-300">
                                    "Their real estate legal team helped us navigate a complex property acquisition. The
                                    attention to detail and prompt communication were impressive."
                                </blockquote>
                                <div className="flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1714164929735-fc3d003d9809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY2xpZW50fGVufDB8fHx8MTc1OTg1Nzk1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Client portrait"
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        keywords="male client, business client, testimonial portrait"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Michael Thompson</h4>
                                        <p className="text-gray-400 text-sm">Real Estate Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gray-950 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800 max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-5 gap-8 items-center">
                                <div className="md:col-span-3">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                        Ready to Solve Your Legal Challenges?
                                    </h2>
                                    <p className="text-gray-300 mb-6">
                                        Schedule a consultation with one of our expert attorneys to discuss your
                                        specific legal needs. We're here to help you navigate complex legal matters with
                                        confidence.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-all duration-200 transform hover:-translate-y-1">
                                            Book Consultation
                                        </button>
                                        <button className="px-6 py-3 border border-yellow-500 text-white font-semibold rounded hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-1 flex items-center">
                                            <span className="material-symbols-outlined mr-2">call</span>
                                            Call Us Now
                                        </button>
                                    </div>
                                </div>
                                <div className="md:col-span-2 relative">
                                    <div className="bg-yellow-500 rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mx-auto transform rotate-3 hover:rotate-6 transition-transform duration-300">
                                        <div className="bg-black rounded-full w-44 h-44 md:w-60 md:h-60 flex flex-col items-center justify-center text-center p-6">
                                            <span className="text-yellow-500 text-5xl font-bold">24/7</span>
                                            <p className="text-white font-medium mt-2">
                                                Emergency Legal Support Available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                </section>

                {/* Footer */}
                <footer className="bg-black pt-16 pb-6 border-t border-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            <div>
                                <div className="flex items-center space-x-2 mb-6">
                                    <span className="material-symbols-outlined text-yellow-500 text-3xl">balance</span>
                                    <h2 className="text-2xl font-bold tracking-tight">
                                        <span className="text-yellow-500">Legal</span>Consult
                                    </h2>
                                </div>
                                <p className="text-gray-400 mb-6">
                                    Providing expert legal consultancy services for individuals and businesses since
                                    2005.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Attorneys
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            Corporate Law
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
