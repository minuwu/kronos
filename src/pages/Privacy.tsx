const Privacy = () => {
  return (
    <div className="container" style={{ padding: '160px 24px 100px' }}>
      <h1 className="display-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>PRIVACY <span className="text-gold">POLICY</span></h1>
      <p className="text-muted" style={{ marginBottom: '60px', letterSpacing: '2px', fontSize: '0.9rem' }}>& INTELLECTUAL PROPERTY NOTICE</p>
      
      <div className="art-deco-card">
        <p className="text-muted" style={{ marginBottom: '40px' }}>
          This Privacy Policy describes how Kronos Interactive ("we," "us," or "our") collects, uses, processes, and discloses your information in conjunction with your access to and use of the Kronos mobile application (the "App"). We are committed to protecting your personal information and your right to privacy.
        </p>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>1. PROPRIETARY TECHNOLOGY & INNOVATION NOTICE</h2>
          <p className="text-muted" style={{ marginBottom: '16px' }}>
            Kronos is the world’s first mobile application to achieve hyper-realistic hourglass simulation through high-fidelity sensor-fusion technology. The physics engine, granular flow algorithms, and real-time sensor integration methods are the <strong style={{ color: 'var(--gold)' }}>exclusive proprietary property</strong> of the developer.
          </p>
          <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px', marginTop: '24px' }}>
            <p className="text-muted" style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--text-main)' }}>Warning on Intellectual Property:</strong></p>
            <ul className="text-muted" style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Proprietary Algorithms:</strong> The specific logic used to translate device motion (accelerometer/gyroscope) into hourglass realism is protected under international trade secret and copyright laws.</li>
              <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Zero-Tolerance for Duplication:</strong> Any attempt to clone, replicate, or duplicate the internal logic, visual physics, or user experience of Kronos is strictly prohibited and actively monitored.</li>
              <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Legal Enforcement:</strong> Unauthorized use, reverse engineering, or "copycat" applications will be subjected to immediate DMCA takedown requests, permanent blacklisting across digital storefronts, and aggressive civil legal action for financial repayment of damages, lost revenue, and attorney fees.</li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>2. DATA PRIVACY & SENSOR USAGE</h2>
          <p className="text-muted" style={{ marginBottom: '16px' }}>
            While we fiercely protect our technology, we equally prioritize your privacy. The App is engineered with an "Offline First" philosophy to minimize data collection.
          </p>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 className="display-text" style={{ fontSize: '1rem', marginBottom: '12px' }}>A. Real-Time Sensor Processing (No Data Storage)</h3>
            <p className="text-muted">
              To achieve our industry-leading realism, Kronos requires continuous access to your device's <strong style={{ color: 'var(--text-main)' }}>Accelerometer and Gyroscope</strong>. We want to be unequivocally clear about how this data is handled:
            </p>
            <ul className="text-muted" style={{ listStyleType: 'none', padding: '12px 0 0 20px' }}>
              <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Strictly Local Execution:</strong> All complex physics calculations and granular flow simulations are performed entirely locally on your device's GPU and CPU processors.</li>
              <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Absolute Non-Persistence:</strong> Sensor telemetry is ingested frame-by-frame, utilized for the immediate visual render, and instantly discarded. It is <strong style={{ color: 'var(--text-main)' }}>never</strong> written to disk, recorded, stored in any database, or transmitted to any external server. Your physical movements and device orientation remain 100% private.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 className="display-text" style={{ fontSize: '1rem', marginBottom: '12px' }}>B. Usage Analytics & Telemetry</h3>
            <p className="text-muted">
              To ensure the App runs smoothly across thousands of diverse Android and iOS hardware configurations, we collect generalized, anonymized telemetry data. We utilize Microsoft Clarity to capture UI interaction patterns (e.g., how users navigate menus or interact with the 3D scene). This helps us identify UI bottlenecks, optimize rendering loops, and refine the proprietary physics experience. This data cannot be reverse-engineered to identify you personally, and no raw sensor data is ever captured.
            </p>
          </div>

          <div>
            <h3 className="display-text" style={{ fontSize: '1rem', marginBottom: '12px' }}>C. Subscription & Financial Transactions</h3>
            <p className="text-muted">
              We do not process payments directly. All transactions for premium skins, founders packs, and recurring subscriptions are securely handled by the Apple App Store, Google Play Store, and our subscription management partner, RevenueCat. We only receive anonymized purchase validation tokens to unlock content on your device. We do not have access to, nor do we store, your credit card numbers, billing addresses, or primary financial credentials.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>3. INFORMATION WE AUTOMATICALLY COLLECT</h2>
          <p className="text-muted" style={{ marginBottom: '16px' }}>When you access the App, certain information is automatically collected by our servers and third-party integrations, including:</p>
          <ul className="text-muted" style={{ listStyleType: 'none', padding: '0 0 0 20px' }}>
            <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Device Information:</strong> Hardware model, operating system version, unique device identifiers, and mobile network information.</li>
            <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Log Data:</strong> Diagnostic crash reports, performance logs, and error tracking to help us fix bugs rapidly.</li>
            <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Usage Data:</strong> Time spent in the app, features utilized, and skin selection preferences.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>4. PROHIBITED DATA EXTRACTION</h2>
          <p className="text-muted">By using Kronos, you agree NOT to engage in any activity designed to compromise our IP or data architecture:</p>
          <ol className="text-muted" style={{ paddingLeft: '20px', marginTop: '16px' }}>
            <li style={{ marginBottom: '12px' }}>Decompile, reverse engineer, or attempt to derive the source code of the hourglass simulation or internal APIs.</li>
            <li style={{ marginBottom: '12px' }}>Use any automated system, packet sniffer, or software proxy to "scrape," intercept, or analyze the App's network traffic or physics patterns.</li>
            <li style={{ marginBottom: '12px' }}>Create derivative works or "training data" for machine learning models based on the unique sensor-driven realism of Kronos.</li>
          </ol>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>5. THIRD-PARTY DISCLOSURES & SHARING</h2>
          <p className="text-muted">We do not sell your personal data. We share only the absolute minimum necessary data with vetted partners under strict confidentiality agreements to maintain App functionality:</p>
          <ul className="text-muted" style={{ listStyleType: 'none', padding: '16px 0 0 20px' }}>
            <li style={{ marginBottom: '12px' }}>• <strong style={{ color: 'var(--text-main)' }}>RevenueCat:</strong> Utilized for cross-platform subscription management and receipt validation.</li>
            <li style={{ marginBottom: '12px' }}>• <strong style={{ color: 'var(--text-main)' }}>Microsoft Clarity:</strong> Utilized for advanced UI/UX optimization and heatmapping without compromising personal identity.</li>
            <li style={{ marginBottom: '12px' }}>• <strong style={{ color: 'var(--text-main)' }}>Platform Providers (Apple/Google):</strong> Utilized for fundamental platform-level processing, distribution, and native analytics.</li>
            <li style={{ marginBottom: '12px' }}>• <strong style={{ color: 'var(--text-main)' }}>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), or to protect our intellectual property rights in civil litigation.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>6. DATA SECURITY & RETENTION</h2>
          <p className="text-muted" style={{ marginBottom: '16px' }}>
            We implement rigorous, industry-standard technical and organizational security measures designed to protect the App's integrity and any data we process from unauthorized access, loss, or alteration.
          </p>
          <p className="text-muted">
            Anonymized usage and diagnostic data is retained only for as long as functionally necessary to optimize App performance and ensure stability across update cycles, after which it is systematically purged. Because the App operates entirely locally for its core features, clearing the app cache or deleting the App from your device will immediately eradicate your local settings and preferences.
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>7. YOUR DATA PROTECTION RIGHTS (GDPR & CCPA)</h2>
          <p className="text-muted" style={{ marginBottom: '16px' }}>
            Depending on your location, you may have specific rights regarding your personal data. Because Kronos is designed to be anonymous, we typically cannot identify you to fulfill targeted data requests. However, you inherently possess the right to:
          </p>
          <ul className="text-muted" style={{ listStyleType: 'none', padding: '0 0 0 20px' }}>
            <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Right to Access & Deletion:</strong> You can completely erase your local footprint by uninstalling the App.</li>
            <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Right to Opt-Out:</strong> You may disable tracking features through your operating system's native privacy controls (e.g., Apple's App Tracking Transparency).</li>
            <li style={{ marginBottom: '8px' }}>• <strong style={{ color: 'var(--text-main)' }}>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>8. CHILDREN'S PRIVACY</h2>
          <p className="text-muted">
            The Kronos application does not knowingly collect personally identifiable information from anyone under the age of 13 (or 16 in certain jurisdictions). If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers immediately.
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>9. JURISDICTION & ENFORCEMENT</h2>
          <p className="text-muted">
            This policy is governed by international intellectual property and data protection laws. We reserve the absolute right to seek immediate injunctive relief, without the necessity of posting a bond, and substantial financial compensation in any global jurisdiction where a breach of our proprietary rights, reverse engineering, or unauthorized data extraction is detected.
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>10. CHANGES TO THIS PRIVACY POLICY</h2>
          <p className="text-muted">
            We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h2 className="display-text" style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--gold)' }}>11. CONTACT US</h2>
          <p className="text-muted">For formal licensing inquiries, legal concerns, or privacy compliance questions, please reach out through our official channels:</p>
          <p className="text-muted" style={{ marginTop: '16px' }}>
            <strong style={{ color: 'var(--text-main)' }}>Legal Department Email:</strong> <a href="mailto:legal@minuwu.is-a.dev" style={{ color: 'var(--gold)', textDecoration: 'none' }}>legal@minuwu.is-a.dev</a><br />
            <strong style={{ color: 'var(--text-main)' }}>Official Web Portal:</strong> <a href="https://minuwu.is-a.dev/kronos/privacy.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>minuwu.is-a.dev/kronos/</a>
          </p>
        </div>

        <div className="divider-line" style={{ opacity: 0.1, margin: '40px 0' }} />
        <p className="text-muted" style={{ fontStyle: 'italic', fontSize: '0.8rem', textAlign: 'center', letterSpacing: '1px' }}>LAST UPDATED: MAY 9, 2026</p>
      </div>
    </div>
  );
};

export default Privacy;


