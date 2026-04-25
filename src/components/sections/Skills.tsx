"use client";
import { motion } from "framer-motion";
import { BarChart3, Database, Layout, ExternalLink } from "lucide-react";
import { ScrollReveal } from "../UI/ScrollReveal";

const skills = [
  { name: "Power BI", icon: <BarChart3 className="w-8 h-8" />, color: "bg-yellow-100 text-yellow-600", desc: "Advanced DAX, Power Query (M), and Row Level Security." },
  { name: "SQL", icon: <Database className="w-8 h-8" />, color: "bg-blue-100 text-blue-600", desc: "Complex CTEs, Window Functions, and Query Optimization." },
  { name: "Python", icon: <Layout className="w-8 h-8" />, color: "bg-green-100 text-green-600", desc: "Automating data cleaning with Pandas and NumPy." },
  { name: "Excel", icon: <ExternalLink className="w-8 h-8" />, color: "bg-emerald-100 text-emerald-600", desc: "Power Pivot and VBA for legacy system automation." },
];

export const Skills = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Bridging the gap between raw database tables and executive-level decisions.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${skill.color} flex items-center justify-center mb-6`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};