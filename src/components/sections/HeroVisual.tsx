"use client";
import { motion } from "framer-motion";
import { TrendingUp, PieChart, Activity } from "lucide-react";

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-[500px] h-[400px] mt-12 lg:mt-0">
      {/* Main Floating Dashboard Card */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-10 top-10 left-10 right-10 bottom-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="h-2 w-24 bg-white/20 rounded" />
          <Activity className="text-blue-400 w-5 h-5" />
        </div>
        
        <div className="space-y-6">
          {[80, 45, 60].map((w, i) => (
            <div key={i} className="flex items-end gap-2 h-20">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${w}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Mini Badges */}
      <motion.div 
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 right-0 bg-emerald-500 text-white p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20"
      >
        <TrendingUp className="w-5 h-5" />
        <span className="font-bold">+24% ROI</span>
      </motion.div>

      <motion.div 
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 -left-4 bg-white text-slate-900 p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20"
      >
        <PieChart className="w-5 h-5 text-blue-600" />
        <span className="font-bold">Automated</span>
      </motion.div>
    </div>
  );
};