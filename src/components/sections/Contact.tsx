"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Copy, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "../UI/ScrollReveal";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const emailAddress = "navinkumark846@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    // Add your Web3Forms Access Key here
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-[#020617]" id="contact">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-slate-500 dark:text-slate-400">Ready to transform your business data into visual stories?</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 rounded-3xl space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigator.clipboard.writeText(emailAddress)}>
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Email Me</p>
                        <p className="text-lg font-medium">{emailAddress}</p>
                      </div>
                      <Copy className="w-4 h-4 ml-auto text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Location</p>
                        <p className="text-lg font-medium">Remote / Global</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal delay={0.3}>
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-[2rem] space-y-6 relative overflow-hidden">
                {status === "sent" && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20 bg-white dark:bg-[#020617] flex flex-col items-center justify-center text-center p-6"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-slate-500 mt-2">I'll get back to you within 24 hours.</p>
                    <button type="button" onClick={() => setStatus("idle")} className="mt-8 text-blue-500 font-semibold underline">Send another</button>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Your Name</label>
                    {/* Added NAME attribute */}
                    <input required name="name" type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email Address</label>
                    {/* Added NAME attribute */}
                    <input required name="email" type="email" placeholder="john@company.com" className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Subject</label>
                  {/* Added NAME attribute */}
                  <input required name="subject" type="text" placeholder="Project Inquiry" className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Message</label>
                  {/* Added NAME attribute */}
                  <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none" />
                </div>

                <button 
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};