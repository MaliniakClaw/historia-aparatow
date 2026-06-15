'use client';

import { useState } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  inventor?: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  index: number;
}

export default function TimelineItem({
  year,
  title,
  inventor,
  description,
  details,
  image,
  imageAlt,
  index,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center gap-8 py-16">
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-sepia-light to-yellow-600 rounded-full z-10 shadow-lg shadow-amber-500/50" />
      
      {/* Content side */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}`}>
        <div className="camera-card bg-gradient-to-br from-warm-black to-black border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sepia-light/20 to-transparent rounded-full blur-3xl" />
          
          <span className="inline-block period-badge text-sepia-light text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {year}
          </span>
          
          <h3 className="heading-serif text-2xl md:text-3xl text-white mb-2">
            {title}
          </h3>
          
          {inventor && (
            <p className="text-silver-age text-sm mb-4 italic">
              {inventor}
            </p>
          )}
          
          <p className="text-gray-300 leading-relaxed mb-4">
            {description}
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sepia-light hover:text-white transition-colors text-sm font-medium"
          >
            {isExpanded ? 'Zwiń ↑' : 'Czytaj więcej ↓'}
          </button>
          
          {isExpanded && (
            <ul className="mt-4 space-y-2 text-gray-400 text-sm animate-fade-in">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sepia-light mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* Image side */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
        <div className="relative aspect-video rounded-2xl overflow-hidden vignette group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="text-white/80 text-xs uppercase tracking-widest">{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}