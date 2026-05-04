const Privacy = () => {
  return (
    <div className="container" style={{ padding: '160px 0 100px' }}>
      <h1 style={{ marginBottom: '40px' }}>Privacy Policy</h1>
      <div className="glass-card" style={{ padding: '40px' }}>
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px' }}>1. Information We Collect</h2>
          <p>
            Kronos is designed with an "Offline First" philosophy. We do not require you to create an account to use the basic features of the app. 
            We may collect anonymous usage statistics to improve the app experience, but this data is never linked to your identity.
          </p>
        </section>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px' }}>2. Sensor Data</h2>
          <p>
            The app utilizes your device's gyroscope and accelerometer data to simulate the physical behavior of an hourglass. 
            This data is processed locally on your device and is never uploaded to our servers or shared with third parties.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px' }}>3. Third-Party Services</h2>
          <p>
            We may use third-party services for crash reporting or subscription management (e.g., RevenueCat). 
            These services have their own privacy policies which we encourage you to review.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px' }}>4. Your Rights</h2>
          <p>
            Since we do not collect personal identifiers, your data is yours to keep. You can clear all local app data at any time through your device settings.
          </p>
        </section>

        <p style={{ marginTop: '40px', fontStyle: 'italic' }}>Last updated: May 2026</p>
      </div>
    </div>
  );
};

export default Privacy;
