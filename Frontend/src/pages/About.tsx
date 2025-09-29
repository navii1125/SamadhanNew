// import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Target,
//   Eye,
//   Heart,
//   Users,
//   Zap,
//   Shield,
//   BarChart3,
//   Globe,
//   Award,
//   Lightbulb,
//   MessageSquare,
//   Mail,
// } from "lucide-react";

// const About = () => {
//   const [feedbackName, setFeedbackName] = useState("");
//   const [feedbackEmail, setFeedbackEmail] = useState("");
//   const [feedbackMessage, setFeedbackMessage] = useState("");

//   const [contactName, setContactName] = useState("");
//   const [contactEmail, setContactEmail] = useState("");
//   const [contactSubject, setContactSubject] = useState("");
//   const [contactMessage, setContactMessage] = useState("");

//   const { toast } = useToast();

//   const handleFeedbackSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate form submission
//     console.log("Feedback Submitted:", { feedbackName, feedbackEmail, feedbackMessage });
//     toast({
//       title: "Feedback Submitted",
//       description: "Thank you for your valuable feedback!",
//     });
//     // Clear form
//     setFeedbackName("");
//     setFeedbackEmail("");
//     setFeedbackMessage("");
//   };

//   const handleContactSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate form submission
//     console.log("Contact Form Submitted:", { contactName, contactEmail, contactSubject, contactMessage });
//     toast({
//       title: "Message Sent",
//       description: "We have received your message and will get back to you shortly.",
//     });
//     // Clear form
//     setContactName("");
//     setContactEmail("");
//     setContactSubject("");
//     setContactMessage("");
//   };

//   const objectives = [
//     // {
//     //   icon: Zap,
//     //   title: "Automate Complaint Processing",
//     //   description: "Reduce manual effort through intelligent AI-powered classification and routing systems.",
//     // },
//     // {
//     //   icon: BarChart3,
//     //   title: "Provide Actionable Insights",
//     //   description: "Enable data-driven decision making with comprehensive analytics and performance metrics.",
//     // },
//     // {
//     //   icon: Shield,
//     //   title: "Ensure Complete Transparency",
//     //   description: "Implement blockchain technology for tamper-proof logging and full accountability.",
//     // },
//     // {
//     //   icon: Users,
//     //   title: "Enhance Citizen Engagement",
//     //   description: "Create user-friendly interfaces that encourage active participation in civic processes.",
//     // },
//     // {
//     //   icon: Globe,
//     //   title: "Scale Across Jurisdictions",
//     //   description: "Build a flexible platform that adapts to different cities and governance structures.",
//     // },
//     // {
//     //   icon: Award,
//     //   title: "Improve Service Quality",
//     //   description: "Implement SLA monitoring and performance tracking to ensure timely resolutions.",
//     // },
//   ];

//   const values = [
//     // {
//     //   icon: Shield,
//     //   title: "Transparency",
//     //   description: "Every action is logged and visible to maintain public trust and accountability.",
//     // },
//     // {
//     //   icon: Zap,
//     //   title: "Efficiency",
//     //   description: "Streamlined processes that reduce resolution times and administrative burden.",
//     // },
//     // {
//     //   icon: Users,
//     //   title: "Accessibility",
//     //   description: "User-friendly design that works for citizens of all technical backgrounds.",
//     // },
//     // {
//     //   icon: Lightbulb,
//     //   title: "Innovation",
//     //   description: "Cutting-edge technology applied to solve real-world governance challenges.",
//     // },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About SamadhanX</h1>
//           <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
//             We're transforming civic engagement through intelligent technology, creating a more responsive,
//             transparent, and accountable governance system for citizens and officials alike.
//           </p>
//         </div>

//         {/* Mission Statement */}
//         <Card className="mb-16 shadow-hero bg-gradient-card">
//           <CardContent className="pt-12 pb-8 text-center">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-6">
//               <Heart className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
//             <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
//               Empowering citizens with transparent, accountable, and smart grievance redressal systems
//               that bridge the gap between communities and governance through innovative technology solutions.
//             </p>
//           </CardContent>
//         </Card>

//         {/* Vision */}
//         <div className="mb-16">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
//               <Eye className="w-6 h-6 text-civic-blue" />
//             </div>
//             <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               To create citizen-first e-governance platforms that make cities smarter, more livable,
//               and truly responsive to their residents' needs.
//             </p>
//           </div>
//         </div>

//         {/* Feedback and Contact Section */}
//         <div className="mt-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               We value your opinion. Please use the forms below to send us your feedback or a message.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Feedback Form */}
//             <Card className="shadow-card">
//               <CardContent className="pt-6">
//                 <form onSubmit={handleFeedbackSubmit} className="space-y-4">
//                   <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
//                     <MessageSquare className="w-6 h-6 text-civic-blue" />
//                     Send us your Feedback
//                   </h3>
//                   <div>
//                     <Label htmlFor="feedback-name">Your Name</Label>
//                     <Input
//                       id="feedback-name"
//                       placeholder="Enter your name"
//                       value={feedbackName}
//                       onChange={(e) => setFeedbackName(e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="feedback-email">Email Address</Label>
//                     <Input
//                       id="feedback-email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={feedbackEmail}
//                       onChange={(e) => setFeedbackEmail(e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="feedback-message">Message</Label>
//                     <Textarea
//                       id="feedback-message"
//                       placeholder="Share your thoughts with us..."
//                       value={feedbackMessage}
//                       onChange={(e) => setFeedbackMessage(e.target.value)}
//                     />
//                   </div>
//                   <Button type="submit" variant="civic" className="w-full">
//                     Submit Feedback
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Form */}
//             <Card className="shadow-card">
//               <CardContent className="pt-6">
//                 <form onSubmit={handleContactSubmit} className="space-y-4">
//                   <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
//                     <Mail className="w-6 h-6 text-growth-green" />
//                     Contact Us
//                   </h3>
//                   <div>
//                     <Label htmlFor="contact-name">Your Name</Label>
//                     <Input
//                       id="contact-name"
//                       placeholder="Enter your name"
//                       value={contactName}
//                       onChange={(e) => setContactName(e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="contact-email">Email Address</Label>
//                     <Input
//                       id="contact-email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={contactEmail}
//                       onChange={(e) => setContactEmail(e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="contact-subject">Subject</Label>
//                     <Input
//                       id="contact-subject"
//                       placeholder="Enter subject of your inquiry"
//                       value={contactSubject}
//                       onChange={(e) => setContactSubject(e.target.value)}
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="contact-message">Message</Label>
//                     <Textarea
//                       id="contact-message"
//                       placeholder="Describe your inquiry..."
//                       value={contactMessage}
//                       onChange={(e) => setContactMessage(e.target.value)}
//                     />
//                   </div>
//                   <Button type="submit" variant="growth" className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Objectives */}
//         <div className="mb-16">
//           {/* <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-growth-green-light rounded-lg mb-4">
//               <Target className="w-6 h-6 text-growth-green" />
//             </div>
//             <h2 className="text-3xl font-bold text-foreground mb-4">Key Objectives</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Our platform is built around these core objectives that drive every feature and decision.
//             </p>
//           </div> */}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {objectives.map((objective, index) => {
//               const Icon = objective.icon;
//               return (
//                 <Card
//                   key={index}
//                   className="shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1 animate-slide-up"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <CardContent className="pt-6">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
//                       <Icon className="w-6 h-6 text-civic-blue" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-foreground mb-3">
//                       {objective.title}
//                     </h3>
//                     <p className="text-muted-foreground leading-relaxed">
//                       {objective.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>

//         {/* Core Values */}
//         <div className="mb-16">
//           {/* <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               These principles guide our approach to building technology solutions for civic engagement.
//             </p>
//           </div> */}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => {
//               const Icon = value.icon;
//               return (
//                 <div
//                   key={index}
//                   className="text-center animate-slide-up"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-civic-blue to-growth-green rounded-2xl mb-4">
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-foreground mb-2">
//                     {value.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Impact Statement */}
//         <Card className="shadow-hero bg-gradient-to-br from-civic-blue-light/10 to-growth-green-light/10 border-civic-blue-light">
//           <CardContent className="pt-12 pb-8 text-center">
//             <h2 className="text-3xl font-bold text-foreground mb-6">Making a Difference</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div>
//                 <div className="text-3xl font-bold text-civic-blue mb-2">90%</div>
//                 <p className="text-muted-foreground">Faster Issue Classification</p>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-growth-green mb-2">100%</div>
//                 <p className="text-muted-foreground">Transparent Tracking</p>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-urgent-orange mb-2">24/7</div>
//                 <p className="text-muted-foreground">Citizen Support</p>
//               </div>
//             </div>
//             <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Together, we're building smarter cities where every citizen's voice is heard, every
//               complaint is tracked, and every resolution is transparent.
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default About;
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Target,
  Eye,
  Heart,
  Users,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Award,
  Lightbulb,
  MessageSquare,
  Mail,
} from "lucide-react";

const About = () => {
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const { toast } = useToast();

  // ✅ save feedback to backend
  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", feedbackName);
    formData.append("email", feedbackEmail);
    formData.append("message", feedbackMessage);

    try {
      const res = await fetch("http://127.0.0.1:8000/feedback/", {
        method: "POST",
        body: formData, // let browser set multipart boundary
      });

      if (!res.ok) throw new Error("Failed to submit feedback");

      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback!",
      });

      // clear form
      setFeedbackName("");
      setFeedbackEmail("");
      setFeedbackMessage("");
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  // ✅ save contact message to backend
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", contactName);
    formData.append("email", contactEmail);
    formData.append("subject", contactSubject);
    formData.append("message", contactMessage);

    try {
      const res = await fetch("http://127.0.0.1:8000/feedback/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit contact form");

      toast({
        title: "Message Sent",
        description: "We have received your message and will get back to you shortly.",
      });

      // clear form
      setContactName("");
      setContactEmail("");
      setContactSubject("");
      setContactMessage("");
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const objectives = [
    // { icon: Zap, title: "Automate Complaint Processing", description: "..." },
    // { icon: BarChart3, title: "Provide Actionable Insights", description: "..." },
    // { icon: Shield, title: "Ensure Complete Transparency", description: "..." },
    // { icon: Users, title: "Enhance Citizen Engagement", description: "..." },
    // { icon: Globe, title: "Scale Across Jurisdictions", description: "..." },
    // { icon: Award, title: "Improve Service Quality", description: "..." },
  ];

  const values = [
    // { icon: Shield, title: "Transparency", description: "..." },
    // { icon: Zap, title: "Efficiency", description: "..." },
    // { icon: Users, title: "Accessibility", description: "..." },
    // { icon: Lightbulb, title: "Innovation", description: "..." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About SamadhanX</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're transforming civic engagement through intelligent technology, creating a more responsive,
            transparent, and accountable governance system for citizens and officials alike.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 shadow-hero bg-gradient-card">
          <CardContent className="pt-12 pb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering citizens with transparent, accountable, and smart grievance redressal systems
              that bridge the gap between communities and governance through innovative technology solutions.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
              <Eye className="w-6 h-6 text-civic-blue" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To create citizen-first e-governance platforms that make cities smarter, more livable,
              and truly responsive to their residents' needs.
            </p>
          </div>
        </div>

        {/* Feedback and Contact Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We value your opinion. Please use the forms below to send us your feedback or a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feedback Form */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-civic-blue" />
                    Send us your Feedback
                  </h3>
                  <div>
                    <Label htmlFor="feedback-name">Your Name</Label>
                    <Input
                      id="feedback-name"
                      placeholder="Enter your name"
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="feedback-email">Email Address</Label>
                    <Input
                      id="feedback-email"
                      type="email"
                      placeholder="Enter your email"
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="feedback-message">Message</Label>
                    <Textarea
                      id="feedback-message"
                      placeholder="Share your thoughts with us..."
                      value={feedbackMessage}
                      onChange={(e) => setFeedbackMessage(e.target.value)}
                    />
                  </div>
                  <Button type="submit" variant="civic" className="w-full">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-growth-green" />
                    Contact Us
                  </h3>
                  <div>
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="Enter your name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter your email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      placeholder="Enter subject of your inquiry"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Describe your inquiry..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    />
                  </div>
                  <Button type="submit" variant="growth" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          {/* (commented-out section intentionally left unchanged) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-civic-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          {/* (commented-out section intentionally left unchanged) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-civic-blue to-growth-green rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Statement */}
        <Card className="shadow-hero bg-gradient-to-br from-civic-blue-light/10 to-growth-green-light/10 border-civic-blue-light">
          <CardContent className="pt-12 pb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Making a Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-civic-blue mb-2">90%</div>
                <p className="text-muted-foreground">Faster Issue Classification</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-growth-green mb-2">100%</div>
                <p className="text-muted-foreground">Transparent Tracking</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-urgent-orange mb-2">24/7</div>
                <p className="text-muted-foreground">Citizen Support</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Together, we're building smarter cities where every citizen's voice is heard, every
              complaint is tracked, and every resolution is transparent.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
