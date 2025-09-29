// // import { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { Menu, X, Shield, MapPin, FileText, Phone } from "lucide-react";

// // const Navigation = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const location = useLocation();

// //   const navigation = [
// //     { name: "Home", href: "/", icon: Shield },
// //     { name: "Submit Complaint", href: "/submit", icon: FileText },
// //     { name: "Track Complaint", href: "/track", icon: MapPin },
// //     { name: "About", href: "/about", icon: Phone },
// //   ];

// //   return (
// //     <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16">
// //           <div className="flex items-center">
// //             <Link to="/" className="flex items-center space-x-2">
// //               <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
// //                 <Shield className="w-5 h-5 text-white" />
// //               </div>
// //               <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
// //                 SamadhanX
// //               </span>
// //             </Link>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             {navigation.map((item) => {
// //               const Icon = item.icon;
// //               return (
// //                 <Link
// //                   key={item.name}
// //                   to={item.href}
// //                   className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
// //                     location.pathname === item.href
// //                       ? "bg-civic-blue-light text-civic-blue"
// //                       : "text-muted-foreground hover:text-foreground hover:bg-muted"
// //                   }`}
// //                 >
// //                   <Icon className="w-4 h-4" />
// //                   <span>{item.name}</span>
// //                 </Link>
// //               );
// //             })}
// //             <Link to="/login">
// //               <Button variant="civic" size="sm">
// //                 Login
// //               </Button>
// //             </Link>
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden flex items-center">
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               onClick={() => setIsOpen(!isOpen)}
// //               aria-label="Toggle menu"
// //             >
// //               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isOpen && (
// //         <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
// //           <div className="px-2 pt-2 pb-3 space-y-1">
// //             {navigation.map((item) => {
// //               const Icon = item.icon;
// //               return (
// //                 <Link
// //                   key={item.name}
// //                   to={item.href}
// //                   onClick={() => setIsOpen(false)}
// //                   className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-smooth ${
// //                     location.pathname === item.href
// //                       ? "bg-civic-blue-light text-civic-blue"
// //                       : "text-muted-foreground hover:text-foreground hover:bg-muted"
// //                   }`}
// //                 >
// //                   <Icon className="w-5 h-5" />
// //                   <span>{item.name}</span>
// //                 </Link>
// //               );
// //             })}
// //             <div className="px-3 py-2">
// //               <Link to="/login">
// //                 <Button variant="civic" size="sm" className="w-full">
// //                   Login
// //                 </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navigation;

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Shield, MapPin, FileText, Phone } from "lucide-react";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navigation = [
//     { name: "Home", href: "/", icon: Shield },
//     { name: "Submit Complaint", href: "/submit", icon: FileText },
//     { name: "Track Complaint", href: "/track", icon: MapPin },
//     { name: "About", href: "/about", icon: Phone },
//   ];

//   useEffect(() => {
//     setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//     const handler = () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//     window.addEventListener("storage", handler);
//     return () => window.removeEventListener("storage", handler);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
//                 <Shield className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
//                 SamadhanX
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
//                     location.pathname === item.href
//                       ? "bg-civic-blue-light text-civic-blue"
//                       : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span>{item.name}</span>
//                 </Link>
//               );
//             })}
//             {isLoggedIn ? (
//               <Button variant="civic" size="sm" onClick={handleLogout}>
//                 Logout
//               </Button>
//             ) : (
//               <Link to="/login">
//                 <Button variant="civic" size="sm">
//                   Login
//                 </Button>
//               </Link>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navigation.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-smooth ${
//                     location.pathname === item.href
//                       ? "bg-civic-blue-light text-civic-blue"
//                       : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                   }`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span>{item.name}</span>
//                 </Link>
//               );
//             })}
//             <div className="px-3 py-2">
//               {isLoggedIn ? (
//                 <Button variant="civic" size="sm" className="w-full" onClick={() => { setIsOpen(false); handleLogout(); }}>
//                   Logout
//                 </Button>
//               ) : (
//                 <Link to="/login" onClick={() => setIsOpen(false)}>
//                   <Button variant="civic" size="sm" className="w-full">
//                     Login
//                   </Button>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, MapPin, FileText, Phone, User } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // base navigation (always visible)
  const baseNav = [
    { name: "Home", href: "/", icon: Shield },
    { name: "Submit Complaint", href: "/submit", icon: FileText },
    { name: "Track Complaint", href: "/track", icon: MapPin },
    { name: "About", href: "/about", icon: Phone },
  ];

  // add Dashboard only when logged in
  const navigation = isLoggedIn
    ? [...baseNav.slice(0, 1), { name: "Dashboard", href: "/dashboard", icon: User }, ...baseNav.slice(1)]
    : baseNav;

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    const handler = () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                SamadhanX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon as any;
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    active
                      ? "bg-civic-blue-light text-civic-blue"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {isLoggedIn ? (
              <Button variant="civic" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="civic" size="sm">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon as any;
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                    active
                      ? "bg-civic-blue-light text-civic-blue"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="px-3 py-2">
              {isLoggedIn ? (
                <Button
                  variant="civic"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="civic" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
