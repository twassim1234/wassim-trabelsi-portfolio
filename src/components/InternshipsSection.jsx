import { ExternalLink, ArrowRight } from "lucide-react";

const internships = [
  {
    id: 1,
    company: "Medicus AI",
    role: "Cloud Security Intern",
    duration: "June 2025 - july 2025",
    description: [
      "Designed and implemented a secure cloud development environment, enabling encrypted remote developer access and improving overall infrastructure security.",
      "Configured and optimized firewall and DNS management systems, enhancing network protection and reducing unauthorized access risks.",
      "Managed Kubernetes networking configurations, ensuring stable connectivity and secure communication between cloud-based services."
    ],
    image: "/projects/medicous.svg",
    link: "#",
  },
  {
    id: 2,
    company: "Code School Clubs Iasi (AIESEC)",
    role: "web Development Intern exchange participant",
    duration: "July 2024 - August 2024",
    description: [
      "Delivered programming lessons to children aged 5–17, tailoring content to various skill levels.",
      "Designed and developed a website for the school, improving its digital presence.",
      "Cultivated cross-cultural communication skills in a dynamic international environment."
    ],
    image: "/projects/Code-school.png",
    link: "#",
  },
  {
    id: 3,
    company: "MISFAT",
    role: "Software Developer Intern",
    duration: "May 2023 - June 2023",
    description: [
      "Independently developed, and maintained a desktop stock management application, managing the full software development life cycle.",
      "Collaborated with stakeholders to define requirements and translate them into functional specifications",
      "Conducted comprehensive testing and debugging to ensure a seamless user experience, while actively contributing to agile workflows and meeting all project milestones."
    ],
    image: "/projects/misfat.jpeg",
    link: "#",
  },

  {
    id: 5,
    company: "MISFAT",
    role: "IT Intern",
    duration: "June 2022 - July 2022",
    description: [
      "Conduct regular maintenance checks on computers, including hardware diagnostics, software updates.",
      "Planned, installed, and configured local area networks to ensure seamless communication between computers.",
    ],
    image: "/projects/misfat.jpeg",
    link: "#",
  },
];

export const InternshipsSection = () => {
  return (
    <section id="internships" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          My <span className="text-primary">Internships</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Here are some internships I have completed to gain practical experience in software development, data analysis, and cloud technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((intern, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-44 overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={intern.image}
                  alt={intern.company}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-1">{intern.role}</h3>
                <p className="text-lg text-muted-foreground mb-2">
                  {intern.company} | {intern.duration}
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-3">
                  {intern.description.map((point, index) => (
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
