import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Submit Complaint", href: "/submit" },
    { name: "Track Complaint", href: "/track" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.4-12.4 12.4v-1c.5-.1 1-.2 1.5-.4C5 20 2 17 2 12.4v-1c1.5.8 3.2 1.2 5 1.5-1.6-.9-2-2.3-2-3.4 0-.8.2-1.5.5-2.2C4.7 9.8 8.3 12 12 12.3c-.6-2.5 1-5 4-5 1.2 0 2.3.5 3.1 1.3.8-.2 1.6-.5 2.3-.9-.3.8-.9 1.5-1.6 2c.7-.1 1.3-.2 2-.4z"/></svg> },
    { name: "LinkedIn", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
  ];

  return (
    <footer className="bg-background border-t border-border -mt-21">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                SamadhanX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A smarter way to address civic issues.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    "inline-flex items-center justify-center h-8 w-8 rounded-full border border-border hover:bg-muted"
                  )}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <address className="space-y-2 not-italic text-sm text-muted-foreground">
              <p>123 Smart City, Civic Center, 10001</p>
              <p>samadhanx25@gmail.com</p>
              <p>+91-7665863120</p>
            </address>
          </div>
          
          {/* Subscribe/Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-sm rounded-md border border-input bg-background"
              />
              <Button type="submit" variant="civic">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SamadhanX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


