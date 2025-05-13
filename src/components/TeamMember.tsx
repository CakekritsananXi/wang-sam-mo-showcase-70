
import React from "react";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

const TeamMember = ({ name, role, bio, imageUrl, socialLinks }: TeamMemberProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-tour-orange hover:bg-tour-orange hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-tour-orange text-sm mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
