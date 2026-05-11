import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Infinity as InfinityIcon,
  Ticket,
  MessageSquare,
  Wrench,
  ShieldCheck,
  Beaker,
  Palette,
  //   ChevronDown,
  //   ChevronUp,
  //   Bitcoin,
  //   Mail
} from 'lucide-react';
// import binanceQr from '../assets/binance-qr.png';
import './Partner.css';


// Summary of changes:
// src/pages/Partner.tsx:
// Removed useState and AnimatePresence from imports, as they became unused after the Binance payout section was hidden.

const Partner = () => {
  // const [showBinance, setShowBinance] = useState(false);
  useEffect(() => {
    // Load Lemon Squeezy script
    const script = document.createElement('script');
    script.src = 'https://assets.lemonsqueezy.com/lemon.js';
    script.defer = true;
    script.onload = () => {
      // @ts-expect-error - Lemon Squeezy script loads globally
      if (window.createLemonSqueezy) {
        // @ts-expect-error - Lemon Squeezy script loads globally
        window.createLemonSqueezy();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  const theatricalTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  const perks = [
    {
      icon: <InfinityIcon size={24} />,
      title: "Lifetime Premium",
      description: "Full, uninterrupted access to all premium features of Kronos forever on your choice of platform (iOS or Android). No subscriptions, ever."
    },
    {
      icon: <Ticket size={24} />,
      title: "The Viral Pack",
      description: "5 exclusive promo codes for a 1-month premium subscription to give to your friends or colleagues."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Private Discord Access",
      description: "Entry into the locked #founders-lounge to interact directly with the team."
    },
    {
      icon: <Wrench size={24} />,
      title: "Direct Influence",
      description: "Priority support and direct input on future features, including upcoming hardware sensor calibrations."
    },
    {
      icon: <Beaker size={24} />,
      title: "Early Access Testing",
      description: "Exclusive access to our private Google Group for Kronos Founding Members to test the latest releases before anyone else."
    },
    {
      icon: <Palette size={24} />,
      title: "2 Exclusive Premium Skins",
      description: "Unlock 2 premium skins of your choice for free ($9.99 ea.). Your founder's status grants you instant access to these high-end aesthetic upgrades."
    }
  ];

  const VALUES = {
    lifetime: 100,
    monthly: 5,
    skins: 19.98,
    currentPrice: 25
  };
  const totalValue = VALUES.lifetime + (VALUES.monthly * 5) + VALUES.skins;

  return (
    <div className="partner-page">
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
            BECOME A KRONOS <br /> <span className="text-gold">FOUNDING PARTNER</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...theatricalTransition, delay: 0.2 }}
          >
            A strictly limited-time crowdfunding event to help launch the most accurate physics-based productivity timer on the App Store.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...theatricalTransition, delay: 0.4 }}
          >
            <a
              href="https://kronos-premium.lemonsqueezy.com/checkout/buy/4bfb8719-7b8b-4de4-acc0-1f3510705915?embed=1&media=0"
              className="btn-primary lemonsqueezy-button"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Back the Project - $25
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <div className="vertical-line" />
            <h2 className="section-title">THE MISSION</h2>
            <div className="divider-line" />
          </div>
          <div className="art-deco-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <h3 className="display-text" style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--gold)' }}>Why We Are Crowdfunding</h3>
            <p className="text-muted" style={{ marginBottom: '24px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-champagne)', opacity: 0.8 }}>
              Kronos is ready. The physics engine is dialed in, the UI is polished, and the core features are locked. Now, we are preparing for a global release.
            </p>
            <p className="text-muted" style={{ marginBottom: '24px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-champagne)', opacity: 0.8 }}>
              To ensure the highest level of trust and app store compliance, we are publishing Kronos under a verified Business/Organization Apple Developer account. This process requires registering a formal entity, obtaining a DUNS number, and covering initial server infrastructure.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-champagne)', opacity: 0.8 }}>
              Instead of taking outside investment, we are offering a one-time Founder's Lifetime Deal to our earliest supporters to cover these specific launch costs. Once the app is live on the App Store, this deal will be removed forever.
            </p>
          </div>
        </div>
      </section>

      {/* The Perks */}
      <section className="perks-section">
        <div className="container">
          <div className="section-header">
            <div className="vertical-line" />
            <h2 className="section-title">THE FOUNDER'S PACKAGE</h2>
            <p className="hero-subtitle" style={{ fontSize: '1.5rem', marginBottom: '40px', color: 'var(--gold)' }}>$25 Minimum</p>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.1rem', color: 'var(--text-champagne)', opacity: 0.9 }}>
              By funding the launch, you aren't just buying an app; you are joining the development journey. Here is what you receive:
            </p>
          </div>

          <div className="feature-grid">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                className="art-deco-card feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...theatricalTransition, delay: index * 0.1 }}
              >
                <div className="card-ghost-icon">
                  {perk.icon}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="diamond-icon">
                    {perk.icon}
                  </div>
                  <h3 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{perk.title}</h3>
                  <p className="text-muted">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="checkout-section">
        <div className="container">
          <div className="section-header">
            <div className="vertical-line" />
            <h2 className="section-title">SECURE YOUR SPOT</h2>
            <div className="divider-line" />
          </div>

          <div className="art-deco-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '48px 24px' }}>
            <ShieldCheck size={48} color="var(--gold)" style={{ margin: '0 auto 24px' }} />
            <h3 className="display-text" style={{ fontSize: '2rem', marginBottom: '16px' }}>FUND THE LAUNCH</h3>

            <div style={{ margin: '40px 0' }}>
              {/* Placeholder for Gumroad/Lemon Squeezy */}
              <div style={{
                background: 'rgba(212, 175, 55, 0.05)',
                border: '1px dashed var(--border-gold)',
                padding: '40px 20px',
                borderRadius: '4px',
                marginBottom: '24px'
              }}>
                <p className="text-gold" style={{ marginBottom: '16px', fontWeight: 'bold' }}>SECURE CHECKOUT</p>
                <a
                  href="https://kronos-premium.lemonsqueezy.com/checkout/buy/4bfb8719-7b8b-4de4-acc0-1f3510705915?embed=1&media=0"
                  className="btn-primary lemonsqueezy-button"
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    display: 'inline-block',
                    textDecoration: 'none'
                  }}
                >
                  Contribute $25+
                </a>
              </div>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Payments are securely processed. You can set your own price above the $25 minimum.
                Any extra funds go directly into extending our server infrastructure and marketing budget.
              </p>
            </div>

            {/* <div className="divider-line" style={{ opacity: 0.2, margin: '32px 0' }} />

            <div style={{ textAlign: 'left' }}>
              <h4 className="display-text" style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--gold)' }}>Alternative Methods:</h4>
              
              <div className="art-deco-card" style={{ padding: '0', overflow: 'hidden', background: 'rgba(212, 175, 55, 0.03)' }}>
                <button 
                  onClick={() => setShowBinance(!showBinance)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    color: 'var(--text-champagne)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Bitcoin size={20} className="text-gold" />
                    <span style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>PAY VIA BINANCE (CRYPTO)</span>
                  </div>
                  {showBinance ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <AnimatePresence>
                  {showBinance && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div style={{ padding: '0 20px 24px', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
                        <div style={{ textAlign: 'center', margin: '24px 0' }}>
                          <img 
                            src={binanceQr} 
                            alt="Binance QR Code" 
                            style={{ 
                              maxWidth: '240px', 
                              borderRadius: '8px',
                              border: '4px solid white',
                              boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
                            }} 
                          />
                          <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--gold)' }}>
                            Scan to pay Otis Delbusto rTag
                          </p>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ minWidth: '24px' }}>
                              <ShieldCheck size={20} className="text-gold" />
                            </div>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                              Please send no less than <strong>$25 (USDT/USDC)</strong> to secure your Founder status.
                            </p>
                          </div>
                          
                          <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ minWidth: '24px' }}>
                              <Mail size={20} className="text-gold" />
                            </div>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                              After payment, email your <strong>transaction hash or reference</strong> to <a href="mailto:mail@minuwu.is-a.dev" style={{ color: 'var(--gold)' }}>mail@minuwu.is-a.dev</a> for your founder's invitation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="vertical-line" />
            <h2 className="section-title">FAQ</h2>
            <div className="divider-line" />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="art-deco-card" style={{ marginBottom: '40px', background: 'rgba(212, 175, 55, 0.05)', borderColor: 'var(--gold)' }}>
              <h3 className="display-text" style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center' }}>WHY $25 IS A STEAL</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', paddingBottom: '8px' }}>
                  <span className="text-muted">Lifetime Premium (Play Store)</span>
                  <span className="text-gold">${VALUES.lifetime.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', paddingBottom: '8px' }}>
                  <span className="text-muted">5x Monthly Promo Codes (${VALUES.monthly.toFixed(2)} ea.)</span>
                  <span className="text-gold">${(VALUES.monthly * 5).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', paddingBottom: '8px' }}>
                  <span className="text-muted">2 Exclusive Premium Skins</span>
                  <span className="text-gold">${VALUES.skins.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  <span className="text-champagne">Total Real-World Value</span>
                  <span className="text-gold">${totalValue.toFixed(2)}</span>
                </div>
                <div style={{ textAlign: 'center', marginTop: '24px', padding: '16px', background: 'var(--gold)', color: 'var(--bg-obsidian)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Your Price: ${VALUES.currentPrice.toFixed(2)} (Save ${(totalValue - VALUES.currentPrice).toFixed(2)}!)
                </div>
              </div>
            </div>

            <div className="art-deco-card" style={{ marginBottom: '24px', textAlign: 'left' }}>
              <h4 className="display-text" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>How do I get my Lifetime Access?</h4>
              <p className="text-muted" style={{ color: 'var(--text-champagne)', opacity: 0.8 }}>
                Once payment is confirmed, you will receive an automated welcome email with a private link to our Discord and instructions on how to submit your App User ID and your <strong>platform of choice (App Store or Play Store)</strong>.
                <br /><br />
                <em>Note: Play Store access is guaranteed. App Store access is dependent on successful publishing and the ongoing maintenance of the $100/year Apple Developer Program.</em>
              </p>
            </div>

            <div className="art-deco-card" style={{ marginBottom: '24px', textAlign: 'left' }}>
              <h4 className="display-text" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>When will I get the 5 promo codes?</h4>
              <p className="text-muted" style={{ color: 'var(--text-champagne)', opacity: 0.8 }}>
                The 5 one-month premium promo codes will be sent directly to your email once the app is officially published on the App Store.
              </p>
            </div>

            <div className="art-deco-card" style={{ marginBottom: '24px', textAlign: 'left' }}>
              <h4 className="display-text" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>What does "Lifetime" mean?</h4>
              <p className="text-muted" style={{ color: 'var(--text-champagne)', opacity: 0.8 }}>
                Lifetime access means the lifetime of the Kronos application. As long as the app is supported and available, your premium status is guaranteed.
              </p>
            </div>

            <div className="art-deco-card" style={{ textAlign: 'left' }}>
              <h4 className="display-text" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Can I contribute more than $25?</h4>
              <p className="text-muted" style={{ color: 'var(--text-champagne)', opacity: 0.8 }}>
                Yes! Our checkout allows you to set your own price above the $25 minimum. Any extra funds go directly into extending our server infrastructure and marketing budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
