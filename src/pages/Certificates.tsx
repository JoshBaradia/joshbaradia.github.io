import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CertificateCarouselItem from "@/components/CertificateCarouselItem";
import { ChevronLeft, Award, Book, ArrowLeft, ArrowRight } from "lucide-react";

interface CertificateItem {
  title: string;
  url: string;
  image: string;
  description: string;
}

const CertificatesPage = () => {
  const researchCertificates: CertificateItem[] = [
    {
      title: "31st International Conference on COLING 2025",
      url: "https://drive.google.com/file/d/1BhRyg4gtnetb6oyP55FShoPY18GVhENT/view?usp=sharing",
      image: "https://i.postimg.cc/gJ2YHvxM/Screenshot-2025-06-24-at-2-09-25-PM.png",
      description: "Research publication in computational linguistics and natural language processing"
    },
    {
      title: "15th ICCCNT (IIT Mandi)",
      url: "https://drive.google.com/file/d/1MP5ahxUs1LDrLh37PND350DkBkkKvwTt/view?usp=drive_link",
      image: "https://i.postimg.cc/j50124yW/Screenshot-2025-06-24-at-3-30-59-PM.png",
      description: "International Conference on Computing, Communication and Networking Technologies"
    },
    {
      title: "CVMI 2023 Reviewer",
      url: "https://drive.google.com/file/d/1hnu_4q-8R8KDLwKhE9ff1V9bKkeyVu_Q/view?usp=drive_link",
      image: "https://i.postimg.cc/NMVGpKqR/Screenshot-2025-06-24-at-2-18-36-PM.png",
      description: "Peer review recognition for Computer Vision and Machine Intelligence conference"
    },
    {
      title: "The 14th ICCCNT (IIT Delhi)",
      url: "https://drive.google.com/file/d/1qU62SHzAqe8wIrxqTiNzNoCwSGI_n3NT/view?usp=drive_link",
      image: "https://i.postimg.cc/XqSX2JtG/Screenshot-2025-06-24-at-2-20-13-PM.png",
      description: "Research contribution to computing and networking technologies"
    }
  ];

  const courseCertificates: CertificateItem[] = [
    {
      title: "Strategic Innovation: Building and Sustaining Innovative Organizations",
      url: "https://www.coursera.org/account/accomplishments/verify/Z4KZ9AAIK0RS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      image: "https://i.postimg.cc/F15Q0kdz/Screenshot-2025-06-24-at-2-25-03-PM.png",
      description: "Strategic innovation and organizational development course completion"
    },
    {
      title: "Entrepreneurship 1: Developing the Opportunity",
      url: "https://www.coursera.org/account/accomplishments/verify/M2WPADVXIL4Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      image: "https://i.postimg.cc/52CkH5zW/Screenshot-2025-06-24-at-2-42-40-PM.png",
      description: "Foundational entrepreneurship skills and opportunity identification"
    },
    {
      title: "Introduction to Data Analytics in Google Cloud",
      url: "https://www.coursera.org/account/accomplishments/verify/8ZR9V628J79V",
      image: "https://i.postimg.cc/MpCk7khH/Screenshot-2025-06-24-at-3-35-14-PM.png",
      description: "Google Cloud Platform data analytics fundamentals and tools"
    },
    {
      title: "Neural Networks and Deep Learning",
      url: "https://www.coursera.org/account/accomplishments/verify/YN5R34VE7ZCJ",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
      description: "Deep learning fundamentals and neural network architectures"
    },
    {
      title: "Python for Data Science, AI & Development",
      url: "https://www.coursera.org/account/accomplishments/verify/S89241DXXDN6",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop",
      description: "Python programming for data science and artificial intelligence"
    },
    {
      title: "Financial Markets",
      url: "https://www.coursera.org/account/accomplishments/verify/ESZ6ZJQXG5J2",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
      description: "Understanding financial markets, instruments, and investment strategies"
    },
    {
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Bonus [2023]",
      url: "https://www.udemy.com/certificate/UC-0a005698-3f72-4f6b-a9f9-eb420a87a51d/",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop",
      description: "Comprehensive machine learning course covering Python and R programming"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      url: "https://www.credly.com/badges/43ca3ff1-f7e4-4165-8606-ab13ff9cf675/public_url",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
      description: "Amazon Web Services cloud computing fundamentals and concepts"
    }
  ];

  const otherCertificates: CertificateItem[] = [
    {
      title: "Techfest IIT Bombay",
      url: "https://drive.google.com/file/d/1upAsEwnYODE3HQgMSFursIkXpzsO2xL3/view?usp=drive_link",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop",
      description: "Participation in Asia's largest science and technology festival"
    },
    {
      title: "Healcode Hackathon",
      url: "https://drive.google.com/file/d/1M_ZI18FFk0IhWikH40787oxqTEpK6B38/view?usp=drive_link",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop",
      description: "Healthcare technology hackathon achievement and innovation"
    },
    {
      title: "BSNL Computer Network",
      url: "https://drive.google.com/file/d/13cdnZsPytiYquHE2uJZgt1Qy3LCLGK8v/view?usp=drive_link",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
      description: "Computer networking certification from Bharat Sanchar Nigam Limited"
    },
    {
      title: "PESU I/O Basis of Marketing",
      url: "https://drive.google.com/file/d/1RjGTb6-vhDWpdOv1Q7aa9XM5sEooxgN0/view?usp=drive_link",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
      description: "Marketing fundamentals and digital marketing strategies"
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

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="research" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Research
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="other" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Other
            </TabsTrigger>
          </TabsList>

          <TabsContent value="research" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Research Conferences and Reviewer Recognition</h2>
              <p className="text-muted-foreground">Published research and peer review contributions to international conferences</p>
            </div>
            <div className="relative">
{/*               <div className="flex items-center justify-center mb-4 text-sm text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Scroll horizontally to explore more certificates</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div> */}
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {researchCertificates.map((cert, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <CertificateCarouselItem {...cert} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Course Certifications</h2>
              <p className="text-muted-foreground">Professional development through online courses and specialized training</p>
            </div>
            <div className="relative">
{/*               <div className="flex items-center justify-center mb-4 text-sm text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Scroll horizontally to explore more certificates</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div> */}
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {courseCertificates.map((cert, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <CertificateCarouselItem {...cert} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Other Achievements</h2>
              <p className="text-muted-foreground">Additional certifications, competitions, and professional recognitions</p>
            </div>
            <div className="relative">
{/*               <div className="flex items-center justify-center mb-4 text-sm text-muted-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Scroll horizontally to explore more certificates</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div> */}
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {otherCertificates.map((cert, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <CertificateCarouselItem {...cert} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CertificatesPage;
