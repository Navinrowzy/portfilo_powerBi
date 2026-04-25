import { HeroVisual } from "@/src/components/sections/HeroVisual";
import { Skills } from "@/src/components/sections/Skills";
import { ProjectCard } from "@/src/components/UI/ProjectCard";
import { ScrollReveal } from "@/src/components/UI/ScrollReveal";
import { Contact } from "../components/sections/Contact";
import { BarChart3, PieChart, Activity, LineChart, Layers } from "lucide-react";
import { Navbar } from "@/src/components/layout/Navbar"; 

const PROJECTS = [
  {
    title: "Supply Chain Resilience Tracker",
    category: "Logistics Analysis",
    impact: "Reduced stock-out events by 22% through predictive inventory modeling and real-time API integration.",
    tags: ["DAX", "Power BI", "SQL Server"],
    imageColor: "bg-blue-600"
  },
  {
    title: "Executive Financial Cockpit",
    category: "Finance",
    impact: "Automated monthly closing reports, saving the finance team 40+ hours of manual Excel work per month.",
    tags: ["Finance", "Power Query", "M-Code"],
    imageColor: "bg-emerald-600"
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      {/* 1. TOP POWER BI RIBBON */}
      <div className="bi-ribbon" />

      {/* 2. DYNAMIC BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {/* Large Data Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-powerbi/5 rounded-full blur-[100px]" />
        
        {/* Floating Dashboard Icons - Very Faint */}
        <Activity className="absolute top-[15%] right-[8%] text-slate-400/10 w-48 h-48 rotate-12" />
        <LineChart className="absolute top-[60%] left-[5%] text-slate-400/10 w-32 h-32 -rotate-12" />
        <Layers className="absolute bottom-[20%] right-[10%] text-slate-400/10 w-40 h-40" />
      </div>

      {/* 3. HERO SECTION */}
      {/* <HeroVisual /> */}
      
      {/* 4. SKILLS SECTION */}
      <Skills />

      {/* 5. CASE STUDIES SECTION */}
      <section className="relative py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-blue-600" />
                  <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">Data Insights</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">Case Studies</h2>
                <p className="text-slate-500 text-lg max-w-lg">
                  Transforming raw datasets into strategic assets through custom DAX logic and intuitive UX.
                </p>
              </div>
              
              <button className="group flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold hover:border-blue-500 transition-all shadow-sm">
                Explore All
                <BarChart3 className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* Project Tiles */}
          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map((proj, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="group relative">
                  {/* Hover Background Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <div className="relative">
                    <ProjectCard {...proj} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="py-24 px-6">
        <ScrollReveal>
          <div className="relative max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-white overflow-hidden shadow-2xl">
            {/* CTA Background Canvas Effect */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Ready to <span className="text-blue-400 italic">Visualize</span> <br /> your success?
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                Whether it's a Power BI architecture audit or a fresh dashboard build, I'm ready to help you find the story in your data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                  Start Project Analysis
                </a>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
                  Download Portfolio PDF
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
      {/* 7. CONTACT SECTION (Handles real email to abc@gmail.com) */}
      <Contact />

      {/* 8. FOOTER */}
      <footer className="py-16 border-t border-slate-200 dark:border-slate-800/50 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white">BI</div>
            <span className="font-bold text-lg tracking-tight">Analyst Portfolio</span>
          </div>

          <div className="flex gap-8 text-slate-500 font-semibold text-sm">
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Dribbble</a>
          </div>

          <p className="text-slate-400 text-sm font-medium">
            © 2026 • Optimized for Data Clarity
          </p>
        </div>
      </footer>
    </main>
  );
}