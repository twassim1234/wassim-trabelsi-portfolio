import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HandBall Federation Management System",
    description:
      "Senior project (ranked 2nd among all senior projects) developed in collaboration with the Tunisian Handball Federation to digitalize operations by automating scheduling and data management. Built with React.js, Tailwind CSS, Node.js, and MySQL.",
    image: "/projects/f.png",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: [
      "Centralized player, match, and club data management.",
      "Reduced paperwork and improved scheduling accuracy.",
      "Enabled real-time collaboration between officials, clubs, and coaches.",
    ],
  },
  {
    id: 2,
    title: "BacLingo Mobile App",
    description:
      "Mobile app designed to help Tunisian students prepare for Baccalaureate exams through interactive lessons, quizzes, and progress tracking. Inspired by Duolingo and aligned with the national curriculum.",
    image: "/projects/BL.png",
    tags: ["React Native", "JavaScript", "Node.js"],
    highlights: [
      "Developed cross-platform (Android & iOS) using React Native.",
      "Implemented quizzes and progress tracking for personalized learning.",
      "Optimized for smooth UI and student engagement.",
    ],
  },
  {
    id: 3,
    title: "Vehicle Identification System (Machine Learning)",
    description:
      "Machine learning project for automatic vehicle identification using computer vision to enhance traffic monitoring and management.",
    image: "/projects/vi.png",
    tags: ["Python", "Machine Learning", "Computer Vision"],
    highlights: [
      "Applied computer vision algorithms for vehicle classification.",
      "Fine-tuned model for performance on static image datasets.",
      "Conducted model training, validation, and optimization.",
    ],
  },
  {
    id: 4,
    title: "Tower Defense Game",
    description:
      "3-level strategy tower defense game built with Unity and C#, designed to challenge players with dynamic gameplay and immersive mechanics.",
    image: "/projects/td.png",
    tags: ["Unity", "C#", "Game Design"],
    highlights: [
      "Designed and implemented full gameplay loop.",
      "Developed core mechanics and enemy behavior logic.",
      "Tested and iterated for balance and user experience.",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          <span className="text-primary">Featured Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
          A showcase of my most significant projects where I applied creativity,
          technical skills, and teamwork to deliver impactful results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-44 overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-[11px] font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mb-3">
                  {project.description}
                </p>

                <ul className="list-disc list-inside text-xs text-muted-foreground">
                  {project.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
