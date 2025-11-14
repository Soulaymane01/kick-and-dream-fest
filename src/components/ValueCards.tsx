import { Trophy, Globe, Camera, Shield, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Trophy,
    title: "Professional Tournament Experience",
    description: "Compete in a real tournament setting with official referees, organized matches, and championship structure",
    color: "from-primary to-success",
  },
  {
    icon: Globe,
    title: "Cultural Exchange & Fun",
    description: "Experience diverse cultures, make new friends from different backgrounds, and celebrate African heritage",
    color: "from-secondary to-accent",
  },
  {
    icon: Camera,
    title: "Full Media Coverage",
    description: "Professional photos and videos of every match, creating lasting memories for players and families",
    color: "from-accent to-info-blue",
  },
  {
    icon: Shield,
    title: "High-Level Organization & Safety",
    description: "Professionally managed event with focus on child safety, medical support, and parent peace of mind",
    color: "from-primary to-accent",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    description: "Trophies, medals, certificates, and Player of the Match awards to celebrate every achievement",
    color: "from-secondary to-primary",
  },
  {
    icon: Sparkles,
    title: "Excitement for All",
    description: "Entertainment zones, food stalls, interactive activities – a full day of fun for kids and parents",
    color: "from-warning to-secondary",
  },
];

const ValueCards = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Join African Cup Kids?
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An unforgettable experience that goes beyond football
            </p>
          </div>

          {/* Value Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-slide-up overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon with gradient background */}
                  <div className={`bg-gradient-to-br ${value.color} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
