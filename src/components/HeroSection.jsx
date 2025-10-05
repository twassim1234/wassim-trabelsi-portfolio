import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Wassim
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Trabelsi
            </span>
          </h1>
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight">
            <span className="text-blue-300 opacity-0 animate-fade-in-delay-1">
              {" "}
              Software Engineering 
            </span>
            <span className=" opacity-0 animate-fade-in-delay-1">
              {" "}
               Student
            </span>
            
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Ambitious and eager to grow in Cybersecurity and DevOps. Skilled in working effectively in international environments, with strengths in teamwork, communication, and continuous learning.          </p>

         
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-md text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};
