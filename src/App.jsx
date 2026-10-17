
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, ArrowRight, Gem, Menu, MessageCircle,
  ShieldCheck, Truck, Handshake, X, MapPin,
  Mail, Phone, Sparkles
} from 'lucide-react'
import './index.css'

const WHATSAPP_NUMBER = '9769636361' // Replace with uncle's number

const collections = [
  {
    name: 'Traditional',
    subtitle: 'Timeless Indian designs',
    image: '/images/traditional_jhumka.png',
  },
  {
    name: 'Oxidised',
    subtitle: 'Bold, everyday style',
    image: '/images/oxidized_jhumka.png',
  },
  {
    name: 'Colourful Stones',
    subtitle: 'A pop of colour',
    image: '/images/colorfulstone_jhumk.png',
  },
  {
    name: 'Statement',
    subtitle: 'Made to stand out',
    image: '/images/statement_jhumka.png',
  },
  {
    name: 'Festive Edit',
    subtitle: 'For special occasions',
    image: '/images/festive_jhumka.png',
  },
]


const products = [
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T1.png',
  },
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T2.png',
  },
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T3.png',
  },
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T4.png',
  },
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T5.png',
  },
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T6.png',
  },
  {
    name: 'Royal Kundan Jhumka',
    category: 'Traditional',
    image: '/images/T7.png',
  },

  {
    name: 'Antique Oxidised Earrings',
    category: 'Oxidised',
    image: '/images/O1.png',
  },
  {
    name: 'Antique Oxidised Earrings',
    category: 'Oxidised',
    image: '/images/O2.png',
  },
  {
    name: 'Antique Oxidised Earrings',
    category: 'Oxidised',
    image: '/images/O3.png',
  },
  {
    name: 'Antique Oxidised Earrings',
    category: 'Oxidised',
    image: '/images/O4.png',
  },
  {
    name: 'Antique Oxidised Earrings',
    category: 'Oxidised',
    image: '/images/O5.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C1.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C2.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C3.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C4.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C5.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C6.png',
  },
  {
    name: 'Multicolour Stone Jhumka',
    category: 'Colourful Stones',
    image: '/images/C7.png',
  },
  {
    name: 'Statement Earrings',
    category: 'Statement',
    image: '/images/S1.png',
  },
  {
    name: 'Statement Earrings',
    category: 'Statement',
    image: '/images/S2.png',
  },
  {
    name: 'Statement Earrings',
    category: 'Statement',
    image: '/images/S3.png',
  },
  {
    name: 'Statement Earrings',
    category: 'Statement',
    image: '/images/S4.png',
  },
  {
    name: 'Statement Earrings',
    category: 'Statement',
    image: '/images/S5.png',
  },
  {
    name: 'Festive Earrings',
    category: 'Festive',
    image: '/images/F1.png',
  },
  {
    name: 'Festive Earrings',
    category: 'Festive',
    image: '/images/F2.png',
  },
  {
    name: 'Festive Earrings',
    category: 'Festive',
    image: '/images/F3.png',
  },
  {
    name: 'Festive Earrings',
    category: 'Festive',
    image: '/images/F4.png',
  },
  {
    name: 'Festive Earrings',
    category: 'Festive',
    image: '/images/F5.png',
  },
  {
    name: 'Festive Earrings',
    category: 'Festive',
    image: '/images/F6.png',
  },
]


function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function WhatsAppButton({ message = 'Hello GNG & CO.! I would like to enquire about your wholesale jewellery collection.', children = 'Enquire on WhatsApp', className = '' }) {
  return (
    <a
      className={`whatsapp-btn ${className}`}
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={17} />
      {children}
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    ['Home', '#home'],
    ['Collections', '#collections'],
    ['Featured Designs', '#designs'],
    ['About Us', '#about'],
    ['Contact', '#contact'],
  ]

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#home" className="brand">
        <span className="brand-mark"><Sparkles size={27} /></span>
        <span>
          <strong>GNG & CO.</strong>
          <small>IMITATION JEWELLERY WHOLESALE</small>
        </span>
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <WhatsAppButton />
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          THE ART OF EVERYDAY ELEGANCE
        </motion.p>


        <h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Timeless Jhumkas
          <br />
          for Every Occasion
        </h1>


        <p className="hero-copy">
          Discover distinctive imitation jewellery designs,
          thoughtfully curated for retailers and jewellery stores.
        </p>

        <a className="gold-btn" href="#collections">
          Explore Collections <ArrowRight size={18} />
        </a>

        <div className="hero-trust">
          <span><ShieldCheck /> Wholesale Focus</span>
          <i />
          <span><Truck /> Bulk Enquiries</span>
          <i />
          <span><Gem /> Distinctive Designs</span>
        </div>
      </div>
      <div className="hero-note">GNG & CO. · WHOLESALE COLLECTION</div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action}
    </div>
  )
}


function Collections() {
  return (
    <section className="collections section-light" id="collections">
      <div className="section-container">
        <div className="collections-intro">
          <div>
            <p className="eyebrow">EXPLORE OUR WORLD</p>
            <h2>
              Collections made<br />
              <em>to stand out.</em>
            </h2>
            <p className="section-description">
              Discover distinctive designs for every occasion,
              curated for jewellery retailers.
            </p>
          </div>

          <a href="#designs" className="collections-view-all">
            View All Collections <ArrowRight size={17} />
          </a>
        </div>

        <div className="collection-grid">
          {collections.map((item, index) => (
            <motion.a
              href="#designs"
              className="collection-card"
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <img
                src={item.image}
                alt={`${item.name} jewellery collection`}
                loading="lazy"
              />

              <div className="collection-shade" />

              <span className="collection-number">
                0{index + 1}
              </span>

              <div className="collection-info">
                <p>{item.subtitle}</p>
                <h3>{item.name}</h3>
                <span className="collection-explore">
                  Explore Collection <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="collections-footer">
          <span>GNG & CO. · WHOLESALE COLLECTIONS</span>
          <span>Distinctive styles. Endless possibilities.</span>
        </div>
      </div>
    </section>
  )
}


function FeaturedDesigns() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Traditional', 'Oxidised', 'Colourful Stones', 'Statement', 'Festive']

  const visibleProducts = filter === 'All'
    ? products
    : products.filter((product) =>
      filter === 'Festive'
        ? product.category === 'Festive'
        : product.category === filter
    )

  return (
    <section className="designs section-light" id="designs">
      <div className="section-container">
        <SectionHeading
          eyebrow="A LITTLE SOMETHING SPECIAL"
          title="Featured Designs"
          description="Explore selected designs from GNG & CO. Ask us about current availability and wholesale rates."
        />

        <div className="filter-row" aria-label="Filter products by category">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.code}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-label">DESIGN PREVIEW</span>
              </div>
              <div className="product-details">
                <div>
                  <p className="product-code">{product.code}</p>
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                </div>
                <WhatsAppButton
                  className="product-whatsapp"
                  message={`Hello GNG & CO.! I am interested in ${product.name} (${product.code}). Please share the wholesale price, minimum order quantity and availability.`}
                >
                  Enquire
                </WhatsAppButton>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="catalogue-note">
          Designs shown are a selection. Contact us to enquire about more styles and current stock.
        </p>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const benefits = [
    { icon: <Gem />, title: 'Distinctive Designs', text: 'A variety of styles for different tastes.' },
    { icon: <Sparkles />, title: 'Fresh Collections', text: 'Discover new designs as they arrive.' },
    { icon: <Truck />, title: 'Wholesale Enquiries', text: 'Discuss bulk quantities directly with us.' },
    { icon: <Handshake />, title: 'Personal Support', text: 'Talk to us about your requirements.' },
  ]

  return (
    <section className="why-section">
      <div className="section-container">
        <SectionHeading eyebrow="THE GNG DIFFERENCE" title="Made for Retailers" />
        <div className="benefit-grid">
          {benefits.map((item) => (
            <div className="benefit" key={item.title}>
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutOwner() {
  const founders = [
    {
      name: "Somtaram Parihar",
      role: "CO-FOUNDER",
      initials: "SP",
      description:
        "Bringing a shared vision for distinctive jewellery and lasting retailer relationships.",
      image: "/images/Owner1.png", 
    },
    {
      name: "Arjun Parihar",
      role: "CO-FOUNDER",
      initials: "AP",
      description:
        "Building trusted wholesale partnerships through thoughtful service and beautiful collections.",
      image: "/images/Owner2.png",
    },
  ]

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-heading">
          <p className="eyebrow">THE PEOPLE BEHIND THE BRAND</p>
          <h2>
            Two founders. <em>One vision.</em>
          </h2>
          <p className="about-intro">
            A shared passion for distinctive designs, trusted partnerships,
            and helping retailers discover jewellery their customers will love.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <article className="founder-card" key={founder.name}>
              <div className={`founder-portrait founder-portrait-${index + 1}`}>
                <div className="founder-orbit founder-orbit-one" />
                <div className="founder-orbit founder-orbit-two" />
                <span className="founder-spark founder-spark-one">✦</span>
                <span className="founder-spark founder-spark-two">✧</span>

                <div className="founder-photo">
                  {founder.image ? (
                    <img src={founder.image} alt={founder.name} loading="lazy" />
                  ) : (
                    <div className="founder-placeholder">
                      <span>{founder.initials}</span>
                      <small>PHOTO COMING SOON</small>
                    </div>
                  )}
                </div>
              </div>

              <p className="founder-role">{founder.role}</p>
              <h3>{founder.name}</h3>
              <p className="founder-description">{founder.description}</p>
              <span className="founder-divider" />
            </article>
          ))}
        </div>

        <div className="about-bottom">
          <p>Elegance in every design. Trust in every partnership.</p>
          <a className="gold-btn" href="#contact">
            Get in Touch <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}


function Contact() {
  const whatsappMessage = encodeURIComponent(
    'Hello GNG & CO.! I am interested in your wholesale jewellery collection. Please share more details.'
  )

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Let's build a beautiful
            <br />
            <em>partnership.</em>
          </h2>

          <p className="contact-intro">
            Discover distinctive jewellery for your store.
            Connect with us for wholesale enquiries, collection
            details and bulk orders.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-details">
            <p className="contact-overline">WE'D LOVE TO HEAR FROM YOU</p>
            <h3>Let's start a conversation.</h3>

            <p className="contact-details-description">
              Whether you're exploring our designs or planning
              your next collection, we're here to help.
            </p>

            <a
              className="contact-info-card"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <MessageCircle size={21} />
              </span>

              <span className="contact-info-text">
                <small>QUICK ENQUIRIES</small>
                <strong>Connect on WhatsApp</strong>
                <span>Ask us about wholesale orders</span>
              </span>

              <ArrowUpRight size={19} />
            </a>
            

            <div className="contact-info-card contact-static-card">
              <span className="contact-icon">
                <MapPin size={21} />
              </span>

              <span className="contact-info-text">
                <small>OUR LOCATION</small>
                <strong>GNG & CO.</strong>
                <span>Plot 6, Nr. Garden At Ground floor, Sant Kabir Main Rd, opp. Shree Ram Complex, Rajkot, Gujarat 360003</span>
              </span>
            </div>

            <div className="contact-info-card contact-static-card">
              <span className="contact-icon">
                <Phone size={21} />
              </span>

              <span className="contact-info-text">
                <small>CALL US</small>
                <strong>Speak with our team</strong>
                <span>Contact us for business enquiries</span>
              </span>
            </div>
          </div>
          

          <div className="contact-cta-card">
            <div className="contact-cta-decoration">
              <Gem size={29} />
            </div>

            <p className="contact-overline">FOR RETAILERS & RESELLERS</p>

            <h3>
              Your next
              <br />
              bestselling design
              <br />
              <em>starts here.</em>
            </h3>

            <p>
              Explore our imitation jewellery collections and
              find styles your customers will love.
            </p>

            <a
              className="contact-whatsapp-button"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} />
              Enquire on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-cta-footer">
              GNG & CO. <span>·</span> WHOLESALE JEWELLERY
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function Footer() {
  const whatsappNumber = '91XXXXXXXXXX'

  const whatsappMessage = encodeURIComponent(
    'Hello GNG & CO., I am interested in your wholesale jewellery collection.'
  )

  return (
    <footer className="luxury-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">
                <Gem size={25} />
              </span>

              <span>
                <strong>GNG & CO.</strong>
                <small>IMITATION JEWELLERY · WHOLESALE</small>
              </span>
            </a>

            <p className="footer-description">
              Distinctive jewellery designs for retailers who
              want every collection to stand out.
            </p>

            <div className="footer-brand-note">
              Crafted for retailers. Chosen for their customers.
            </div>
          </div>

          <div className="footer-links">
            <h4>EXPLORE</h4>
            <a href="#collections">Collections</a>
            <a href="#designs">Featured Designs</a>
            <a href="#about">Our Story</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-contact">
            <h4>GET IN TOUCH</h4>

            <p>
              Have a wholesale enquiry? We would love to hear
              from you.
            </p>

            <a
              className="footer-contact-link"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              <span>
                <strong>WhatsApp Enquiry</strong>
                <small>Connect with our team</small>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <a className="footer-text-link" href="#contact">
              Contact & Location <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="footer-cta">
          <div>
            <p className="eyebrow">LET'S BUILD SOMETHING BEAUTIFUL</p>
            <h3>
              Looking for wholesale jewellery?
            </h3>
            <p>
              Explore distinctive designs for your store.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="footer-cta-button"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GNG & CO. All rights reserved.</p>
          <a href="#home" className="footer-back-top">
            Back to top ↑
          </a>
          <p className="footer-credit">
            Website crafted by{' '}
            <a href="YOUR_WEBSITE_URL" target="_blank" rel="noreferrer">
              Priya Parmar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <FeaturedDesigns />
        <WhyChooseUs />
        <AboutOwner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
