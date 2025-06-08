import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ChatGPTCloneImage from "../assets/chatgpt-clone.png";
import TodoListImage from "../assets/todolist.png";
import NewsLetterImage from "../assets/newsletter.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Investment Wallet Landing Page",
      description:
        "A comprehensive project management tool with team collaboration features, built using React and modern state management patterns.",
      image:
        "https://github.com/user-attachments/assets/fa359d01-962d-4524-a660-0d47cfcbffa9",
      technologies: ["Nextjs", "Vercel", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://gb-investment-landingpage-n2ho.vercel.app/",
      githubUrl: "https://github.com/GeraldoPBarros/gb-investment-landingpage",
      featured: true,
    },
    {
      id: 2,
      title: "ChatGPT Clone",
      description:
        "A NextJS application that replicates the chat functionality of OpenAI's ChatGPT.",
      image: ChatGPTCloneImage,
      technologies: ["Next.js", "Vercel", "Tailwind CSS", "Redux-Toolkit", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/GeraldoPBarros/chatgpt-clone",
      featured: true,
    },

    {
      id: 3,
      title: "To-do List Game",
      description:
        "A responsive to-do list web application with a gamified approach. ",
      image: TodoListImage,
      technologies: ["Next.js", "Vercel", "FaunaDB", " Chakra-ui", "Plotly.Js", "Axios"],
      liveUrl: "#",
      githubUrl: "https://github.com/GeraldoPBarros/todo-list-w-timer-game",
      featured: false,
    },
    {
      id: 4,
      title: "Newsletter",
      description:
        "A newsletter made in NextJS powered by Prismic CMS.",
      image:
        NewsLetterImage,
      technologies: [
        "Next.js",
        "Typescript",
        "Sass",
        "Prismic (CMS)",
        "Stripe",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/GeraldoPBarros/gb-ignews",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Latest <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my technical skills and
            passion for creating exceptional user experiences
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Featured Projects
          </h3>
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
                    <a href={project.liveUrl} target="_blank">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-muted-foreground/20 hover:border-foreground"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Projects
          </h3>
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
                    <a href="#" target="_blank">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      disabled
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/GeraldoPBarros" target="_blank">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
