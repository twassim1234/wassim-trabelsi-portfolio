import { Briefcase, Code, University, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate About Cybersecurity and DevOps
            </h3>

            <p className="text-muted-foreground">
              I am a 5th-year software engineering student, eager to grow in
              Cybersecurity and DevOps. Throughout my studies, I have explored a
              wide range of topics and gained practical experience through
              multiple internships and projects.
            </p>

            <p className="text-muted-foreground">
              Beyond university, I have been part of many organizations such as
              AIESEC, where I developed leadership skills and learned to work
              effectively in international environments. I am continuously
              improving my teamwork, communication, and learning abilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="public\projects\cv.pdf"
                download="Wassim_Trabelsi_resume-25.26.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
          
          <div className="gradient-border p-6 card-hover">
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <University className="h-6 w-6 text-primary" />
    </div>

    <div className="text-left">
      <h4 className="font-semibold text-lg">Education</h4>
      <p className="text-muted-foreground">
        <span className="font-medium">Mediterranean Institute of Technology</span>, Tunis, Tunisia
      </p>
      <p className="text-muted-foreground">
        <span className="font-medium">Degree:</span> Software Engineering
      </p>
      <p className="text-muted-foreground">
        <span className="font-medium">Graduation:</span> 2026
      </p>
    </div>
  </div>
</div>


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> CyberSecurity</h4>
                  <p className="text-muted-foreground">
                    I am passionate about Cybersecurity and have completed
                    courses in security and networking
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps</h4>
                  <p className="text-muted-foreground">
                    I am currently enhancing my DevOps expertise through
                    hands-on tasks and specialized courses{" "}
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};
