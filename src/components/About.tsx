import { Target, Eye, HeartHandshake, Quote, Award } from "lucide-react";

const About = () => {

  const awards = [
    { icon: "🏅", label: "Best Player" },
    { icon: "🧤", label: "Best Goalkeeper" },
    { icon: "🎯", label: "Top Scorer" },
    { icon: "🤝", label: "Fair Play Award" },
    { icon: "🎓", label: "Best Coach" },
    { icon: "🎖", label: "Medals & Certificates for All Players" }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/40"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About The Event
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-hero rounded-full mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A youth tournament built on excellence, values, and the passion of African football.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* MISSION */}
          <div className="bg-gradient-card p-8 rounded-3xl shadow-card">
            <div className="bg-gradient-hero p-3 w-fit rounded-2xl mb-4">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower children through football, education & African unity.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-gradient-card p-8 rounded-3xl shadow-card">
            <div className="bg-gradient-hero p-3 w-fit rounded-2xl mb-4">
              <Eye className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To make Tangier the capital of youth football development.
            </p>
          </div>

          {/* VALUES */}
          <div className="bg-gradient-card p-8 rounded-3xl shadow-card">
            <div className="bg-gradient-hero p-3 w-fit rounded-2xl mb-4">
              <HeartHandshake className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Values</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Fair Play & Respect</li>
              <li>Discipline & Leadership</li>
              <li>Cultural Unity & Education</li>
              <li>Kids First 💛</li>
            </ul>
          </div>
        </div>

        {/* QUOTE */}
        <div className="max-w-3xl mx-auto mb-20 bg-background/70 backdrop-blur-sm p-8 rounded-3xl border border-border shadow-lg">
          <div className="flex items-start gap-4">
            <Quote className="w-10 h-10 text-primary" />
            <p className="text-xl italic text-foreground/90 leading-relaxed">
              “This tournament is the first step toward future African stars.”
            </p>
          </div>
        </div>

        {/* AWARDS SECTION */}
        <div className="text-center">
          <div className="bg-gradient-hero w-fit mx-auto p-3 rounded-2xl mb-4">
            <Award className="text-white w-7 h-7" />
          </div>

          <h3 className="text-3xl font-bold text-foreground mb-6">Awards</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 bg-gradient-to-r from-primary/10 to-transparent backdrop-blur-sm px-5 py-4 rounded-xl border border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 hover:bg-primary/15 transition-all duration-300"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                  {award.icon}
                </span>
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {award.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
