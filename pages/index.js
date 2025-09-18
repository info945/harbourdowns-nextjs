import { useState, useEffect } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const galleryImages = [
    { query: 'oak,wood,flooring', label: 'Oak' },
    { query: 'parquet,wood,floor', label: 'Parquet' },
    { query: 'herringbone,wood,floor', label: 'Herringbone' },
    { query: 'modern,interior,wood,floor', label: 'Oak' },
    { query: 'light,oak,wood,floor', label: 'Oak' },
    { query: 'wide,plank,wood,floor', label: 'Wide Plank' },
  ]

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.label === filter)

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <div className="flex flex-col items-start leading-tight">
            <span className="text-2xl logo-serif tracking-wide text-[#4A4A48] uppercase">Harbour & Downs</span>
            <span className="text-sm logo-serif tracking-[0.3em] text-[#7A7A78] uppercase">Flooring</span>
          </div>

          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#about" className="hover:text-[#4A4A48]">About</a>
            <a href="#services" className="hover:text-[#4A4A48]">Services</a>
            <a href="#gallery" className="hover:text-[#4A4A48]">Gallery</a>
            <a href="#contact" className="hover:text-[#4A4A48]">Contact</a>
          </nav>

          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            {menuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-gray-700 font-medium">
            <a href="#about" className="block" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" className="block" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#gallery" className="block" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

{/* Hero */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <img
    src="https://source.unsplash.com/1600x900/?wood,floor,interior"
    alt="Wood flooring interior"
    className="absolute inset-0 w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.src = "https://picsum.photos/1600/900?random=40";
    }}
  />
  <div className="absolute inset-0 bg-black opacity-20"></div>
  <div className="relative z-10 text-center text-white p-6 mt-20">
    <h1 className="text-5xl font-bold mb-4">Harbour & Downs Flooring</h1>
    <p className="text-xl mb-6">Expert consultancy in premium wood flooring solutions</p>
    <button className="bg-[#E5DFD5] text-gray-900 px-6 py-3 rounded-md">Book a Consultation</button>
  </div>
</section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://source.unsplash.com/600x400/?oak,wood,flooring" alt="Wood flooring example" className="rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#4A4A48]">About Us</h2>
          <p className="text-lg text-gray-700">At Harbour & Downs Flooring, we bring years of expertise in guiding clients through the selection, design, and installation of timeless wood and stone flooring. From engineered oak to bespoke herringbone patterns, we ensure solutions that balance beauty, durability, and practicality.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 md:px-20 bg-[#F0ECE6]">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#4A4A48]">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#4A4A48]">Consultation</h3>
            <p className="text-gray-600">Personalized guidance to choose the right wood flooring for your space.</p>
          </div>
          <div className="rounded-2xl shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#4A4A48]">Design Support</h3>
            <p className="text-gray-600">Expert advice on layout, tone, and herringbone or plank styles.</p>
          </div>
          <div className="rounded-2xl shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#4A4A48]">Project Oversight</h3>
            <p className="text-gray-600">We ensure a seamless installation process from start to finish.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#4A4A48]">Project Gallery</h2>

        <div className="flex justify-center space-x-4 mb-8">
          {["all", "Oak", "Parquet", "Herringbone", "Wide Plank"].map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-2 ${filter === cat ? 'bg-[#4A4A48] text-white' : 'bg-white text-[#4A4A48] border'}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <img key={i} src={`https://source.unsplash.com/400x300/?${img.query}`} alt={`${img.label} flooring project`} className="rounded-xl shadow-lg" />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-[#4A4A48] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6 text-gray-300">Contact Harbour & Downs Flooring today to discuss your project and receive expert advice.</p>

        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-gray-800">
          <p className="mb-4"><strong>Email:</strong> <a href="mailto:info@harbourdowns.com" className="text-[#4A4A48] hover:underline">info@harbourdowns.com</a></p>
          <p><strong>Telephone:</strong> <a href="tel:01243256716" className="text-[#4A4A48] hover:underline">01243 256716</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 bg-[#EAE6DF]">
        <p>© {new Date().getFullYear()} Harbour & Downs Flooring. All rights reserved.</p>
      </footer>
    </div>
  )
}
