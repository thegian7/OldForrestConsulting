"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FILTERS = {
  all: "All Projects",
  ai: "AI & ML",
  mobile: "Mobile",
  infrastructure: "Infrastructure",
  automation: "Automation",
} as const;

type FilterKey = keyof typeof FILTERS;

// Map case studies to filter categories
const STUDY_CATEGORIES: Record<string, FilterKey[]> = {
  "edify-platform": ["infrastructure"],
  "paperless-ai-system": ["ai"],
  "whatsappmeta": ["automation"],
  "edifymobile": ["mobile"],
  "wingbeat": ["ai"],
  "paperless-gpt": ["ai"],
};

export default function CaseStudyFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((study) => STUDY_CATEGORIES[study.slug]?.includes(activeFilter));

  return (
    <section id="case-studies" className="section-even section-border py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Proven Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Real projects. Real outcomes. See what we've shipped.
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(FILTERS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as FilterKey)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === key
                    ? "bg-primary text-white"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col"
    >
      <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
        {study.role}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{study.client}</h3>
      <p className="text-slate-300 text-sm mb-4">{study.subtitle}</p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-4 mb-6">
        {study.highlights.slice(0, 3).map((h) => (
          <div key={h.label} className="text-center">
            <div className="text-lg font-bold text-primary">{h.value}</div>
            <div className="text-xs text-slate-500">{h.label}</div>
          </div>
        ))}
      </div>

      {/* ROI Badge - placeholder for enhancement */}
      {/* {study.roi && (
        <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4 inline-block">
          {study.roi.costSaved || study.roi.revenueEnabled}
        </div>
      )} */}

      <div className="mt-auto pt-4">
        <Link
          href={`/case-studies/${study.slug}`}
          className="flex items-center gap-1 text-primary text-sm font-medium hover:underline group/link"
        >
          View Full Case Study
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
