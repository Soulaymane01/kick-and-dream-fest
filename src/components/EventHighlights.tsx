import { Flag, Users, Trophy, Zap, Star, Camera, Music, Award } from "lucide-react";

const highlights = [
  {
    icon: Flag,
    title: "Opening Ceremony",
    description: "Spectacular start with team parades, anthems, and cultural performances",
    gradient: "from-primary to-success",
  },
  {
    icon: Users,
    title: "Group Stage Matches",
    description: "Exciting round-robin games where every team gets to showcase their skills",
    gradient: "from-accent to-info-blue",
  },
  {
    icon: Trophy,
    title: "Finals",
    description: "Championship matches with professional setup and cheering crowds",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Zap,
    title: "Skill Challenges",
    description: "Fun competitions testing dribbling, shooting, and passing abilities",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Star,
    title: "Player of the Match",
    description: "Recognition awards after every game to celebrate outstanding performances",
    gradient: "from-primary to-accent",
  },
  {
    icon: Music,
    title: "Entertainment Zone",
    description: "Face painting, games, music, and activities for the whole family",
    gradient: "from-accent to-primary",
  },
  {
    icon: Camera,
    title: "Photo & Media Zone",
    description: "Professional photography studio and action shots throughout the tournament",
    gradient: "from-info-blue to-primary",
  },
  {
    icon: Award,
    title: "Trophy Ceremony",
    description: "Grand finale with trophies, medals, and certificates for all participants",
    gradient: "from-secondary to-primary",
  },
];

const EventHighlights = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A full day packed with action, excitement, and unforgettable moments
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${highlight.gradient} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-xl text-foreground font-semibold mb-4">
              ⚽ Every moment is designed to create lasting memories
            </p>
            <p className="text-muted-foreground">
              From the first whistle to the trophy ceremony, your child will experience the thrill of competitive football in a supportive environment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
