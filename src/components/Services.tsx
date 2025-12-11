import { FaCalendarAlt, FaComments, FaEnvelope, FaFileAlt, FaChartLine, FaUsers } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: FaCalendarAlt,
    title: "Calendar & Schedule Management",
    description: "Expert coordination of meetings, appointments, and time zones. Keep your schedule optimized and conflict-free.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaComments,
    title: "LinkedIn Engagement",
    description: "Strategic content engagement, comment management, and network growth to boost your professional presence.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: FaEnvelope,
    title: "Email Management",
    description: "Inbox organization, priority filtering, and timely responses to keep your communication flowing smoothly.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaFileAlt,
    title: "Administrative Support",
    description: "Document preparation, data entry, research, and general administrative tasks handled with precision.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: FaChartLine,
    title: "Business Operations",
    description: "Process optimization, workflow management, and operational support to streamline your business.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaUsers,
    title: "Client Communication",
    description: "Professional client correspondence, follow-ups, and relationship management to enhance your service delivery.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 mb-16 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            How I Can <span className="text-gradient text-gradient-animated">Help You Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive virtual assistant services tailored to coaches, consultants, and business owners who value their time.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ${
            cardsVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-border bg-card shadow-soft hover:border-primary/50 transition-all duration-300"
              style={{ 
                transitionDelay: cardsVisible ? `${index * 0.1}s` : "0s"
              }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`${service.bgColor} ${service.color} w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
