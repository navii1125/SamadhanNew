import { Brain, Shield, Bell, BarChart, ArrowRight, CheckCircle, Clock, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const steps = [
    {
      step: 1,
      title: "Submit Complaint",
      shortDesc: "Easy submission process",
      description: "Citizens easily submit issues with photos, location, and detailed descriptions through our intuitive mobile-first interface.",
      icon: MessageSquare,
      gradient: "from-civic-blue to-civic-blue-dark",
      bgColor: "civic-blue-light",
      features: ["Photo Upload", "Location Mapping", "Category Selection"],
    },
    {
      step: 2,
      title: "AI Classification & Analysis", 
      shortDesc: "Intelligent processing",
      description: "Advanced AI instantly categorizes complaints, detects urgency through sentiment analysis, and identifies duplicates using machine learning.",
      icon: Brain,
      gradient: "from-growth-green to-growth-green/80",
      bgColor: "growth-green-light",
      features: ["Auto-Categorization", "Priority Detection", "Duplicate Prevention"],
    },
    {
      step: 3,
      title: "Blockchain Security",
      shortDesc: "Tamper-proof logging",
      description: "Every action is logged on an immutable blockchain ledger, ensuring complete transparency and accountability for all stakeholders.",
      icon: Shield,
      gradient: "from-urgent-orange to-urgent-orange/80",
      bgColor: "urgent-orange-light",
      features: ["Immutable Records", "Smart Contracts", "Full Transparency"],
    },
    {
      step: 4,
      title: "Smart Tracking & Notifications",
      shortDesc: "Real-time updates",
      description: "Comprehensive tracking system with real-time updates, SLA monitoring, and automatic escalations keep everyone informed.",
      icon: Bell,
      gradient: "from-civic-blue-dark to-civic-blue",
      bgColor: "civic-blue-light",
      features: ["Live Tracking", "SLA Monitoring", "Auto Escalation"],
    },
    {
      step: 5,
      title: "Analytics Dashboard",
      shortDesc: "Data-driven insights",
      description: "Interactive dashboards provide actionable insights for citizens and officials with comprehensive performance metrics and hotspot mapping.",
      icon: BarChart,
      gradient: "from-growth-green/80 to-urgent-orange/60",
      bgColor: "growth-green-light",
      features: ["Performance Metrics", "Hotspot Analysis", "Trend Reports"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-civic-blue-light/5 to-growth-green-light/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-civic-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-growth-green rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-urgent-orange rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-civic-blue-light/20 text-civic-blue px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            Smart Process Flow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            How SamadhanX Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Our intelligent platform streamlines every step of the grievance resolution process,
            from submission to completion, ensuring transparency and efficiency through cutting-edge technology.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Enhanced Connection Line */}
          <div className="hidden xl:block absolute top-32 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-[calc(100%-8rem)] bg-gradient-to-b from-civic-blue via-growth-green to-urgent-orange opacity-20 rounded-full"></div>
            <div className="absolute inset-0 w-1 bg-gradient-to-b from-civic-blue via-growth-green to-urgent-orange opacity-40 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex flex-col xl:flex-row items-center gap-12 ${
                    isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'
                  }`}>
                    
                    {/* Content Card */}
                    <div className="flex-1 relative">
                      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card hover:shadow-feature transition-all duration-500 group-hover:-translate-y-2">
                        
                        {/* Step Number Badge */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl text-white font-bold text-lg shadow-lg`}>
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-civic-blue transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium mt-1">
                              {step.shortDesc}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {step.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className={`flex items-center gap-1 bg-${step.bgColor}/20 text-${step.bgColor.replace('-light', '')} px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              <CheckCircle className="w-3 h-3" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Step {step.step} of {steps.length}</span>
                          <div className="flex-1 bg-muted rounded-full h-1 ml-3">
                            <div 
                              className={`h-full bg-gradient-to-r ${step.gradient} rounded-full transition-all duration-1000 group-hover:w-full`}
                              style={{ width: `${((step.step) / steps.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Icon Section */}
                    <div className="flex-shrink-0 relative">
                      {/* Animated Background */}
                      <div className={`w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-10 absolute inset-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}></div>
                      <div className={`w-32 h-32 bg-gradient-to-br from-${step.bgColor}/30 to-${step.bgColor}/10 rounded-3xl flex items-center justify-center shadow-feature group-hover:shadow-hero transition-all duration-500 relative backdrop-blur-sm border border-${step.bgColor}/20`}>
                        <Icon className={`w-16 h-16 text-${step.bgColor.replace('-light', '')} group-hover:scale-110 transition-transform duration-300`} />
                        
                        {/* Pulse Ring */}
                        <div className={`absolute inset-0 rounded-3xl border-2 border-${step.bgColor}/30 animate-ping group-hover:animate-pulse`}></div>
                      </div>
                      
                      {/* Step Connection Arrow */}
                      {index < steps.length - 1 && (
                        <div className="hidden xl:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                          <ArrowRight className="w-6 h-6 text-muted-foreground/50 group-hover:text-civic-blue transition-colors duration-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-hero max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Civic Engagement?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the future of grievance redressal with our intelligent, transparent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Your Complaint
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default SolutionSection;