
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid">
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Seamless
            <br />
            <span className="gradient-text">Digital Experiences</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Hi, I'm <span className="text-primary font-semibold">Alex Rivera</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in building high-performance web applications with 
            <span className="text-secondary font-medium"> Next.js</span>, 
            <span className="text-primary font-medium"> Tailwind CSS</span>, 
            and a pixel-perfect approach to modern frontend development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
