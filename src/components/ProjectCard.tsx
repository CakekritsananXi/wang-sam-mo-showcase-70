
import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  impact?: string;
  date?: string;
  category?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
  impact,
  date,
  category,
}: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-4 right-4 bg-tour-orange text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
            {category}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          {date && <span className="text-sm text-gray-500">{date}</span>}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {impact && (
          <div className="mb-4">
            <span className="text-sm font-medium text-tour-orange block mb-1">ผลกระทบ:</span>
            <p className="text-sm text-gray-600">{impact}</p>
          </div>
        )}
        
        <Button
          className="w-full bg-transparent hover:bg-tour-orange border-2 border-tour-orange text-tour-orange hover:text-white transition-colors"
          asChild
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            ดูรายละเอียด
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
