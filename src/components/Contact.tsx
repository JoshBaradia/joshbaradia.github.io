import React, { useState } from "react";
import { Mail, Phone, Linkedin, Instagram, MapPin } from "lucide-react";
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const playSound = () => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.error("Error playing sound:", error);
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      await emailjs.send('service_nwz2gqn', 'template_9sv24gm', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }, '5A08LW69Rgrsf2sVB');

      // Play sound effect
      playSound();

      // Show success message
      toast({
        title: "Success!",
        description: "Your message has been sent successfully."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Let's Connect!  </h2>
        
        <p className="text-center text-muted-foreground font-light mb-12 italic">
          Have something in mind? Drop your message here!
        </p>
        
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
                <MapPin className="text-primary" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    New York City, NY, USA
                  </p>
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
                  <a href="https://www.linkedin.com/in/josh-baradia-158637157/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">joshbaradia</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Instagram className="text-primary" size={20} />
                <div>
                  <p className="font-medium">Instagram</p>
                  <a href="https://www.instagram.com/joshbaradia?igsh=MWl5djluNXJuNXpoZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@joshbaradia</a>
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
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Message subject" required className="contact-input" />
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
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;