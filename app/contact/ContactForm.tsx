"use client";

import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demonstration purposes, we'll just set it to success
    // In a real app, you would make an API call here
    setFormState('success');
    
    // Reset form after showing success message
    setTimeout(() => {
        setFormState('idle');
        (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section>
        <h3 className="text-xl font-bold text-white mb-6">Contact Form</h3>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="w-full bg-transparent border border-[#383838] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                      disabled={formState === 'submitting' || formState === 'success'}
                    />
                </div>
                <div className="space-y-2">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      className="w-full bg-transparent border border-[#383838] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                      disabled={formState === 'submitting' || formState === 'success'}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  required
                  className="w-full bg-transparent border border-[#383838] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                  disabled={formState === 'submitting' || formState === 'success'}
                ></textarea>
            </div>

            <div className="flex justify-end items-center gap-4">
                {formState === 'success' && (
                    <span className="text-green-500 flex items-center gap-2 animate-in fade-in">
                        <CheckCircle size={18} />
                        Message Sent!
                    </span>
                )}
                
                <button 
                  type="submit"
                  disabled={formState === 'submitting' || formState === 'success'}
                  className={`flex items-center gap-2 font-medium px-6 py-3 rounded-xl transition-all shadow-lg 
                      ${formState === 'submitting' 
                          ? 'bg-blue-800 text-gray-300 cursor-wait' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
                      } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                    {formState === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                    ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    </section>
  );
}