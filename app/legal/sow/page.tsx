import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Statement of Work Template",
  description: "Statement of Work template for project engagements with Old Forrest Consulting LLC.",
};

const tableOfContents = [
  { id: "project-info", title: "Project Information" },
  { id: "scope", title: "Scope of Work" },
  { id: "deliverables", title: "Deliverables" },
  { id: "timeline", title: "Timeline and Milestones" },
  { id: "pricing", title: "Pricing and Payment" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "out-of-scope", title: "Out of Scope" },
  { id: "change-orders", title: "Change Orders" },
  { id: "acceptance", title: "Acceptance Criteria" },
];

export default function SOWPage() {
  return (
    <LegalPageLayout
      title="Statement of Work Template"
      lastUpdated="December 2024"
      tableOfContents={tableOfContents}
    >
      <div className="mb-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
        <p className="text-gray-300">
          This Statement of Work (&quot;SOW&quot;) is entered into pursuant to the Master Service
          Agreement between Old Forrest Consulting LLC and Client. This SOW is subject to all
          terms and conditions of the MSA.
        </p>
      </div>

      {/* Section 1: Project Information */}
      <section id="project-info" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Project Information</h2>

        <div className="space-y-4 bg-white/5 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">SOW Number</label>
              <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5">
                SOW-____-____
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Effective Date</label>
              <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5">
                ________________
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Project Name</label>
            <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5">
              ________________________________________________
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Client Name</label>
            <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5">
              ________________________________________________
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Client Contact</label>
            <div className="border border-white/20 rounded px-3 py-2 text-white bg-white/5">
              Name: ________________ | Email: ________________ | Phone: ________________
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Engagement Type</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 text-gray-300">
                <div className="w-4 h-4 border border-white/40 rounded"></div>
                Hourly Consulting
              </label>
              <label className="flex items-center gap-2 text-gray-300">
                <div className="w-4 h-4 border border-white/40 rounded"></div>
                Project Rescue
              </label>
              <label className="flex items-center gap-2 text-gray-300">
                <div className="w-4 h-4 border border-white/40 rounded"></div>
                Fractional CTO
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Scope of Work */}
      <section id="scope" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. Scope of Work</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Project Overview</h3>
        <p className="text-gray-400 italic mb-4">
          [Describe the overall project, its goals, and the problem being solved]
        </p>
        <div className="border border-white/20 rounded p-4 min-h-[100px] bg-white/5">
          <p className="text-gray-500">________________</p>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Objectives</h3>
        <p className="text-gray-400 italic mb-4">
          [List specific, measurable objectives for this engagement]
        </p>
        <div className="border border-white/20 rounded p-4 bg-white/5">
          <ul className="space-y-2 text-gray-300">
            <li>1. ________________________________________________</li>
            <li>2. ________________________________________________</li>
            <li>3. ________________________________________________</li>
            <li>4. ________________________________________________</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Technical Scope</h3>
        <p className="text-gray-400 italic mb-4">
          [Describe specific technical work to be performed]
        </p>
        <div className="border border-white/20 rounded p-4 min-h-[100px] bg-white/5">
          <p className="text-gray-500">________________</p>
        </div>
      </section>

      {/* Section 3: Deliverables */}
      <section id="deliverables" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Deliverables</h2>
        <p className="text-gray-300 mb-4">
          Consultant shall deliver the following items upon completion of the project:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="border border-white/10 px-4 py-3 text-left text-white">#</th>
                <th className="border border-white/10 px-4 py-3 text-left text-white">Deliverable</th>
                <th className="border border-white/10 px-4 py-3 text-left text-white">Description</th>
                <th className="border border-white/10 px-4 py-3 text-left text-white">Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white/10 px-4 py-3 text-gray-300">D1</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
              </tr>
              <tr className="bg-white/5">
                <td className="border border-white/10 px-4 py-3 text-gray-300">D2</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
              </tr>
              <tr>
                <td className="border border-white/10 px-4 py-3 text-gray-300">D3</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
              </tr>
              <tr className="bg-white/5">
                <td className="border border-white/10 px-4 py-3 text-gray-300">D4</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Timeline */}
      <section id="timeline" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. Timeline and Milestones</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 p-4 rounded-lg">
            <label className="block text-gray-400 text-sm mb-1">Project Start Date</label>
            <div className="text-white text-lg">________________</div>
          </div>
          <div className="bg-white/5 p-4 rounded-lg">
            <label className="block text-gray-400 text-sm mb-1">Estimated Completion</label>
            <div className="text-white text-lg">________________</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Milestones</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="border border-white/10 px-4 py-3 text-left text-white">Milestone</th>
                <th className="border border-white/10 px-4 py-3 text-left text-white">Description</th>
                <th className="border border-white/10 px-4 py-3 text-left text-white">Target Date</th>
                <th className="border border-white/10 px-4 py-3 text-left text-white">Payment Due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white/10 px-4 py-3 text-gray-300">M1: Kickoff</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">Project initiation</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">$________</td>
              </tr>
              <tr className="bg-white/5">
                <td className="border border-white/10 px-4 py-3 text-gray-300">M2: ________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">$________</td>
              </tr>
              <tr>
                <td className="border border-white/10 px-4 py-3 text-gray-300">M3: ________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">$________</td>
              </tr>
              <tr className="bg-white/5">
                <td className="border border-white/10 px-4 py-3 text-gray-300">M4: Final Delivery</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">Project completion</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">________</td>
                <td className="border border-white/10 px-4 py-3 text-gray-300">$________</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section id="pricing" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Pricing and Payment</h2>

        <div className="bg-white/5 p-6 rounded-lg mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Pricing Model</label>
              <div className="flex flex-col gap-2 mt-2">
                <label className="flex items-center gap-2 text-gray-300">
                  <div className="w-4 h-4 border border-white/40 rounded"></div>
                  Fixed Price: $________________
                </label>
                <label className="flex items-center gap-2 text-gray-300">
                  <div className="w-4 h-4 border border-white/40 rounded"></div>
                  Hourly: $______/hour (Est. ______ hours)
                </label>
                <label className="flex items-center gap-2 text-gray-300">
                  <div className="w-4 h-4 border border-white/40 rounded"></div>
                  Monthly Retainer: $______/month
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Total Estimated Value</label>
              <div className="text-3xl font-bold text-white mt-2">$________________</div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Payment Schedule</h3>
        <div className="space-y-3 text-gray-300">
          <p><strong className="text-white">Deposit:</strong> ___% ($________) due upon SOW execution</p>
          <p><strong className="text-white">Progress Payments:</strong> As specified in milestones above</p>
          <p><strong className="text-white">Final Payment:</strong> Due upon delivery and acceptance</p>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Hourly Overage (if applicable)</h3>
        <p className="text-gray-300">
          If actual hours exceed the estimate by more than 10%, Consultant will notify Client
          and obtain written approval before continuing. Additional hours will be billed at
          $______/hour.
        </p>
      </section>

      {/* Section 6: Client Responsibilities */}
      <section id="client-responsibilities" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">6. Client Responsibilities</h2>
        <p className="text-gray-300 mb-4">
          Client agrees to provide the following in a timely manner to enable Consultant to
          perform the Services:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Access to all necessary systems, codebases, and environments</li>
          <li>Required credentials and permissions</li>
          <li>Designated point of contact available for questions and decisions</li>
          <li>Timely review and feedback on deliverables (within 5 business days)</li>
          <li>Written approval for milestones and change orders</li>
          <li>Any Client Materials specified below:</li>
        </ul>
        <div className="border border-white/20 rounded p-4 mt-4 min-h-[80px] bg-white/5">
          <p className="text-gray-500">Additional client-provided materials: ________________</p>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-yellow-200/80 text-sm">
            <strong>Note:</strong> Delays in Client providing required access, feedback, or
            approvals may result in schedule adjustments and will not be considered a delay
            by Consultant.
          </p>
        </div>
      </section>

      {/* Section 7: Out of Scope */}
      <section id="out-of-scope" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">7. Out of Scope</h2>
        <p className="text-gray-300 mb-4">
          The following items are explicitly excluded from this SOW and would require a
          separate SOW or change order:
        </p>
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400">x</span>
              <span>________________________________________________</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">x</span>
              <span>________________________________________________</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">x</span>
              <span>________________________________________________</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">x</span>
              <span>________________________________________________</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 8: Change Orders */}
      <section id="change-orders" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">8. Change Orders</h2>
        <p className="text-gray-300 mb-4">
          Any changes to the scope, deliverables, timeline, or pricing defined in this SOW
          must be documented in a written Change Order signed by both parties.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Change Order Process</h3>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Client submits change request in writing (email acceptable)</li>
          <li>Consultant evaluates impact on scope, timeline, and cost within 3 business days</li>
          <li>Consultant provides written estimate for the change</li>
          <li>Client approves or rejects in writing</li>
          <li>Upon approval, Change Order is executed and work begins</li>
        </ol>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Change Order Fees</h3>
        <p className="text-gray-300">
          Changes will be priced at the hourly rate of $______/hour, or as a fixed fee for
          defined scope additions. A minimum change order fee of $______ applies.
        </p>
      </section>

      {/* Section 9: Acceptance */}
      <section id="acceptance" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">9. Acceptance Criteria</h2>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 Acceptance Process</h3>
        <p className="text-gray-300 mb-4">
          Upon delivery of each milestone or deliverable:
        </p>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Consultant delivers work product and notifies Client</li>
          <li>Client has 5 business days to review and test</li>
          <li>Client provides written acceptance or specific rejection reasons</li>
          <li>If rejected, Consultant addresses issues within scope and resubmits</li>
          <li>Failure to respond within 5 business days constitutes acceptance</li>
        </ol>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 Acceptance Criteria</h3>
        <p className="text-gray-400 italic mb-4">
          [Define specific criteria for acceptance - what constitutes &quot;done&quot;]
        </p>
        <div className="border border-white/20 rounded p-4 min-h-[100px] bg-white/5">
          <p className="text-gray-500">________________</p>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.3 Warranty Period</h3>
        <p className="text-gray-300">
          Following final acceptance, a 30-day warranty period begins. During this period,
          Consultant will correct any defects in the delivered Work Product at no additional
          charge. The warranty covers defects against the agreed specifications only and does
          not cover changes in requirements, third-party systems, or Client modifications.
        </p>
      </section>

      {/* Signature Block */}
      <section className="mt-16 p-8 bg-white/5 border border-white/10 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">Agreement</h2>
        <p className="text-gray-300 mb-8">
          By signing below, both parties agree to perform according to the terms of this
          Statement of Work and the referenced Master Service Agreement.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-white font-semibold mb-2">OLD FORREST CONSULTING LLC</p>
            <div className="border-b border-white/20 mb-2 h-8"></div>
            <p className="text-gray-400 text-sm">Authorized Signature</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Printed Name</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Date</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">CLIENT</p>
            <div className="border-b border-white/20 mb-2 h-8"></div>
            <p className="text-gray-400 text-sm">Authorized Signature</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Printed Name &amp; Title</p>
            <div className="border-b border-white/20 mb-2 mt-4 h-8"></div>
            <p className="text-gray-400 text-sm">Date</p>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
