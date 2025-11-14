import { Button } from "@/components/ui/button";
import { Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";
import logoAfc from "@/assets/logo-afc.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kids playing football" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent/75 to-secondary/85" />
      </div>

      {/* Floating Football Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-secondary/20 animate-float" />
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-warning/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <img 
            src={logoAfc} 
            alt="African Cup Kids Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 animate-bounce-in drop-shadow-2xl"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            African Cup Kids
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-semibold mb-4">
            Where Young Champions Rise
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            The ultimate youth football experience inspired by the African Cup of Nations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-glow transform hover:scale-105 transition-transform"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Register Your Team
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
