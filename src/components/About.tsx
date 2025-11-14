import { Heart, Users, TrendingUp, Award } from "lucide-react";
import kidsCollage from "@/assets/kids-collage.jpg";

const values = [
  { icon: Users, title: "Teamwork", description: "Building bonds that last beyond the field" },
  { icon: Heart, title: "Unity", description: "Celebrating diversity through sport" },
  { icon: TrendingUp, title: "Growth", description: "Developing skills and character" },
  { icon: Award, title: "Sportsmanship", description: "Respect, fair play, and excellence" },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About African Cup Kids
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just a tournament – it's a celebration of culture, talent, and the beautiful game
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="animate-slide-up">
              <img 
                src={kidsCollage} 
                alt="Kids playing football together" 
                className="rounded-3xl shadow-hover w-full h-auto"
              />
            </div>

            {/* Description */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                African Cup Kids brings the magic of the African Cup of Nations to young footballers across the continent and beyond. We create an environment where children can showcase their talents, learn from each other, and celebrate the rich diversity of African football culture.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our tournament is designed to inspire the next generation of football stars while emphasizing values that extend far beyond the pitch. Every child who participates becomes part of a larger story of growth, unity, and excellence.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gradient-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-hero p-3 rounded-xl w-fit mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
