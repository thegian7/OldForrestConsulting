import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Old Forrest Consulting LLC - how we collect, use, and protect your information.",
};

const tableOfContents = [
  { id: "information-collected", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "your-rights", title: "Your Rights" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "children-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="December 2024"
      tableOfContents={tableOfContents}
    >
      <p className="text-gray-300 mb-8">
        Old Forrest Consulting LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
        protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website oldforrest.net or engage
        our services.
      </p>

      {/* Section 1: Information Collected */}
      <section id="information-collected" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1 Information You Provide</h3>
        <p className="text-gray-300 mb-4">
          We collect information that you voluntarily provide when you:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Fill out a contact form on our website</li>
          <li>Schedule a consultation or meeting</li>
          <li>Request information about our services</li>
          <li>Enter into a consulting agreement with us</li>
          <li>Communicate with us via email or other channels</li>
        </ul>
        <p className="text-gray-300 mb-4">
          This information may include:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Name and contact information (email, phone number)</li>
          <li>Company name and job title</li>
          <li>Project details and technical requirements</li>
          <li>Payment information (processed through secure third-party services)</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2 Automatically Collected Information</h3>
        <p className="text-gray-300 mb-4">
          When you visit our website, we may automatically collect certain information,
          including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website or source</li>
          <li>Date and time of visits</li>
        </ul>
      </section>

      {/* Section 2: How We Use Information */}
      <section id="how-we-use" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>To provide and deliver our consulting services</li>
          <li>To respond to your inquiries and requests</li>
          <li>To send you information about our services (with your consent)</li>
          <li>To process payments and maintain records</li>
          <li>To improve our website and services</li>
          <li>To analyze website usage and trends</li>
          <li>To protect against fraudulent or unauthorized activity</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      {/* Section 3: Information Sharing */}
      <section id="information-sharing" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
        <p className="text-gray-300 mb-4">
          We do not sell, trade, or rent your personal information to third parties.
          We may share your information only in the following circumstances:
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Service Providers</h3>
        <p className="text-gray-300 mb-4">
          We may share information with trusted third-party service providers who assist
          us in operating our website and conducting our business, such as:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Payment processors</li>
          <li>Email service providers</li>
          <li>Analytics providers</li>
          <li>Cloud hosting services</li>
        </ul>
        <p className="text-gray-300">
          These providers are contractually obligated to protect your information and use
          it only for the purposes we specify.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Legal Requirements</h3>
        <p className="text-gray-300 mb-4">
          We may disclose your information when required to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Comply with applicable law, regulation, or legal process</li>
          <li>Respond to lawful requests from public authorities</li>
          <li>Protect our rights, privacy, safety, or property</li>
          <li>Enforce our Terms of Service</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Business Transfers</h3>
        <p className="text-gray-300">
          In the event of a merger, acquisition, or sale of all or a portion of our
          assets, your information may be transferred to the acquiring entity.
        </p>
      </section>

      {/* Section 4: Data Security */}
      <section id="data-security" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement reasonable security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction. These measures
          include:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Encryption of data in transit using SSL/TLS</li>
          <li>Secure storage of data with access controls</li>
          <li>Regular security assessments and updates</li>
          <li>Limited access to personal information on a need-to-know basis</li>
        </ul>
        <p className="text-gray-300">
          However, no method of transmission over the Internet or electronic storage is
          100% secure. While we strive to protect your information, we cannot guarantee
          absolute security.
        </p>
      </section>

      {/* Section 5: Cookies */}
      <section id="cookies" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 What Are Cookies</h3>
        <p className="text-gray-300 mb-4">
          Cookies are small text files stored on your device when you visit a website.
          They help us provide a better user experience and understand how our website
          is used.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Types of Cookies We Use</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong className="text-white">Functional Cookies:</strong> Remember your preferences and settings</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Managing Cookies</h3>
        <p className="text-gray-300">
          Most web browsers allow you to control cookies through their settings. You can
          typically choose to block or delete cookies. However, disabling certain cookies
          may affect the functionality of our website.
        </p>
      </section>

      {/* Section 6: Your Rights */}
      <section id="your-rights" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
        <p className="text-gray-300 mb-4">
          Depending on your location, you may have certain rights regarding your personal
          information:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
          <li><strong className="text-white">Opt-Out:</strong> Opt out of receiving marketing communications</li>
          <li><strong className="text-white">Data Portability:</strong> Request a copy of your data in a portable format</li>
        </ul>
        <p className="text-gray-300">
          To exercise any of these rights, please contact us using the information provided
          below. We will respond to your request within a reasonable timeframe.
        </p>
      </section>

      {/* Section 7: Third-Party Links */}
      <section id="third-party-links" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
        <p className="text-gray-300">
          Our website may contain links to third-party websites, including LinkedIn, GitHub,
          and Google Calendar. We are not responsible for the privacy practices or content
          of these third-party sites. We encourage you to review the privacy policies of
          any third-party sites you visit.
        </p>
      </section>

      {/* Section 8: Children's Privacy */}
      <section id="children-privacy" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
        <p className="text-gray-300">
          Our website and services are not intended for children under the age of 18. We
          do not knowingly collect personal information from children. If you believe we
          have inadvertently collected information from a child, please contact us
          immediately so we can delete it.
        </p>
      </section>

      {/* Section 9: Changes */}
      <section id="changes" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our
          practices or for other operational, legal, or regulatory reasons. We will notify
          you of any material changes by:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Posting the new Privacy Policy on this page</li>
          <li>Updating the &quot;Last Updated&quot; date at the top of this page</li>
          <li>Sending you an email notification (for significant changes, if we have your email)</li>
        </ul>
        <p className="text-gray-300">
          We encourage you to review this Privacy Policy periodically.
        </p>
      </section>

      {/* Section 10: Contact */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about this Privacy Policy or our privacy practices,
          please contact us:
        </p>
        <div className="bg-white/5 p-6 rounded-lg">
          <p className="text-white font-semibold mb-2">Old Forrest Consulting LLC</p>
          <p className="text-gray-300">Email: privacy@oldforrest.net</p>
          <p className="text-gray-300">Website: oldforrest.net</p>
        </div>
      </section>

      {/* Data Retention */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
        <p className="text-gray-300 mb-4">
          We retain your personal information for as long as necessary to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Provide our services to you</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce our agreements</li>
        </ul>
        <p className="text-gray-300 mt-4">
          When your information is no longer needed, we will securely delete or anonymize it.
        </p>
      </section>

      {/* California Privacy Rights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">California Privacy Rights</h2>
        <p className="text-gray-300 mb-4">
          If you are a California resident, you may have additional rights under the
          California Consumer Privacy Act (CCPA), including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>The right to know what personal information is collected</li>
          <li>The right to know if personal information is sold or disclosed</li>
          <li>The right to opt out of the sale of personal information</li>
          <li>The right to non-discrimination for exercising your rights</li>
        </ul>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Note:</strong> We do not sell personal information.
        </p>
      </section>
    </LegalPageLayout>
  );
}
