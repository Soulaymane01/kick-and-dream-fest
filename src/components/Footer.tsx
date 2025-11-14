import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground via-primary to-accent text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">African Cup Kids</h3>
              <p className="text-white/80 mb-4">
                Where young champions rise. The ultimate youth football experience inspired by the African Cup of Nations.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="mailto:info@africancupkids.com" className="flex items-center text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  info@africancupkids.com
                </a>
                <a href="tel:+212000000000" className="flex items-center text-white/80 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  +212 (0) 00 00 00 00
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    aria-label="Social media link"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © {currentYear} African Cup Kids. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
