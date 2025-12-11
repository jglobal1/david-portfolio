import { FaArrowRight, FaCalendarAlt, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section id="hero" className="relative flex items-center overflow-hidden bg-background pt-24 pb-12 lg:pt-28 lg:pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side - Geometric shapes */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full">
          <div className="relative w-full h-full">
            {/* Subtle triangular geometric shapes */}
            <div className="absolute top-20 left-10 w-24 h-24 border-l-2 border-t-2 border-muted-foreground/20 rotate-45"></div>
            <div className="absolute top-32 left-24 w-16 h-16 border-r-2 border-b-2 border-muted-foreground/20 rotate-12"></div>
            <div className="absolute bottom-32 left-16 w-28 h-28 border-l-2 border-t-2 border-muted-foreground/20 -rotate-12"></div>
            <div className="absolute top-48 left-48 w-14 h-14 border-r-2 border-b-2 border-muted-foreground/20 rotate-45"></div>
          </div>
        </div>

        {/* Right side - White background */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-background"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={contentRef}
            className={`space-y-4 lg:space-y-5 relative z-10 transition-all duration-700 ${
              contentVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Your Growth Partner,{" "}
                <span className="text-gradient text-gradient-animated">Not Just an Assistant</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Virtual Assistant || Helping Coaches and Business Owners save 30 hours+/Week on LinkedIn through Comments, DMs and Content.
              </p>
              <p className="text-base sm:text-lg font-semibold text-primary">
                Available for new projects
              </p>
            </div>

            <div>
              <Button 
                size="lg" 
                className="group shadow-lg hover:shadow-xl transition-all px-6 py-5 text-sm lg:text-base hover:scale-105 dark:pulse-glow"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Work Together
                <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Original Style */}
          <div 
            ref={imageRef}
            className={`relative z-10 transition-all duration-700 ${
              imageVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
              
              {/* Profile Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border">
                <img
                  src="/profile pic.jpg"
                  alt="Olarewaju David Oluwatimilehin - Professional Virtual Executive Assistant from Bauchi, Nigeria - LinkedIn Expert and Calendar Management Specialist"
                  className="w-full h-auto object-cover"
                  width="500"
                  height="500"
                  loading="eager"
                />
              </div>

              {/* Floating badges - Original Style */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-3 shadow-xl animate-slide-in hover:scale-105 transition-transform dark:glow-secondary">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary/10 p-2 rounded-xl animate-float" style={{ animationDelay: "0s" }}>
                    <FaCalendarAlt className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Calendar Expert</p>
                    <p className="text-xs text-muted-foreground">Scheduled 500+ meetings</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-3 shadow-xl animate-scale-in hover:scale-105 transition-transform dark:glow-primary" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-xl animate-float" style={{ animationDelay: "0.5s" }}>
                    <FaLinkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">LinkedIn Pro</p>
                    <p className="text-xs text-muted-foreground">2K+ network reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
