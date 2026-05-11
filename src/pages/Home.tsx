import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  BarChart3, 
  Wind,
  Smartphone,
  Layers
} from 'lucide-react';
import iconImage from '../assets/icon.png';
import './Home.css';

const Home = () => {
  const storeLinks = {
    playstore: "https://play.google.com/store/apps/details?id=com.minuwu.kronos",
    appstore: "https://apps.apple.com/app/com.minuwu.kronos"
  };

  const features = [
// ... existing features code ...
    {
      icon: <Smartphone size={24} />,
      title: "Sensor Control",
      description: "Flip your phone into YAW to physically run and reset the hourglass, utilizing real-time gyroscope data."
    },
    {
      icon: <Layers size={24} />,
      title: "Premium Skins",
      description: "Choose from Classic Wood, Marble, Crystal, and our signature 'K' shaped glass body."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Timing",
      description: "Set any duration from 1 minute to 12 hours. Perfect for Pomodoro or deep work blocks."
    },
    {
      icon: <Zap size={24} />,
      title: "Focus Modes",
      description: "Built-in Pomodoro timer, custom sessions, and streak tracking to build better habits."
    },
    {
      icon: <Wind size={24} />,
      title: "Ambient Tools",
      description: "Pair your timer with calming ambient sounds like rain, ocean, fireplace, or white noise."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Statistics",
      description: "Track your focused time, daily streaks, and productivity trends with detailed reports."
    }
  ];

  const romanBenefits = [
    { num: "I", title: "Deep Work", desc: "Eliminate digital distractions and enter a flow state with a physical focus anchor." },
    { num: "II", title: "Pomodoro", desc: "Scientific 25/5 intervals designed to maximize cognitive endurance." },
    { num: "III", title: "Meditation", desc: "Visual silence. No blinking lights, just the steady flow of time." },
    { num: "IV", title: "Screen Time", desc: "A tangible way to manage your digital life without looking at another screen." }
  ];

  const theatricalTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="sunburst" />
        <div className="container">
          <div className="vertical-line" />
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={theatricalTransition}
          >
            THE ART OF <br /> <span className="text-gold">TIMING</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...theatricalTransition, delay: 0.2 }}
          >
            Kronos is an immersive hourglass experience that transforms how you focus. 
            Crafted with mathematical precision for the modern age.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...theatricalTransition, delay: 0.4 }}
          >
            <a href="#download" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Begin Your Session
            </a>
          </motion.div>
          
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...theatricalTransition, delay: 0.6 }}
          >
            <div className="hero-app-icon">
              <img 
                src={iconImage} 
                alt="Kronos Icon" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <div className="vertical-line" />
            <h2 className="section-title">THE INSTRUMENTS</h2>
            <div className="divider-line" />
          </div>
          
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="art-deco-card feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...theatricalTransition, delay: index * 0.1 }}
              >
                <div className="card-ghost-icon">
                  {feature.icon}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="diamond-icon">
                    {feature.icon}
                  </div>
                  <h3 className="display-text" style={{ marginBottom: '16px' }}>{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" style={{ background: 'var(--bg-accent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="vertical-line" />
          <h2 className="section-title">PHILOSOPHY</h2>
          <p className="text-champagne philosophy-text">
            Unlike digital numbers, an hourglass shows time both passing and remaining. 
            It is a visual symphony of gravity and physics that anchors your attention to the present moment.
          </p>
          
          <div className="roman-list">
            {romanBenefits.map((benefit, i) => (
              <div key={i} className="roman-item">
                <span className="roman-numeral">{benefit.num}</span>
                <div className="roman-item-content">
                  <h4 className="display-text">{benefit.title}</h4>
                  <p className="text-muted">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="cta-section" style={{ background: 'var(--bg-accent)' }}>
        <div className="sunburst" style={{ opacity: 0.5 }} />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="vertical-line" />
          <h2 className="hero-title cta-title">TAKE COMMAND <br /> OF YOUR <span className="text-gold">TIME</span></h2>
          <p className="hero-subtitle" style={{ marginBottom: '24px' }}>Join the elite circle of focused individuals.</p>
          <p className="text-muted" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px', fontSize: '0.85rem' }}>
            Available Now On
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div 
              className="btn-primary" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', textDecoration: 'none', opacity: 0.5, cursor: 'not-allowed' }}
              title="Coming soon to the App Store"
            >
              <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-1.7-111.9zM263 30c14.2-18.5 25-41.3 22.4-65.1-19.5 1-43.1 13-57.1 29.5-12.7 14.9-24.1 38.3-21 61.2 21.6 1.7 43.1-9 55.7-25.6z"/>
              </svg>
              App Store (Soon)
            </div>
            <a 
              href={storeLinks.playstore} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', textDecoration: 'none' }}
            >
              <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              Play Store
            </a>
          </div>
          <div className="vertical-line" style={{ marginTop: '80px', marginBottom: 0, height: '120px' }} />
          <div className="glow-divider" />
        </div>
      </section>
    </div>
  );
};

export default Home;
