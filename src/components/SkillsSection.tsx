
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", category: "Languages", level: "Expert" },
    { name: "TypeScript", category: "Languages", level: "Expert" },
    { name: "React.js", category: "Frameworks", level: "Expert" },
    { name: "Next.js", category: "Frameworks", level: "Expert" },
    { name: "Tailwind CSS", category: "Styling", level: "Expert" },
    { name: "CSS-in-JS", category: "Styling", level: "Advanced" },
    { name: "Git", category: "Tools", level: "Expert" },
    { name: "GitHub", category: "Tools", level: "Expert" },
    { name: "RESTful APIs", category: "Backend", level: "Advanced" },
    { name: "GraphQL", category: "Backend", level: "Intermediate" },
    { name: "Responsive Design", category: "Design", level: "Expert" },
    { name: "UI/UX Principles", category: "Design", level: "Advanced" },
  ];

  const categories = ["Languages", "Frameworks", "Styling", "Tools", "Backend", "Design"];
  
  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-secondary text-secondary-foreground";
      case "Intermediate": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of modern technologies and methodologies 
            I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div 
              key={category} 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
              <div className="space-y-3">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <Badge className={`${getLevelColor(skill.level)} text-xs`}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span>Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
