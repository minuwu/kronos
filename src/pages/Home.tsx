import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  BarChart3, 
  Wind,
  Smartphone,
  Layers
} from 'lucide-react';
import heroImage from '../assets/hero.png';

const Home = () => {
  const features = [
    {
      icon: <Smartphone className="feature-icon" />,
      title: "Sensor Control",
      description: "Flip your phone into YAW to physically run and reset the hourglass, utilizing real-time gyroscope data."
    },
    {
      icon: <Layers className="feature-icon" />,
      title: "Premium Skins",
      description: "Choose from Classic Wood, Marble, Crystal, and our signature 'K' shaped glass body."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Flexible Timing",
      description: "Set any duration from 1 minute to 12 hours. Perfect for Pomodoro or deep work blocks."
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Focus Modes",
      description: "Built-in Pomodoro timer, custom sessions, and streak tracking to build better habits."
    },
    {
      icon: <Wind className="feature-icon" />,
      title: "Ambient Tools",
      description: "Pair your timer with calming ambient sounds like rain, ocean, fireplace, or white noise."
    },
    {
      icon: <BarChart3 className="feature-icon" />,
      title: "Statistics",
      description: "Track your focused time, daily streaks, and productivity trends with detailed reports."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Time <br /> Like Never Before
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kronos is a stunning, immersive hourglass timer app that transforms how you focus, work, and live. The first digital timer that runs exactly like a physical hourglass.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: '40px' }}
          >
            <button className="btn-primary">Get Kronos Now</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img 
              src={heroImage} 
              alt="Kronos Hourglass" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '32px',
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.2)'
              }} 
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <h2 className="section-title">Why Kronos?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="glass-card feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="feature-title">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Dive Section */}
      <section style={{ padding: '100px 0', background: 'rgba(212, 175, 55, 0.03)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>The Psychology of the Hourglass</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
            Unlike digital numbers, an hourglass shows time both passing and remaining. You can literally see your progress. 
            It creates a psychological difference that helps many users stay focused longer and feel less anxious about time.
          </p>
          <div className="glass-card" style={{ padding: '40px', display: 'inline-block' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Perfect For:</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', textAlign: 'left' }}>
              <li>✔ Deep Work & Focus</li>
              <li>✔ Pomodoro Technique</li>
              <li>✔ Meditation & Breathing</li>
              <li>✔ Study Sessions</li>
              <li>✔ Cooking & Workouts</li>
              <li>✔ Screen Time Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Ready to own your time?</h2>
        <p style={{ marginBottom: '40px' }}>Join thousands of users who have rediscovered the art of timing.</p>
        <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '18px 36px' }}>Download for iOS & Android</button>
      </section>
    </div>
  );
};

export default Home;
