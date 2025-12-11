import { FaAward, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const credentials = [
  "Professional Diploma in Virtual Executive Assistant",
  "MTF Institute Certified",
  "Expert in Calendar & Schedule Management",
  "LinkedIn Engagement Specialist",
  "Property Management Experience",
  "Customer Support Excellence",
];

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 transition-all duration-700 ${
              contentVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Meet Your <span className="text-gradient text-gradient-animated">Virtual Partner</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Olarewaju David Oluwatimilehin, a certified Virtual Executive Assistant from Bauchi, Nigeria. With a Professional Diploma from MTF Institute of Management, Technology and Finance, I specialize in helping busy professionals reclaim their time and focus on what truly matters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From managing complex calendars across multiple time zones to engaging your LinkedIn network strategically, I handle the details so you can focus on growing your business. My clients trust me to be their right hand in the digital workspace.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaAward className="h-5 w-5 text-secondary" />
                Credentials & Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div 
            ref={cardsRef}
            className={`space-y-6 transition-all duration-700 ${
              cardsVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="border-border shadow-medium card-hover hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <FaGraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">
                      <strong>Abubakar Tafawa Balewa University</strong>
                      <br />
                      Professional Diploma in Virtual Executive Assistant
                      <br />
                      MTF Institute of Management, Technology and Finance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium card-hover hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <FaAward className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Experience</h3>
                    <p className="text-muted-foreground">
                      <strong>General Virtual Assistant</strong>
                      <br />
                      Helping coaches and business owners save 30+ hours per week through expert administrative support, calendar management, and strategic LinkedIn engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium card-hover bg-gradient-to-br from-primary/5 to-secondary/5 hover:border-primary/50 transition-all duration-300 dark:from-primary/10 dark:to-secondary/10">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-gradient text-gradient-animated">297+</p>
                  <p className="text-muted-foreground">Profile Viewers & Growing Network</p>
                  <p className="text-sm text-muted-foreground">Building connections that matter</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
