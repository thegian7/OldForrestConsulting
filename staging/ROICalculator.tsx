"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

type ProjectType = "ai-integration" | "project-rescue" | "migration" | "fractional-cto";

interface CalculatorInputs {
  projectType: ProjectType;
  teamSize: number;
  monthsStalled: number;
  monthlyBurn: number;
  completionPercent: number;
}

interface ROIResult {
  costOfDelay: number;
  estimatedRescueCost: number;
  timeSavedMonths: number;
  netSavings: number;
  breakEvenWeeks: number;
}

const PROJECT_CONFIGS: Record<ProjectType, { label: string; rescueRange: [number, number]; avgTimeToShip: number }> = {
  "ai-integration": { label: "AI Integration", rescueRange: [5000, 15000], avgTimeToShip: 1.5 },
  "project-rescue": { label: "Project Rescue", rescueRange: [3000, 20000], avgTimeToShip: 2 },
  "migration": { label: "Platform Migration", rescueRange: [3000, 10000], avgTimeToShip: 1 },
  "fractional-cto": { label: "Fractional CTO", rescueRange: [4500, 15000], avgTimeToShip: 3 },
};

function calculateROI(inputs: CalculatorInputs): ROIResult {
  const config = PROJECT_CONFIGS[inputs.projectType];
  const remainingPercent = (100 - inputs.completionPercent) / 100;

  // Estimated months to finish DIY (based on current stall rate)
  const diyMonthsRemaining = Math.max(inputs.monthsStalled * remainingPercent * 1.5, 2);

  // Cost of continuing to delay
  const costOfDelay = inputs.monthlyBurn * diyMonthsRemaining;

  // Estimated rescue cost (scaled by remaining work)
  const [minCost, maxCost] = config.rescueRange;
  const estimatedRescueCost = Math.round((minCost + (maxCost - minCost) * remainingPercent) / 100) * 100;

  // Time saved
  const timeSavedMonths = Math.max(diyMonthsRemaining - config.avgTimeToShip, 0);

  // Net savings
  const netSavings = costOfDelay - estimatedRescueCost;

  // Break-even in weeks
  const breakEvenWeeks = Math.ceil((estimatedRescueCost / inputs.monthlyBurn) * 4.33);

  return { costOfDelay, estimatedRescueCost, timeSavedMonths, netSavings, breakEvenWeeks };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    projectType: "project-rescue",
    teamSize: 2,
    monthsStalled: 3,
    monthlyBurn: 15000,
    completionPercent: 40,
  });

  const [showResults, setShowResults] = useState(false);
  const results = calculateROI(inputs);

  return (
    <section id="roi-calculator" className="section-even section-border py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            What's Your Stalled Project Costing You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Calculate the true cost of delay vs. bringing in expert help.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Input Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-primary" />
              Your Project Details
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Project Type</label>
                <select
                  value={inputs.projectType}
                  onChange={(e) => setInputs({ ...inputs, projectType: e.target.value as ProjectType })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
                >
                  {Object.entries(PROJECT_CONFIGS).map(([key, config]) => (
                    <option key={key} value={key}>{config.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Monthly Burn Rate: {formatCurrency(inputs.monthlyBurn)}
                </label>
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={1000}
                  value={inputs.monthlyBurn}
                  onChange={(e) => setInputs({ ...inputs, monthlyBurn: Number(e.target.value) })}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Months Stalled: {inputs.monthsStalled}
                </label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={inputs.monthsStalled}
                  onChange={(e) => setInputs({ ...inputs, monthsStalled: Number(e.target.value) })}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Current Completion: {inputs.completionPercent}%
                </label>
                <input
                  type="range"
                  min={5}
                  max={90}
                  step={5}
                  value={inputs.completionPercent}
                  onChange={(e) => setInputs({ ...inputs, completionPercent: Number(e.target.value) })}
                  className="w-full accent-primary"
                />
              </div>

              <button
                onClick={() => setShowResults(true)}
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors"
              >
                Calculate ROI
              </button>
            </div>
          </motion.div>

          {/* Results Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" />
              Your ROI Breakdown
            </h3>

            {showResults ? (
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="text-sm text-red-300 mb-1">Cost of Continued Delay</div>
                  <div className="text-2xl font-bold text-red-400">{formatCurrency(results.costOfDelay)}</div>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-sm text-blue-300 mb-1">Estimated Rescue Investment</div>
                  <div className="text-2xl font-bold text-blue-400">{formatCurrency(results.estimatedRescueCost)}</div>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-sm text-green-300 mb-1">Projected Net Savings</div>
                  <div className="text-2xl font-bold text-green-400">{formatCurrency(results.netSavings)}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock size={16} className="text-primary" />
                    <span className="text-sm">{results.timeSavedMonths.toFixed(1)} months saved</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <DollarSign size={16} className="text-primary" />
                    <span className="text-sm">Break-even: {results.breakEvenWeeks} weeks</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="block w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors text-center"
                >
                  Get a Custom Quote
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 text-center py-12">
                <Calculator size={48} className="mb-4 opacity-30" />
                <p>Fill in your project details and click Calculate to see your potential savings.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
