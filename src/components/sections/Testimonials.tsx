
const teamMembers = [
  {
    name: 'John Mamboleo',
    title: 'CEO · VIZX GLOBAL SOLUTIONS',
    description: 'John Mamboleo is a healthcare staffing executive with over 20 years of experience within ATC Healthcare, where he led one of its most successful and high-performing franchise operations.\n\nWith deep operational expertise, John understands the real challenges staffing companies face and has built solutions to address them. As the founder of VizX Global Solutions (VGS), he has helped organizations reduce operational costs by 60–70% while improving efficiency and scalability.\n\nHe is also a proven crisis leader, having successfully navigated major disruptions such as nurse strikes, ensuring continuity and rapid workforce deployment at scale.',
    image: 'https://res.cloudinary.com/dvkt0lsqb/image/upload/v1777324450/Image_hxttm4.jpg',
  },
  {
    name: 'Brian K.',
    title: 'SENIOR MANAGER, PARTNERSHIPS · VIZX GLOBAL SOLUTIONS',
    description: 'Brian is a results-driven partnerships executive at VizX Global Solutions (VGS), where he plays a key role in helping franchise owners scale their operations and achieve maximum profitability.\n\nWorking closely alongside John, Brian brings a strategic approach to growth, combining deep market insight including firsthand experience working within an ATC franchise with a strong focus on execution.\n\nHe excels in client relationship management, building lasting partnerships rooted in trust and performance.',
    image: 'https://res.cloudinary.com/dvkt0lsqb/image/upload/v1777324449/9N2A3801_dkjcwl.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="team" className="py-16 lg:py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
            The team behind it
          </p>
          <h2 className="font-heading font-bold leading-[1.1] tracking-tight text-foreground text-[clamp(2rem,3.8vw,3rem)] max-w-2xl">
            People who've been
            <br />
            <span className="italic text-primary">inside the ATC ecosystem.</span>
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-card border border-border rounded-2xl p-7 lg:p-9 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Image with Primary Border */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-primary p-[2px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Header Text */}
                <div>
                  <h3 className="font-heading font-bold text-[19px] text-foreground leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-primary text-[9.5px] font-bold uppercase tracking-[0.12em] mt-1">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="text-muted-foreground text-[13.5px] leading-[1.65] space-y-4">
                {member.description.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}