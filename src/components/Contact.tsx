import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactMethods = [
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    detail: "@oladave",
    link: "https://www.linkedin.com/in/oladave",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    detail: "+234 906 333 9281",
    link: "https://wa.me/2349063339281",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FaPhone,
    title: "Phone",
    detail: "+234 906 333 9281",
    link: "tel:+2349063339281",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaTwitter,
    title: "X (Twitter)",
    detail: "@OrlarewajuDave",
    link: "https://x.com/OrlarewajuDave",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    detail: "@orlaviid",
    link: "https://www.instagram.com/orlaviid",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    detail: "orlarewajudavid@gmail.com",
    link: "mailto:orlarewajudavid@gmail.com",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    detail: "Bauchi, Nigeria",
    link: null,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center space-y-4 mb-16 transition-all duration-700 ${
              headerVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-gradient">Work Together?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help you save time, increase productivity, and focus on growing your business. I'm always excited to connect with new clients and explore collaboration opportunities.
            </p>
          </div>

          {/* Contact Cards */}
          <div 
            ref={cardsRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${
              cardsVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="border-border shadow-soft card-hover"
                style={{ 
                  transitionDelay: cardsVisible ? `${index * 0.1}s` : "0s"
                }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`${method.bgColor} ${method.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    {method.link ? (
                      <a 
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                      >
                        {method.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{method.detail}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card 
            ref={ctaRef}
            className={`border-border shadow-medium bg-gradient-to-br from-primary/5 to-secondary/5 transition-all duration-700 ${
              ctaVisible 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold">Let's Start Your Success Story</h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Join the growing list of satisfied clients who've transformed their productivity and reclaimed their time. Take the first step today.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="shadow-lg hover:shadow-xl transition-all bg-green-600 hover:bg-green-700 hover:scale-105 dark:pulse-glow"
                  onClick={() => window.open("https://wa.me/2349063339281", "_blank")}
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Message on WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  className="shadow-lg hover:shadow-xl transition-all hover:scale-105 dark:pulse-glow"
                  onClick={() => window.open("https://www.linkedin.com/in/oladave", "_blank")}
                >
                  <FaLinkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="shadow-sm hover:shadow-md transition-all hover:scale-105 hover:border-primary"
                  onClick={() => window.open("mailto:orlarewajudavid@gmail.com", "_blank")}
                >
                  <FaEnvelope className="mr-2 h-5 w-5" />
                  Send an Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Availability Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium">Currently accepting new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
