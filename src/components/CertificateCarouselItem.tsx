
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CertificateCarouselItemProps {
  title: string;
  url: string;
  image: string;
  description: string;
}

const CertificateCarouselItem = ({ title, url, image, description }: CertificateCarouselItemProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full cursor-pointer hover:shadow-lg transition-all group">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default CertificateCarouselItem;
