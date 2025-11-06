const memberships = [
    {
      id: 0,
      organization: "AIESEC of Poland",
      role: "Head of operations (Outgoing Exchange)",
      duration: "2025 – Current",
      description: [
        "Led country-level initiatives and oversaw team performance across multiple cities in Poland.",
        "Developed leadership, project management, and teamwork skills.",
        "working internationally with a board from 5 countries and people from 100+ countries."
      ],
      image: "/projects/Aiesec.png",
      link: "#",
    },
    {
      id: 0,
      organization: "AIESEC Carthage Local Community(Tunisia)",
      role: "Active Member and Team Leader ", 
      duration: "2023 – 2025",
      description: [
        "Led initiatives and oversaw team performance.",
        "Developed leadership, project management, and teamwork skills.",
        "Built international partnerships and managed cross-cultural collaboration projects.",
      ],
      image: "/projects/Aiesec.png",
      link: "#",
    },
    {
      id: 1,
      organization: "Serenity Shop",
      role: "Founder and Manager",
      duration: "June 2022 - May 2025",
      description: [
        "Worked with packaging prepared products to be shipped.",
        "Gained valuable communication and sales skills.",
        "Made over 300 sales of various products.",
  
      ],
      image: "/projects/serenity.jpg",
      link: "#",
    },
    {
      id: 2,
      organization: "south mediterranean university",
      role: "Tutor",
      duration: "OCT 2022 – DEC 2022",
      description: [
        "Conducted one-on-one C++ tutoring to support student learning and comprehension..",
        "Provided guidance on study strategies, time management, and exam preparatioN."
      ],
      image: "/projects/smu.png",
      link: "#",
    },
    {
      id: 3,
      organization: "Enactus SMU",
      role: "Active Member",
      duration: "2023 – 2024",
      description: [
        "Contributed to social entrepreneurship projects.",
        "Collaborated with team members to implement impactful initiatives."
      ],
      image: "/projects/enactus.png",
      link: "#",
    },
    {
      id: 4,
      organization: "Lions Club SMU Nation",
      role: "Active Member",
      duration: "2022 – 2024",
      description: [
        "Participated in community service and charity events.",
        "Enhanced organizational and communication skills."
      ],
      image: "/projects/lions.png",
      link: "#",
    },
    {
      id: 5,
      organization: "IEEE SMU",
      role: "Active Member",
      duration: "2022 – 2024",
      description: [
        "Engaged in technical workshops and networking events.",
        "Developed technical knowledge and team collaboration skills."
      ],
      image: "/projects/ieee.png",
      link: "#",
    },
    {
      id: 6,
      organization: "Les Amis des Oiseaux",
      role: "Member",
      duration: "2021 – 2022",
      description: [
        "Participated in wildlife conservation.",
        "Learned about environmental awareness and volunteer coordination."
      ],
      image: "/projects/birds.png",
      link: "#",
    },
  ];
  
  export const OtherSection = () => {
    return (
      <section id="Other" className="py-16 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            <span className="text-primary">Extra-curricular</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Involvement in organizations and small jobs where I contributed to team initiatives, community projects, and personal/professional development.          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((member, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-44 overflow-hidden flex items-center justify-center bg-gray-50">
                  <img
                    src={member.image}
                    alt={member.organization}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
  
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-1">{member.role}</h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    {member.organization} | {member.duration}
                  </p>
  
                  <ul className="list-disc list-inside text-sm text-muted-foreground mb-3">
                    {member.description.map((point, index) => (
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
  