import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";

const EventDetails = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event Details
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for an unforgettable day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: MapPin,
                title: "Location",
                info: "Tangier, Morocco",
                details: "Premium sports facility",
                gradient: "from-primary to-success",
              },
              {
                icon: Calendar,
                title: "Date",
                info: "Coming Soon",
                details: "Next edition announcement",
                gradient: "from-accent to-info",
              },
              {
                icon: Clock,
                title: "Duration",
                info: "Full Day Event",
                details: "8:00 AM - 6:00 PM",
                gradient: "from-secondary to-warning",
              },
            ].map((detail, index) => (
              <Card 
                key={detail.title}
                className="border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${detail.gradient} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <detail.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-1">
                    {detail.info}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {detail.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="border-0 shadow-card overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Tangier, Morocco
                  </h3>
                  <p className="text-muted-foreground">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
