import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    coachName: "",
    category: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted! We'll contact you soon.");
    setFormData({ teamName: "", coachName: "", category: "", contact: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-white animate-bounce-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Register Your Team Now
            </h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto">
              Secure your spot in the ultimate youth football tournament
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, title: "Limited Spots", text: "Register early" },
              { icon: Tag, title: "Early Bird", text: "Special pricing" },
              { icon: Trophy, title: "All Teams", text: "Welcome to join" },
            ].map((item, index) => (
              <div 
                key={item.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center text-white animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/90">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <Card className="border-0 shadow-glow animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="teamName" className="text-foreground font-semibold">
                      Team Name *
                    </Label>
                    <Input
                      id="teamName"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="Enter your team name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="coachName" className="text-foreground font-semibold">
                      Coach Name *
                    </Label>
                    <Input
                      id="coachName"
                      value={formData.coachName}
                      onChange={(e) => setFormData({ ...formData, coachName: e.target.value })}
                      placeholder="Enter coach name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-foreground font-semibold">
                      Age Category *
                    </Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g., U-10, U-12, U-14"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact" className="text-foreground font-semibold">
                      Contact Info *
                    </Label>
                    <Input
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="Email or phone number"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-hero hover:opacity-90 text-white font-bold text-lg py-6 rounded-full shadow-glow transform hover:scale-105 transition-all"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Submit Registration
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By registering, you agree to our terms and conditions. We'll contact you within 48 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;
