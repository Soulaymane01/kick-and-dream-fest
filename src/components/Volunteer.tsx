import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Megaphone, Package, Award } from "lucide-react";

const teams = [
  {
    icon: Megaphone,
    title: "Marketing Team",
    description: "Social media, content creation, photography, and promotion",
    color: "from-secondary to-warning",
  },
  {
    icon: Package,
    title: "Logistics Team",
    description: "Event setup, coordination, equipment management, and operations",
    color: "from-primary to-success",
  },
  {
    icon: Users,
    title: "Sponsoring Team",
    description: "Partner outreach, fundraising, and sponsor relationship management",
    color: "from-accent to-info",
  },
];

const Volunteer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Users className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Our Volunteer Team
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of something special! Gain experience, build your network, and make a difference
            </p>
          </div>

          {/* Benefits Box */}
          <Card className="mb-12 border-2 border-primary/20 shadow-card animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                What You'll Gain
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: "🎓", title: "Real Experience", text: "Work with professionals" },
                  { icon: "🤝", title: "Network", text: "Meet industry leaders" },
                  { icon: "📜", title: "Certificate", text: "Official recognition" },
                ].map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teams Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {teams.map((team, index) => (
              <Card 
                key={team.title}
                className="border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${team.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <team.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {team.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {team.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-white font-bold text-lg px-12 py-6 rounded-full shadow-glow transform hover:scale-105 transition-all"
            >
              <Award className="mr-2 h-5 w-5" />
              Apply as a Volunteer
            </Button>
            <p className="mt-4 text-muted-foreground">
              Limited positions available. Applications reviewed on a rolling basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
