import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard Redesign",
      description: "A modern, responsive dashboard built with Next.js and Tailwind CSS for managing orders, products, and analytics with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Next.js", "React", "Tailwind CSS", "Chart.js", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "A comprehensive project management tool with team collaboration features, built using React and modern state management patterns.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website Generator",
      description: "An interactive tool that helps developers create beautiful portfolio websites with customizable themes and layouts.",
      image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=600&fit=crop",
      technologies: ["Next.js", "React", "Tailwind CSS", "MDX", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather App with Geolocation",
      description: "A responsive weather application that provides detailed forecasts with beautiful animations and location-based services.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["React", "JavaScript", "CSS3", "Weather API", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Latest <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my technical skills 
            and passion for creating exceptional user experiences
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-muted-foreground/20 hover:border-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
