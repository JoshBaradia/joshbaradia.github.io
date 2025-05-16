
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <Award className="h-7 w-7 text-primary mr-2" />
          <span className="italic font-serif">Certifications and Recognition</span>
        </h2>
        
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
          <p className="text-center mb-8 text-muted-foreground">
            I've earned various certifications and recognitions throughout my professional journey that validate my expertise and commitment to continuous growth.
          </p>
          
          <Link to="/certificates">
            <Button 
              size="lg" 
              className="flex items-center gap-2"
            >
              <Award className="h-5 w-5" />
              Proof I Walk the Talk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
