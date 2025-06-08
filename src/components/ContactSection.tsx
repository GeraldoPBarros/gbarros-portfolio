import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to work on new projects and collaborate with
            talented teams. Whether you have a project in mind or just want to
            connect, I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Let's discuss your project
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                geraldo.barros20@gmail.com
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">LinkedIn</h3>

              <p className="text-muted-foreground text-sm mb-4">
                Connect professionally
              </p>

              <a
                href="https://www.linkedin.com/in/geraldo-barros-811b0489/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-secondary/20 hover:border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Connect with me
                </Button>
              </a>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">GitHub</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out my code
              </p>
              <a href="https://github.com/GeraldoPBarros" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent/20 hover:border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  View repositories
                </Button>
              </a>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/GeraldoPBarros"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/geraldo-barros-811b0489/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              © 2025 Geraldo Barros. Crafted with passion using Next.js &
              Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
