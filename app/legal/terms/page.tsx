import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Old Forrest Consulting LLC website and services.",
};

const tableOfContents = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services", title: "Services Description" },
  { id: "use-license", title: "Use License" },
  { id: "user-conduct", title: "User Conduct" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="December 2024"
      tableOfContents={tableOfContents}
    >
      <p className="text-gray-300 mb-8">
        Welcome to the Old Forrest Consulting LLC website. By accessing or using our website
        and services, you agree to be bound by these Terms of Service. Please read them carefully.
      </p>

      {/* Section 1: Acceptance */}
      <section id="acceptance" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using the website located at oldforrest.net (the &quot;Site&quot;) or any
          services provided by Old Forrest Consulting LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
        </p>
        <p className="text-gray-300 mb-4">
          If you do not agree to these Terms, you must not access or use our Site or services.
        </p>
        <p className="text-gray-300">
          If you are entering into these Terms on behalf of a company or other legal entity,
          you represent that you have the authority to bind such entity to these Terms.
        </p>
      </section>

      {/* Section 2: Services */}
      <section id="services" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
        <p className="text-gray-300 mb-4">
          Old Forrest Consulting LLC provides technical consulting services, including but
          not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>AI integration and development consulting</li>
          <li>Software architecture review and optimization</li>
          <li>Project rescue and completion services</li>
          <li>Fractional CTO services</li>
          <li>Code review and technical audits</li>
          <li>Infrastructure and deployment consulting</li>
        </ul>
        <p className="text-gray-300">
          Actual consulting services are provided under separate agreements, including our
          Master Service Agreement and Statement of Work documents.
        </p>
      </section>

      {/* Section 3: Use License */}
      <section id="use-license" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Use License</h2>
        <p className="text-gray-300 mb-4">
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
          revocable license to access and use our Site for your personal and business
          purposes related to evaluating or engaging our services.
        </p>
        <p className="text-gray-300 mb-4">
          This license does not include:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>The right to resell or commercial use of the Site or its contents</li>
          <li>Any collection and use of product listings, descriptions, or prices</li>
          <li>Any derivative use of this Site or its contents</li>
          <li>Downloading or copying of account information for the benefit of a third party</li>
          <li>Use of data mining, robots, or similar data gathering and extraction tools</li>
        </ul>
      </section>

      {/* Section 4: User Conduct */}
      <section id="user-conduct" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
        <p className="text-gray-300 mb-4">
          You agree not to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Use the Site in any way that violates any applicable law or regulation</li>
          <li>Attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site</li>
          <li>Use the Site to transmit any viruses, worms, or other malicious code</li>
          <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          <li>Collect or store personal data about other users without their consent</li>
          <li>Use the Site for any purpose that is fraudulent or otherwise unlawful</li>
        </ul>
      </section>

      {/* Section 5: Intellectual Property */}
      <section id="intellectual-property" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          The Site and its original content, features, and functionality are owned by Old
          Forrest Consulting LLC and are protected by international copyright, trademark,
          patent, trade secret, and other intellectual property laws.
        </p>
        <p className="text-gray-300 mb-4">
          Our trademarks and trade dress may not be used in connection with any product or
          service without prior written consent.
        </p>
        <p className="text-gray-300">
          All content provided on this Site, including text, graphics, logos, images, and
          software, is the property of Old Forrest Consulting LLC or its content suppliers
          and is protected by applicable intellectual property laws.
        </p>
      </section>

      {/* Section 6: Disclaimer */}
      <section id="disclaimer" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
        <div className="bg-white/5 p-6 rounded-lg">
          <p className="text-gray-300 mb-4 font-medium">
            THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES INCLUDED ON OR
            OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE PROVIDED ON AN &quot;AS IS&quot;
            AND &quot;AS AVAILABLE&quot; BASIS.
          </p>
          <p className="text-gray-300 mb-4">
            WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>The operation of the Site</li>
            <li>The accuracy, reliability, or completeness of any information or content</li>
            <li>The suitability of the information for any particular purpose</li>
            <li>That the Site will be uninterrupted, timely, secure, or error-free</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Limitation of Liability */}
      <section id="limitation" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
        <div className="bg-white/5 p-6 rounded-lg">
          <p className="text-gray-300 mb-4 font-medium">
            TO THE FULLEST EXTENT PERMITTED BY LAW, OLD FORREST CONSULTING LLC SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR
            GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE.
          </p>
          <p className="text-gray-300">
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR
            RELATED TO THE SITE EXCEED ONE HUNDRED DOLLARS ($100).
          </p>
        </div>
      </section>

      {/* Section 8: Indemnification */}
      <section id="indemnification" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
        <p className="text-gray-300">
          You agree to indemnify, defend, and hold harmless Old Forrest Consulting LLC, its
          officers, directors, employees, agents, and affiliates from and against any and
          all claims, damages, obligations, losses, liabilities, costs, and expenses
          (including reasonable attorneys&apos; fees) arising from: (a) your use of the Site;
          (b) your violation of these Terms; (c) your violation of any third-party right,
          including any intellectual property or privacy right; or (d) any claim that your
          use of the Site caused damage to a third party.
        </p>
      </section>

      {/* Section 9: Termination */}
      <section id="termination" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
        <p className="text-gray-300 mb-4">
          We may terminate or suspend your access to the Site immediately, without prior
          notice or liability, for any reason whatsoever, including without limitation if
          you breach these Terms.
        </p>
        <p className="text-gray-300">
          Upon termination, your right to use the Site will immediately cease. All
          provisions of these Terms which by their nature should survive termination
          shall survive, including ownership provisions, warranty disclaimers,
          indemnification, and limitations of liability.
        </p>
      </section>

      {/* Section 10: Governing Law */}
      <section id="governing-law" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
        <p className="text-gray-300 mb-4">
          These Terms shall be governed by and construed in accordance with the laws of
          the State of Utah, without regard to its conflict of laws principles.
        </p>
        <p className="text-gray-300">
          Any legal action or proceeding arising under these Terms shall be brought
          exclusively in the state or federal courts located in Salt Lake City, Utah,
          and the parties hereby consent to the personal jurisdiction and venue therein.
        </p>
      </section>

      {/* Section 11: Changes to Terms */}
      <section id="changes" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to modify these Terms at any time. We will provide notice
          of any material changes by updating the &quot;Last Updated&quot; date at the top of this
          page.
        </p>
        <p className="text-gray-300">
          Your continued use of the Site following any changes constitutes your acceptance
          of the new Terms. You are responsible for periodically reviewing these Terms.
        </p>
      </section>

      {/* Section 12: Contact Information */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about these Terms, please contact us:
        </p>
        <div className="bg-white/5 p-6 rounded-lg">
          <p className="text-white font-semibold mb-2">Old Forrest Consulting LLC</p>
          <p className="text-gray-300">Email: contact@oldforrest.net</p>
          <p className="text-gray-300">Website: oldforrest.net</p>
        </div>
      </section>

      {/* Additional Provisions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Additional Provisions</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Entire Agreement</h3>
        <p className="text-gray-300 mb-4">
          These Terms constitute the entire agreement between you and Old Forrest Consulting
          LLC regarding use of the Site and supersede any prior agreements.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Severability</h3>
        <p className="text-gray-300 mb-4">
          If any provision of these Terms is found to be unenforceable, the remaining
          provisions will continue in full force and effect.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Waiver</h3>
        <p className="text-gray-300 mb-4">
          No waiver of any term of these Terms shall be deemed a further or continuing
          waiver of such term or any other term.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Assignment</h3>
        <p className="text-gray-300">
          You may not assign or transfer these Terms without our prior written consent.
          We may assign our rights and obligations under these Terms without restriction.
        </p>
      </section>
    </LegalPageLayout>
  );
}
