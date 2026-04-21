import React from 'react';
import { X } from 'lucide-react';
import { InlineWidget } from "react-calendly";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden animate-in zoom-in-95 duration-300 h-[90vh] md:h-[700px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-border/50 bg-secondary/30">
          <div>
            <h2 className="text-xl font-bold text-foreground">Schedule a Call</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Select a time that works best for you.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-secondary transition-all hover:rotate-90 duration-200"
          >
            <X size={20} className="text-muted-foreground hover:text-foreground" />
          </button>
        </div>

        {/* Calendly Widget */}
        <div className="flex-1 overflow-hidden bg-white">
          <InlineWidget 
            url="https://calendly.com/brian-vizxglobal/discovery-meeting" 
            styles={{
              height: '100%',
              width: '100%',
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '54A2D9',
              textColor: '222222'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
