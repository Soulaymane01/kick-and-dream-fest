import { Users, Calendar, Trophy, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const eligibility = [
  {
    icon: Calendar,
    title: "Age Range",
    description: "Boys & Girls",
    details: "7-14 years old",
  },
  {
    icon: Users,
    title: "Team Types",
    description: "All Teams Welcome",
    details: "Academies, schools, clubs, independent teams",
  },
  {
    icon: Trophy,
    title: "Skill Level",
    description: "All Levels",
    details: "From beginners to experienced players",
  },
  {
    icon: Target,
    title: "Categories",
    description: "Multiple Age Groups",
    details: "U-10, U-12, U-14 divisions",
  },
];

const Participation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who Can Participate?
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everyone is welcome! We celebrate diversity and inclusivity in youth football
            </p>
          </div>

          {/* Eligibility Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {eligibility.map((item, index) => (
              <Card 
                key={item.title}
                className="border-2 border-primary/10 hover:border-primary/30 shadow-card hover:shadow-hover transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-fit mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {item.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call-out Box */}
          <div className="bg-gradient-hero p-8 rounded-3xl text-center text-white shadow-glow animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🌟 Everyone Has a Place on Our Field
            </h3>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
              Whether you're just starting out or already a young star, African Cup Kids welcomes you. 
              It's not just about winning – it's about playing, learning, and growing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participation;
