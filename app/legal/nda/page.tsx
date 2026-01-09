import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Non-Disclosure Agreement",
  description: "Mutual Non-Disclosure Agreement for engagements with Old Forrest Consulting LLC.",
};

const tableOfContents = [
  { id: "parties", title: "Parties" },
  { id: "purpose", title: "Purpose" },
  { id: "definition", title: "Definition of Confidential Information" },
  { id: "obligations", title: "Obligations" },
  { id: "exclusions", title: "Exclusions" },
  { id: "term", title: "Term and Termination" },
  { id: "return-materials", title: "Return of Materials" },
  { id: "remedies", title: "Remedies" },
  { id: "general", title: "General Provisions" },
];

export default function NDAPage() {
  return (
    <LegalPageLayout
      title="Mutual Non-Disclosure Agreement"
      lastUpdated="December 2024"
      tableOfContents={tableOfContents}
    >
      <p className="text-gray-300 mb-8">
        This Mutual Non-Disclosure Agreement (&quot;Agreement&quot;) is entered into as of the
        Effective Date set forth below between Old Forrest Consulting LLC (&quot;Consultant&quot;)
        and the party identified below (&quot;Client&quot;), collectively referred to as the
        &quot;Parties&quot; and individually as a &quot;Party.&quot;
      </p>

      {/* Parties Section */}
      <section id="parties" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Parties</h2>

        <div className="bg-white/5 p-6 rounded-lg space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-white font-semibold mb-2">Consultant</p>
              <p className="text-gray-300">Old Forrest Consulting LLC</p>
              <p className="text-gray-400 text-sm">A Utah Limited Liability Company</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Client</p>
              <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5">
                Company Name: ________________
              </div>
              <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5 mt-2">
                Address: ________________
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Effective Date</label>
            <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5 w-48">
              ________________
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section id="purpose" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. Purpose</h2>
        <p className="text-gray-300 mb-4">
          The Parties wish to explore a potential business relationship concerning:
        </p>
        <div className="border border-white/20 rounded p-4 min-h-[60px] bg-white/5 mb-4">
          <p className="text-gray-500">[Describe the purpose of disclosure, e.g., &quot;evaluation of technical consulting services for Client&apos;s AI project&quot;]</p>
        </div>
        <p className="text-gray-300">
          (the &quot;Purpose&quot;). In connection with the Purpose, each Party may disclose
          certain confidential and proprietary information to the other Party.
        </p>
      </section>

      {/* Definition of Confidential Information */}
      <section id="definition" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Definition of Confidential Information</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Confidential Information</h3>
        <p className="text-gray-300 mb-4">
          &quot;Confidential Information&quot; means any and all non-public information disclosed by
          one Party (the &quot;Disclosing Party&quot;) to the other Party (the &quot;Receiving Party&quot;),
          whether orally, in writing, or by any other means, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Technical information, including software, source code, algorithms, APIs, architectures, and documentation</li>
          <li>Business information, including business plans, strategies, customer lists, and financial data</li>
          <li>Product information, including product plans, designs, and roadmaps</li>
          <li>Trade secrets and proprietary methodologies</li>
          <li>Any information marked or identified as &quot;Confidential&quot; or &quot;Proprietary&quot;</li>
          <li>Any information that a reasonable person would understand to be confidential given the nature of the information and circumstances of disclosure</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Consultant-Specific Information</h3>
        <p className="text-gray-300">
          For clarity, Consultant&apos;s Confidential Information includes proprietary tools,
          frameworks, methodologies, and techniques used in providing services, regardless
          of whether such information is marked as confidential.
        </p>
      </section>

      {/* Obligations */}
      <section id="obligations" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. Obligations</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Protection of Confidential Information</h3>
        <p className="text-gray-300 mb-4">
          The Receiving Party agrees to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Hold and maintain Confidential Information in strict confidence</li>
          <li>Use at least the same degree of care to protect Confidential Information as it uses to protect its own confidential information, but in no event less than reasonable care</li>
          <li>Use Confidential Information solely for the Purpose</li>
          <li>Not disclose Confidential Information to any third party without prior written consent of the Disclosing Party</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Permitted Disclosures</h3>
        <p className="text-gray-300 mb-4">
          The Receiving Party may disclose Confidential Information to its employees,
          contractors, and advisors who:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Have a need to know such information for the Purpose</li>
          <li>Are bound by confidentiality obligations at least as protective as those in this Agreement</li>
        </ul>
        <p className="text-gray-300">
          The Receiving Party shall be responsible for any breach of this Agreement by such persons.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Required Disclosures</h3>
        <p className="text-gray-300">
          If the Receiving Party is required by law, regulation, or court order to disclose
          Confidential Information, it shall: (a) promptly notify the Disclosing Party
          (if legally permitted); (b) cooperate with the Disclosing Party in seeking a
          protective order; and (c) disclose only the minimum information required.
        </p>
      </section>

      {/* Exclusions */}
      <section id="exclusions" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Exclusions</h2>
        <p className="text-gray-300 mb-4">
          Confidential Information does not include information that:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Is or becomes publicly available through no fault of the Receiving Party</li>
          <li>Was rightfully in the Receiving Party&apos;s possession prior to disclosure, without restriction on use or disclosure</li>
          <li>Is rightfully received from a third party without restriction and without breach of this Agreement</li>
          <li>Is independently developed by the Receiving Party without use of or reference to the Disclosing Party&apos;s Confidential Information</li>
          <li>Is approved for release in writing by the Disclosing Party</li>
        </ul>
      </section>

      {/* Term and Termination */}
      <section id="term" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">6. Term and Termination</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Term</h3>
        <p className="text-gray-300 mb-4">
          This Agreement shall be effective as of the Effective Date and shall continue for
          a period of one (1) year, unless earlier terminated by either Party upon thirty
          (30) days&apos; prior written notice.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Survival</h3>
        <p className="text-gray-300">
          The confidentiality obligations set forth herein shall survive termination of this
          Agreement for a period of three (3) years from the date of disclosure of the
          applicable Confidential Information.
        </p>
      </section>

      {/* Return of Materials */}
      <section id="return-materials" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">7. Return of Materials</h2>
        <p className="text-gray-300">
          Upon termination of this Agreement or upon request by the Disclosing Party, the
          Receiving Party shall promptly: (a) return all tangible materials containing
          Confidential Information; (b) permanently delete all electronic copies of
          Confidential Information from its systems; and (c) certify in writing that it
          has complied with these obligations. Notwithstanding the foregoing, the Receiving
          Party may retain copies of Confidential Information as required by law or for
          archival purposes, subject to the continuing confidentiality obligations herein.
        </p>
      </section>

      {/* Remedies */}
      <section id="remedies" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">8. Remedies</h2>
        <p className="text-gray-300 mb-4">
          The Parties acknowledge that any breach of this Agreement may cause irreparable
          harm to the Disclosing Party for which monetary damages would be inadequate.
          Accordingly, the Disclosing Party shall be entitled to seek equitable relief,
          including injunction and specific performance, in addition to any other remedies
          available at law or in equity.
        </p>
        <p className="text-gray-300">
          Nothing in this Agreement shall limit either Party&apos;s liability for fraud,
          willful misconduct, or gross negligence.
        </p>
      </section>

      {/* General Provisions */}
      <section id="general" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">9. General Provisions</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 No License</h3>
        <p className="text-gray-300 mb-4">
          Nothing in this Agreement grants any license, by implication, estoppel, or
          otherwise, under any patent, copyright, trademark, or other intellectual
          property rights.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 No Obligation</h3>
        <p className="text-gray-300 mb-4">
          Nothing in this Agreement obligates either Party to enter into any further
          agreement or business relationship.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.3 Governing Law</h3>
        <p className="text-gray-300 mb-4">
          This Agreement shall be governed by and construed in accordance with the laws of
          the State of Utah, without regard to its conflict of laws principles.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.4 Entire Agreement</h3>
        <p className="text-gray-300 mb-4">
          This Agreement constitutes the entire agreement between the Parties with respect
          to the subject matter hereof and supersedes all prior negotiations, representations,
          and agreements.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.5 Amendments</h3>
        <p className="text-gray-300 mb-4">
          This Agreement may only be amended by a written instrument signed by both Parties.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.6 Severability</h3>
        <p className="text-gray-300 mb-4">
          If any provision of this Agreement is found to be unenforceable, the remaining
          provisions shall continue in full force and effect.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.7 Counterparts</h3>
        <p className="text-gray-300">
          This Agreement may be executed in counterparts, each of which shall be deemed an
          original, and all of which together shall constitute one and the same instrument.
          Electronic signatures shall be deemed valid and binding.
        </p>
      </section>

      {/* Signature Block */}
      <section className="mt-16 p-8 bg-white/5 border border-white/10 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">Signatures</h2>
        <p className="text-gray-300 mb-8">
          IN WITNESS WHEREOF, the Parties have executed this Non-Disclosure Agreement as
          of the Effective Date.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-white font-semibold mb-4">OLD FORREST CONSULTING LLC</p>
            <div className="border-b border-white/20 mb-2 h-8"></div>
            <p className="text-gray-400 text-sm">Signature</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Printed Name</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Title</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Date</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4">CLIENT</p>
            <div className="border-b border-white/20 mb-2 h-8"></div>
            <p className="text-gray-400 text-sm">Signature</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Printed Name</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Title</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Date</p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
