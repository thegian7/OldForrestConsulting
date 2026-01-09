import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Master Service Agreement",
  description: "Master Service Agreement for consulting services with Old Forrest Consulting LLC.",
};

const tableOfContents = [
  { id: "parties", title: "Parties" },
  { id: "services", title: "Services" },
  { id: "engagement-types", title: "Engagement Types" },
  { id: "fees-payment", title: "Fees and Payment" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "warranties", title: "Warranties and Disclaimers" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
  { id: "general-provisions", title: "General Provisions" },
];

export default function MSAPage() {
  return (
    <LegalPageLayout
      title="Master Service Agreement"
      lastUpdated="December 2024"
      tableOfContents={tableOfContents}
    >
      <p className="text-gray-300 mb-8">
        This Master Service Agreement (&quot;Agreement&quot;) is entered into by and between
        Old Forrest Consulting LLC, a Utah limited liability company (&quot;Consultant&quot;),
        and the client identified in the applicable Statement of Work (&quot;Client&quot;).
      </p>

      {/* Section 1: Parties */}
      <section id="parties" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Parties</h2>
        <p className="text-gray-300 mb-4">
          <strong className="text-white">Consultant:</strong> Old Forrest Consulting LLC<br />
          A Utah Limited Liability Company
        </p>
        <p className="text-gray-300">
          <strong className="text-white">Client:</strong> As identified in each Statement of Work
          executed under this Agreement.
        </p>
      </section>

      {/* Section 2: Services */}
      <section id="services" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
        <p className="text-gray-300 mb-4">
          Consultant agrees to provide technical consulting services as described in one or more
          Statements of Work (&quot;SOW&quot;) executed by both parties. Each SOW shall reference this
          Agreement and become part of it upon execution.
        </p>
        <p className="text-gray-300">
          Services may include but are not limited to: AI integration and development, software
          architecture consulting, code review and optimization, infrastructure setup and migration,
          technical leadership, and fractional CTO services.
        </p>
      </section>

      {/* Section 3: Engagement Types */}
      <section id="engagement-types" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Engagement Types</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Hourly Consulting</h3>
        <p className="text-gray-300 mb-4">
          Time-based engagements billed at the hourly rate specified in the applicable SOW.
          Minimum billing increments of 30 minutes apply. Services include live debugging,
          architecture review, code audit, and immediate problem-solving.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Project-Based (Project Rescue)</h3>
        <p className="text-gray-300 mb-4">
          Fixed-scope engagements with defined deliverables, timeline, and pricing as specified
          in the SOW. Includes a 30-day warranty period following project completion during which
          Consultant will address defects in delivered work at no additional charge.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Fractional CTO (Monthly Retainer)</h3>
        <p className="text-gray-300">
          Ongoing monthly engagements providing technical leadership, strategy, and guidance.
          Scope and deliverables defined in the SOW, typically including weekly strategy calls,
          code review, architectural decisions, vendor evaluation, and hiring assistance.
        </p>
      </section>

      {/* Section 4: Fees and Payment */}
      <section id="fees-payment" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. Fees and Payment</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Fees</h3>
        <p className="text-gray-300 mb-4">
          Fees for services shall be as set forth in each SOW. Unless otherwise specified:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Hourly Consulting: $150 - $300 per hour</li>
          <li>Project Rescue: $3,000 - $20,000 per project</li>
          <li>Fractional CTO: $1,500 - $5,000 per month</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Payment Terms</h3>
        <p className="text-gray-300 mb-4">
          Payment terms shall be specified in each SOW. Unless otherwise agreed:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Invoices are due upon receipt unless otherwise specified</li>
          <li>Project-based work may require deposits as specified in the SOW</li>
          <li>Monthly retainers are due on the first of each month in advance</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Late Payment</h3>
        <p className="text-gray-300 mb-4">
          Invoices not paid within 15 days of the due date shall accrue interest at a rate of
          1.5% per month (18% annually) or the maximum rate permitted by law, whichever is less.
        </p>
        <p className="text-gray-300 mb-4">
          <strong className="text-white">Work Suspension:</strong> Consultant reserves the right
          to suspend work on any engagement if any invoice remains unpaid for more than 30 days.
          Work shall resume within 5 business days of receipt of all outstanding payments.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.4 Expenses</h3>
        <p className="text-gray-300">
          Client shall reimburse Consultant for reasonable out-of-pocket expenses incurred in
          connection with the Services, provided such expenses are pre-approved by Client in writing.
        </p>
      </section>

      {/* Section 5: Intellectual Property */}
      <section id="intellectual-property" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Work Product</h3>
        <p className="text-gray-300 mb-4">
          Subject to Section 5.2 and upon full payment of all fees due, all deliverables,
          work product, and materials created by Consultant specifically for Client under this
          Agreement (&quot;Work Product&quot;) shall be owned by Client. Consultant hereby assigns
          to Client all right, title, and interest in and to such Work Product.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Pre-Existing Materials</h3>
        <p className="text-gray-300 mb-4">
          Consultant retains all right, title, and interest in and to any tools, frameworks,
          libraries, methodologies, know-how, and other materials that: (a) existed prior to
          the commencement of services; or (b) are developed by Consultant independently of the
          Services (&quot;Pre-Existing Materials&quot;).
        </p>
        <p className="text-gray-300 mb-4">
          To the extent any Pre-Existing Materials are incorporated into the Work Product,
          Consultant grants Client a perpetual, non-exclusive, royalty-free license to use
          such Pre-Existing Materials solely as part of the Work Product.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Open Source</h3>
        <p className="text-gray-300 mb-4">
          Any open source software incorporated into the Work Product shall remain subject to
          its applicable open source license. Client agrees to comply with all such licenses.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.4 Client Materials</h3>
        <p className="text-gray-300">
          Client retains all right, title, and interest in and to any materials, data, content,
          or intellectual property provided by Client to Consultant (&quot;Client Materials&quot;).
          Client grants Consultant a limited license to use Client Materials solely for the
          purpose of providing the Services.
        </p>
      </section>

      {/* Section 6: Confidentiality */}
      <section id="confidentiality" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
        <p className="text-gray-300 mb-4">
          Each party agrees to hold in confidence all Confidential Information disclosed by
          the other party. &quot;Confidential Information&quot; means any non-public information,
          technical data, trade secrets, or know-how disclosed by one party to the other,
          including but not limited to: business plans, customer lists, financial information,
          source code, and proprietary technology.
        </p>
        <p className="text-gray-300 mb-4">
          Confidential Information does not include information that: (a) is or becomes publicly
          available through no fault of the receiving party; (b) was known to the receiving party
          prior to disclosure; (c) is independently developed by the receiving party; or (d) is
          disclosed with the prior written approval of the disclosing party.
        </p>
        <p className="text-gray-300">
          This confidentiality obligation shall survive termination of this Agreement for a
          period of three (3) years.
        </p>
      </section>

      {/* Section 7: Warranties */}
      <section id="warranties" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Consultant Warranties</h3>
        <p className="text-gray-300 mb-4">
          Consultant warrants that: (a) the Services will be performed in a professional and
          workmanlike manner consistent with industry standards; (b) Consultant has the right
          to enter into this Agreement; and (c) to Consultant&apos;s knowledge, the Work Product
          will not infringe any third-party intellectual property rights.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 Project Warranty</h3>
        <p className="text-gray-300 mb-4">
          For Project-Based engagements, Consultant provides a 30-day warranty from the date of
          final delivery. During this period, Consultant will correct any defects or errors in
          the Work Product at no additional charge, provided such defects are reported in writing.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 Disclaimer</h3>
        <p className="text-gray-300 font-medium bg-white/5 p-4 rounded-lg">
          EXCEPT AS EXPRESSLY SET FORTH HEREIN, CONSULTANT MAKES NO WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. CONSULTANT DOES NOT WARRANT
          THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
        </p>
      </section>

      {/* Section 8: Limitation of Liability */}
      <section id="limitation-liability" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Cap on Liability</h3>
        <p className="text-gray-300 mb-4 font-medium bg-white/5 p-4 rounded-lg">
          IN NO EVENT SHALL CONSULTANT&apos;S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THIS
          AGREEMENT EXCEED THE TOTAL FEES PAID BY CLIENT TO CONSULTANT UNDER THE SPECIFIC SOW
          GIVING RISE TO THE CLAIM DURING THE SIX (6) MONTHS PRECEDING THE CLAIM.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Exclusion of Damages</h3>
        <p className="text-gray-300 font-medium bg-white/5 p-4 rounded-lg">
          IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS,
          DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, EVEN IF SUCH PARTY HAS BEEN ADVISED OF
          THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </section>

      {/* Section 9: Indemnification */}
      <section id="indemnification" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 Client Indemnification</h3>
        <p className="text-gray-300 mb-4">
          Client shall indemnify, defend, and hold harmless Consultant from and against any
          claims, damages, losses, and expenses (including reasonable attorneys&apos; fees)
          arising out of: (a) Client Materials; (b) Client&apos;s use of the Work Product in
          violation of this Agreement; or (c) any claim that Client Materials infringe any
          third-party rights.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 Consultant Indemnification</h3>
        <p className="text-gray-300">
          Consultant shall indemnify, defend, and hold harmless Client from and against any
          claims, damages, losses, and expenses (including reasonable attorneys&apos; fees)
          arising out of any claim that the Work Product (excluding Client Materials and
          third-party components) infringes any third-party intellectual property rights.
        </p>
      </section>

      {/* Section 10: Termination */}
      <section id="termination" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.1 Termination for Convenience</h3>
        <p className="text-gray-300 mb-4">
          Either party may terminate this Agreement or any SOW upon thirty (30) days&apos; prior
          written notice to the other party.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.2 Termination for Cause</h3>
        <p className="text-gray-300 mb-4">
          Either party may terminate this Agreement immediately upon written notice if the
          other party: (a) materially breaches this Agreement and fails to cure such breach
          within fifteen (15) days after receiving written notice; or (b) becomes insolvent
          or files for bankruptcy.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.3 Effect of Termination</h3>
        <p className="text-gray-300 mb-4">
          Upon termination: (a) Client shall pay Consultant for all Services performed and
          expenses incurred through the effective date of termination; (b) each party shall
          return or destroy the other party&apos;s Confidential Information; (c) upon full payment,
          Client shall receive ownership of all completed Work Product.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.4 Survival</h3>
        <p className="text-gray-300">
          Sections 5, 6, 7.3, 8, 9, 10.3, 10.4, and 11 shall survive termination of this Agreement.
        </p>
      </section>

      {/* Section 11: Dispute Resolution */}
      <section id="dispute-resolution" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">11. Dispute Resolution</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.1 Governing Law</h3>
        <p className="text-gray-300 mb-4">
          This Agreement shall be governed by and construed in accordance with the laws of
          the State of Utah, without regard to its conflict of laws principles.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.2 Mediation</h3>
        <p className="text-gray-300 mb-4">
          The parties agree to attempt in good faith to resolve any dispute arising out of
          this Agreement through mediation before pursuing any other form of dispute resolution.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.3 Arbitration</h3>
        <p className="text-gray-300 mb-4">
          If mediation is unsuccessful, any dispute shall be resolved by binding arbitration
          in Salt Lake City, Utah, in accordance with the rules of the American Arbitration
          Association. The arbitrator&apos;s decision shall be final and binding.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.4 Attorneys&apos; Fees</h3>
        <p className="text-gray-300">
          The prevailing party in any dispute shall be entitled to recover reasonable
          attorneys&apos; fees and costs from the other party.
        </p>
      </section>

      {/* Section 12: General Provisions */}
      <section id="general-provisions" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">12. General Provisions</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.1 Independent Contractor</h3>
        <p className="text-gray-300 mb-4">
          Consultant is an independent contractor and not an employee, partner, or agent of
          Client. Consultant shall be solely responsible for all taxes, insurance, and benefits
          related to Consultant&apos;s personnel.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.2 Assignment</h3>
        <p className="text-gray-300 mb-4">
          Neither party may assign this Agreement without the prior written consent of the
          other party, except that either party may assign this Agreement in connection with
          a merger, acquisition, or sale of substantially all of its assets.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.3 Entire Agreement</h3>
        <p className="text-gray-300 mb-4">
          This Agreement, together with all SOWs, constitutes the entire agreement between the
          parties and supersedes all prior agreements, understandings, and communications.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.4 Amendments</h3>
        <p className="text-gray-300 mb-4">
          This Agreement may only be amended by a written instrument signed by both parties.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.5 Severability</h3>
        <p className="text-gray-300 mb-4">
          If any provision of this Agreement is found to be unenforceable, the remaining
          provisions shall continue in full force and effect.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.6 Force Majeure</h3>
        <p className="text-gray-300 mb-4">
          Neither party shall be liable for any delay or failure to perform due to causes
          beyond its reasonable control, including but not limited to acts of God, natural
          disasters, war, terrorism, riots, pandemic, or government actions.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.7 Notices</h3>
        <p className="text-gray-300">
          All notices under this Agreement shall be in writing and delivered by email with
          confirmation of receipt, or by certified mail to the addresses specified in the
          applicable SOW.
        </p>
      </section>

      {/* Signature Block */}
      <section className="mt-16 p-8 bg-white/5 border border-white/10 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">Acceptance</h2>
        <p className="text-gray-300 mb-8">
          By executing a Statement of Work that references this Master Service Agreement,
          both parties agree to be bound by the terms and conditions set forth herein.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-white font-semibold mb-2">OLD FORREST CONSULTING LLC</p>
            <div className="border-b border-white/20 mb-2 h-8"></div>
            <p className="text-gray-400 text-sm">Signature</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Date</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">CLIENT</p>
            <div className="border-b border-white/20 mb-2 h-8"></div>
            <p className="text-gray-400 text-sm">Signature</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Date</p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
