import { getPortfolioData } from '@/lib/data';
import ContactForm from './ContactForm';

export const dynamic = 'force-dynamic';

export default async function Contact() {
  const data = await getPortfolioData();
  const location = data.profile.location;

  // Generate dynamic map URL
  // Using the simple query parameter format which is more robust without an API key for basic embedding
  // Fallback to "Lagos, Nigeria" if location is missing, but data.profile.location should be present
  const mapQuery = encodeURIComponent(location || "Lagos, Nigeria");
  const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

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
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
         ></iframe>
      </div>

      <ContactForm />
    </div>
  );
}