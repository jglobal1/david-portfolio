import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MyWork from "@/components/MyWork";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen overflow-x-hidden max-w-full">
        <Header />
        <main className="overflow-x-hidden max-w-full">
          <Hero />
          <Services />
          <MyWork />
          <About />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
