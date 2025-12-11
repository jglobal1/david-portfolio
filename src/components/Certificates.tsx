import { FaAward, FaFileAlt, FaDownload } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const certificates = [
  {
    title: "Professional Diploma in Virtual Executive Assistant",
    issuer: "MTF Institute of Management, Technology and Finance",
    file: "/Olarewaju David Oluwatimilehin.pdf",
    description: "Certified Virtual Executive Assistant with expertise in administrative support, calendar management, and business operations.",
  },
  {
    title: "Virtual Executive Assistant Certification",
    issuer: "MTF Institute",
    file: "/orlarewajudavid@gmail.com.pdf",
    description: "Professional certification demonstrating proficiency in virtual assistance, client communication, and digital workspace management.",
  },
];

const Certificates = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 mb-16 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <FaAward className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Certifications & <span className="text-gradient text-gradient-animated">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional qualifications and certifications that demonstrate my commitment to excellence in virtual assistance.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 ${
            cardsVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          {certificates.map((certificate, index) => (
            <Card
              key={index}
              className="border-border shadow-medium card-hover"
              style={{ 
                transitionDelay: cardsVisible ? `${index * 0.15}s` : "0s"
              }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <FaFileAlt className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                      <p className="text-sm font-medium text-primary mb-2">{certificate.issuer}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {certificate.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group"
                      onClick={() => window.open(certificate.file, "_blank")}
                    >
                      <FaDownload className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

