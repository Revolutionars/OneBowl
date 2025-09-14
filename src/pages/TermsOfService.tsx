import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4 text-muted-foreground">
        By accessing or using OneBowl by LAV Company, you agree to the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Services</h2>
      <p className="text-muted-foreground mb-4">
        You may use our platform only for lawful purposes and in accordance with these terms.
        Unauthorized use, including fraudulent activity, is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Donations</h2>
      <p className="text-muted-foreground mb-4">
        All donations made through OneBowl are voluntary and non-refundable. Funds are used to 
        support animal welfare activities as outlined on our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="text-muted-foreground mb-4">
        All content, branding, and materials on OneBowl are the property of LAV Company and cannot 
        be copied or distributed without prior consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="text-muted-foreground mb-4">
        LAV Company is not liable for indirect, incidental, or consequential damages arising from 
        the use of our services.
      </p>
    </div>
  );
};

export default TermsOfService;
