import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          {/* Logo and Company Info */}
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768516447/Untitled_design__4__1-removebg-preview_ivfmvy.png" 
              alt="VizX Global Solutions" 
              className="h-8 w-auto"
            />
            <span className="text-foreground text-sm font-medium">
              VizX Global Solutions
            </span>
          </div>

          {/* Copyright and Confidential Notice */}
          <div className="text-muted-foreground text-xs">
            For ATC Healthcare Franchise owners. Confidential
          </div>

          {/* Website Link */}
          <a 
            href="https://vizxglobal.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary text-xs hover:underline transition-all duration-200"
          >
            vizxglobal.com
          </a>
        </div>
      </div>
    </footer>
  );
}