import { FaClock, FaStar, FaCheckCircle, FaChartLine, FaBullseye, FaCalendarAlt, FaUsers, FaArrowUp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const results = [
  {
    icon: FaClock,
    value: "30+",
    label: "Hours Saved Weekly",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaStar,
    value: "100%",
    label: "Client Satisfaction",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaCheckCircle,
    value: "150+",
    label: "Projects Completed",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FaChartLine,
    value: "300%",
    label: "Network Growth",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

// Client work organized by client
const clientWork = [
  {
    clientNumber: "First Client",
    title: "First Client - Impressions Growth",
    description: "Significant increase in impressions after one month of strategic LinkedIn management and engagement",
    images: [
      "/first client impressions increase after one month.jpg",
      "/first client impressions increase after one month2.jpg",
      "/first client impressions increase after one month3.jpg",
      "/first client impressions increase after one month4.jpg",
    ],
    achievement: "Impression Growth",
    metric: "After One Month",
    testimonial: "David's communication skills are exceptional. He always anticipates our needs and keeps us informed at every step of the way.",
    highlight: "See the impressive growth in impressions and engagement metrics",
  },
  {
    clientNumber: "Second Client",
    title: "Second Client - Impressions & Follower Growth",
    description: "Continuous growth in social media presence, impressions, and follower base",
    images: [
      "/second client before followers .jpg",
      "/second client impressions increase .jpg",
      "/second client impressions increase 2.jpg",
      "/second client impressions increase 3.jpg",
      "/second client impressions increase 4.jpg",
    ],
    achievement: "Follower & Impression Growth",
    metric: "Before & After Comparison",
    testimonial: "The account management system David created has revolutionized how we track and manage our business operations.",
    highlight: "Compare the before and after to see the remarkable increase",
  },
  {
    clientNumber: "Third Client",
    title: "Third Client - Data Entry & Research Excellence",
    description: "Efficient data entry, prospective client research, and systematic organization",
    images: [
      "/third client data entry and prospective research.jpg",
      "/third client data entry and prospective research 2.jpg",
      "/third client data entry and prospective research 3.jpg",
      "/third client data entry and prospective research 4.jpg",
      "/third client data entry and prospective research5.jpg",
    ],
    achievement: "Data Management",
    metric: "Research & Organization",
    testimonial: "David's attention to detail in data entry and research has been invaluable to our business growth.",
    highlight: "Comprehensive data management and research capabilities",
  },
];

// Additional services
const additionalServices = [
  {
    title: "Email Management Excellence",
    description: "Comprehensive email organization and management system",
    images: [
      "/email management.jpg",
    ],
    achievement: "Email Organization",
    testimonial: "David's email management has streamlined our communication and saved us countless hours every week.",
  },
];

// Calendar work images
const calendarWorkImages = [
  { src: "/calender work.jpg", title: "Calendar Management" },
  { src: "/calender work 2.jpg", title: "Schedule Coordination" },
  { src: "/calender work3.jpg", title: "Meeting Planning" },
  { src: "/calender work4.jpg", title: "Time Optimization" },
  { src: "/calender work 5.jpg", title: "Calendar System" },
  { src: "/calender work 6.jpg", title: "Appointment Scheduling" },
  { src: "/calender work 7.jpg", title: "Event Management" },
  { src: "/calender work 8.jpg", title: "Schedule Planning" },
  { src: "/calender work 9.jpg", title: "Calendar Dashboard" },
];

// Client interaction images
const clientInteractionImages = [
  "/client interaction1.jpg",
  "/client interaction2.jpg",
  "/client interaction3.jpg",
  "/client interaction4.jpg",
  "/client interaction5.jpg",
  "/client interaction6.jpg",
  "/client interaction7.jpg",
  "/client interaction9.jpg",
  "/client interaction10.jpg",
  "/client interaction11.jpg",
];

const MyWork = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="my-work" className="py-24 bg-background">
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
            View My Work & <span className="text-gradient text-gradient-animated">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how I've helped coaches, consultants, and business owners achieve remarkable growth through expert virtual assistance, calendar management, and strategic support.
          </p>
        </div>

        {/* Results Cards */}
        <div 
          ref={statsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${
            statsVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          {results.map((result, index) => (
            <Card
              key={index}
              className="border-border shadow-medium card-hover"
              style={{ 
                transitionDelay: statsVisible ? `${index * 0.1}s` : "0s"
              }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className={`${result.bgColor} ${result.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto`}>
                  <result.icon className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-foreground">{result.value}</p>
                  <p className="text-sm text-muted-foreground">{result.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs for different work categories */}
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="results" className="flex items-center gap-2">
              <FaBullseye className="h-4 w-4" />
              Results
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <FaCalendarAlt className="h-4 w-4" />
              Calendar Work
            </TabsTrigger>
            <TabsTrigger value="interactions" className="flex items-center gap-2">
              <FaUsers className="h-4 w-4" />
              Client Interactions
            </TabsTrigger>
          </TabsList>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-12">
            {/* Client Work Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Client Success Stories</h3>
                <p className="text-muted-foreground">See the measurable results and growth for each client</p>
              </div>
              
              {clientWork.map((client, index) => {
                const { ref: clientRef, isVisible: clientVisible } = useScrollAnimation();
                return (
                <div 
                  key={index} 
                  ref={clientRef}
                  className={`space-y-4 transition-all duration-700 ${
                    clientVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <span className="text-primary font-bold text-lg">{client.clientNumber}</span>
                    </div>
                    <div className="flex-1 h-px bg-border"></div>
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {client.achievement}
                    </div>
                  </div>
                  
                  <Card className="border-border shadow-medium card-hover overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Gallery */}
                        <div className="relative bg-muted/30 p-4">
                          <div className="grid grid-cols-2 gap-2">
                            {client.images.map((img, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                                onClick={() => setSelectedImage(img)}
                              >
                                <img
                                  src={img}
                                  alt={`${client.clientNumber} LinkedIn impressions growth results - ${client.achievement} ${imgIndex + 1} - Virtual Assistant Portfolio`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                  <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-semibold bg-black/50 px-2 py-1 rounded">
                                    View Full Size
                                  </span>
                                </div>
                                {imgIndex === 0 && (
                                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                                    {client.metric}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-3 text-center italic">
                            {client.highlight} - Click any image to view full size
                          </p>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{client.title}</h3>
                            <p className="text-muted-foreground mb-4">{client.description}</p>
                            <div className="flex items-center gap-2 mb-4">
                              <FaChartLine className="h-5 w-5 text-primary" />
                              <span className="font-semibold text-primary">{client.achievement}</span>
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t border-border">
                            <p className="text-sm font-medium text-foreground mb-2">Client Testimonial:</p>
                            <p className="text-sm italic text-muted-foreground">"{client.testimonial}"</p>
                          </div>
                          
                          <div className="flex gap-2 flex-wrap">
                            {client.images.map((img, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => setSelectedImage(img)}
                                className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                              >
                                View Image {imgIndex + 1}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                );
              })}
            </div>
            
            {/* Additional Services */}
            <div className="space-y-6 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-center">Additional Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="border-border shadow-medium card-hover overflow-hidden group">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        {service.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative h-full cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img
                              src={img}
                              alt={`${service.title} - Email management system results by Virtual Executive Assistant Olarewaju David`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {service.achievement}
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm italic text-muted-foreground">"{service.testimonial}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Calendar Work Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calendarWorkImages.map((item, index) => (
                <Card
                  key={index}
                  className="border-border shadow-medium card-hover overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.src}
                      alt={`${item.title} - Calendar management and scheduling services by Virtual Assistant Olarewaju David`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-white/80 text-sm">Click to view full size</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Client Interactions Tab */}
          <TabsContent value="interactions" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientInteractionImages.map((img, index) => (
                <Card
                  key={index}
                  className="border-border shadow-medium card-hover overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={img}
                      alt={`Client communication and interaction example ${index + 1} - Professional Virtual Assistant services`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold">Client Communication</p>
                        <p className="text-white/80 text-sm">Click to view full size</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <FaUsers className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Engagement & Outreach</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
              <img
                src={selectedImage}
                alt="Full size portfolio image - Virtual Executive Assistant work results by Olarewaju David"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Scroll to top button - only shows when scrolled down */}
        {showScrollTop && (
          <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-primary text-primary-foreground w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110 dark:pulse-glow animate-float"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;
