import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Award, Book } from "lucide-react";

interface CertificateItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const CertificateCard = ({ certificate }: { certificate: CertificateItem }) => (
  <a href={certificate.url} target="_blank" rel="noopener noreferrer">
    <Card className="h-full cursor-pointer hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {certificate.icon}
          <span className="line-clamp-2">{certificate.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Click to view certificate
        </p>
      </CardContent>
    </Card>
  </a>
);

const CertificatesPage = () => {
  const researchCertificates: CertificateItem[] = [
    {
      title: "31st International Conference on COLING 2025",
      url: "https://drive.google.com/file/d/1BhRyg4gtnetb6oyP55FShoPY18GVhENT/view?usp=sharing",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "15th ICCCNT (IIT Mandi)",
      url: "https://drive.google.com/file/d/1MP5ahxUs1LDrLh37PND350DkBkkKvwTt/view?usp=drive_link",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "CVMI 2023 Reviewer",
      url: "https://drive.google.com/file/d/1hnu_4q-8R8KDLwKhE9ff1V9bKkeyVu_Q/view?usp=drive_link",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "The 14th ICCCNT (IIT Delhi)",
      url: "https://drive.google.com/file/d/1qU62SHzAqe8wIrxqTiNzNoCwSGI_n3NT/view?usp=drive_link",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    }
  ];

  const courseCertificates: CertificateItem[] = [
    {
      title: "Strategic Innovation: Building and Sustaining Innovative Organizations",
      url: "https://www.coursera.org/account/accomplishments/verify/Z4KZ9AAIK0RS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Entrepreneurship 1: Developing the Opportunity",
      url: "https://www.coursera.org/account/accomplishments/verify/M2WPADVXIL4Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Introduction to Data Analytics in Google Cloud",
      url: "https://www.coursera.org/account/accomplishments/verify/8ZR9V628J79V",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Neural Networks and Deep Learning",
      url: "https://www.coursera.org/account/accomplishments/verify/YN5R34VE7ZCJ",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Python for Data Science, AI & Development",
      url: "https://www.coursera.org/account/accomplishments/verify/S89241DXXDN6",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Introduction to Finance, Accounting, Modeling and Valuation",
      url: "https://www.udemy.com/certificate/UC-d7f341b5-f3c6-4895-873c-3e4d88bff201/",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Financial Markets",
      url: "https://www.coursera.org/account/accomplishments/verify/ESZ6ZJQXG5J2",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Bonus [2023]",
      url: "https://www.udemy.com/certificate/UC-0a005698-3f72-4f6b-a9f9-eb420a87a51d/",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Python for Computer Vision with OpenCV and Deep Learning",
      url: "https://www.udemy.com/certificate/UC-18cc70f4-2fa4-49c9-8b7c-33f13f3dedb5/",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      url: "https://www.credly.com/badges/43ca3ff1-f7e4-4165-8606-ab13ff9cf675/public_url",
      icon: <Award size={18} className="text-primary flex-shrink-0" />
    },
  ];

  const otherCertificates: CertificateItem[] = [
    {
      title: "Techfest IIT Bombay",
      url: "https://drive.google.com/file/d/1upAsEwnYODE3HQgMSFursIkXpzsO2xL3/view?usp=drive_link",
      icon: <Book size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "Healcode Hackathon",
      url: "https://drive.google.com/file/d/1M_ZI18FFk0IhWikH40787oxqTEpK6B38/view?usp=drive_link",
      icon: <Book size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "BSNL Computer Network",
      url: "https://drive.google.com/file/d/13cdnZsPytiYquHE2uJZgt1Qy3LCLGK8v/view?usp=drive_link",
      icon: <Book size={18} className="text-primary flex-shrink-0" />
    },
    {
      title: "PESU I/O Basis of Marketing",
      url: "https://drive.google.com/file/d/1RjGTb6-vhDWpdOv1Q7aa9XM5sEooxgN0/view?usp=drive_link",
      icon: <Book size={18} className="text-primary flex-shrink-0" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Certifications & Recognition</h1>
        </div>

        <div className="space-y-12">
          {/* Research Conferences and Reviewer Recognition */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Research Conferences and Reviewer Recognition
            </h2>
            <Separator className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchCertificates.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </div>

          {/* Course Certifications */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Course Certifications
            </h2>
            <Separator className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseCertificates.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </div>

          {/* Other Certifications */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Book className="h-5 w-5 text-primary" />
              Other Achievements
            </h2>
            <Separator className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCertificates.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
