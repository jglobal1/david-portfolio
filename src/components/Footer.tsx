import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Olarewaju David</h3>
            <p className="text-muted-foreground">
              Professional Virtual Executive Assistant helping businesses grow through expert administrative support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/2349063339281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-green-600 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span>WhatsApp: +234 906 333 9281</span>
              </a>
              <a 
                href="tel:+2349063339281"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaPhone className="h-5 w-5" />
                <span>Call: +234 906 333 9281</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/oladave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
                <span>LinkedIn: @oladave</span>
              </a>
              <a 
                href="https://x.com/OrlarewajuDave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
                <span>X (Twitter): @OrlarewajuDave</span>
              </a>
              <a 
                href="https://www.instagram.com/orlaviid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
                <span>Instagram: @orlaviid</span>
              </a>
              <a 
                href="mailto:orlarewajudavid@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaEnvelope className="h-5 w-5" />
                <span>orlarewajudavid@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <FaMapMarkerAlt className="h-5 w-5" />
                <span>Bauchi, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {currentYear} Olarewaju David Oluwatimilehin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
