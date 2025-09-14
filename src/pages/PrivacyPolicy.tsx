import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-muted-foreground">
        At OneBowl by LAV Company, we respect your privacy and are committed to protecting it. 
        This Privacy Policy explains how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
        <li>Personal information you provide (name, email, phone, etc.).</li>
        <li>Payment details for donations (handled securely via trusted payment gateways).</li>
        <li>Usage data such as browsing patterns and interactions with our platform.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <p className="text-muted-foreground mb-4">
        We use collected data to provide services, process donations, improve user experience, 
        and share updates about our initiatives. We do not sell or trade your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Protection</h2>
      <p className="text-muted-foreground mb-4">
        We implement strict measures to secure your information. All payments are encrypted and 
        handled by third-party providers following industry standards.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="text-muted-foreground mb-4">
        You can request access, updates, or deletion of your personal data by contacting us at 
        <a href="mailto:onebowl.lav@gmail.com" className="text-primary underline ml-1">onebowl.lav@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
