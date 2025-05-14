import React, { useState } from "react";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:joshbaradia7@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    joshbaradia7@gmail.com
                  </a>
                  <br />
                  <a href="mailto:jb9372@nyu.edu" className="text-muted-foreground hover:text-primary transition-colors">
                    jb9372@nyu.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919990997767" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9990997767
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="text-primary" size={20} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">https://www.linkedin.com/in/josh-baradia-158637157/</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Instagram className="text-primary" size={20} />
                <div>
                  <p className="font-medium">Instagram</p>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@joshbaradia</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="contact-input" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required className="contact-input" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required className="contact-input min-h-[150px] resize-y" />
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-70">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitStatus && <div className={`p-3 rounded-md text-center ${submitStatus.success ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                  {submitStatus.message}
                </div>}
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;