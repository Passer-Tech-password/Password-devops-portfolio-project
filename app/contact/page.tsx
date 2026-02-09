"use client";

import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
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
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          Contact
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
      </header>

      {/* Map Section */}
      <div className="w-full h-[300px] bg-[#2b2b2c] rounded-2xl overflow-hidden relative grayscale invert-[.1]">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310860053!2d3.119139564614611!3d6.548035695696517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1707474000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>

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
    </div>
  );
}
