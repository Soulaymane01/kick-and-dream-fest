import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Brand Visibility",
    description: "Reach hundreds of families and sports enthusiasts",
  },
  {
    icon: TrendingUp,
    title: "Community Impact",
    description: "Support youth development and sports education",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Collaborate with a premium youth sports event",
  },
  {
    icon: Building2,
    title: "CSR Opportunity",
    description: "Fulfill corporate social responsibility goals",
  },
];

const Sponsors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in empowering the next generation of African football stars
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="border-0 shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-hero p-3 rounded-xl w-fit mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sponsor Levels */}
          <Card className="border-2 border-primary/10 shadow-card mb-12 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Sponsorship Opportunities
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { level: "Gold", amount: "Premium", color: "from-warning to-secondary" },
                  { level: "Silver", amount: "Mid-tier", color: "from-muted to-accent" },
                  { level: "Bronze", amount: "Entry-level", color: "from-primary to-success" },
                ].map((tier) => (
                  <div 
                    key={tier.level}
                    className={`bg-gradient-to-br ${tier.color} p-6 rounded-2xl text-center text-white`}
                  >
                    <h4 className="text-2xl font-bold mb-2">{tier.level}</h4>
                    <p className="text-lg opacity-90">{tier.amount}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-white font-bold text-lg px-12 py-6 rounded-full shadow-glow transform hover:scale-105 transition-all"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Become a Sponsor
            </Button>
            <p className="mt-4 text-muted-foreground">
              Contact us for a detailed sponsorship package and partnership opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
