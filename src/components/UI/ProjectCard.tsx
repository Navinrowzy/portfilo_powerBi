"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  impact: string;
  tags: string[];
  imageColor: string;
}

export const ProjectCard = ({ title, category, impact, tags, imageColor }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200"
    >
      <div className={`aspect-video w-full ${imageColor} relative overflow-hidden`}>
        {/* Placeholder for Dashboard Image */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>
      
      <div className="p-8">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">{category}</span>
        <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          <span className="font-semibold text-slate-900 underline decoration-blue-200">Impact:</span> {impact}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium italic">
              #{tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 font-bold text-slate-900 group/btn">
          View Live Dashboard 
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};