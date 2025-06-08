
const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Innovating at the Intersection of
            <br />
            <span className="gradient-text">Design & Code</span>
          </h2>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate frontend developer with a keen eye for detail and a love for creating 
              exceptional user experiences. With expertise in modern JavaScript frameworks and a 
              deep understanding of design principles, I bridge the gap between creative vision 
              and technical implementation.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines performance optimization, accessibility standards, and clean, 
              maintainable code to deliver web applications that not only look stunning but 
              also perform flawlessly across all devices and platforms.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border hover:border-secondary/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
