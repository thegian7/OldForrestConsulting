"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  author: string;
  index?: number;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  tags,
  author,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 group"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/blog/${slug}`}>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </Link>

      <p className="text-slate-300 text-sm mb-6 line-clamp-3">{excerpt}</p>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-4">
          <span>{author}</span>
          <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readingTime} min read
          </span>
        </div>

        <Link
          href={`/blog/${slug}`}
          className="flex items-center gap-1 text-primary hover:underline group/link"
        >
          Read
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
