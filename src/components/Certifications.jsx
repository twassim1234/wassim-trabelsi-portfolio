import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    description: "Validated foundational knowledge of AWS Cloud concepts, core services, security, pricing, and support to effectively contribute to cloud initiatives.",
    image: "/certifications/aws.png",
    tags: ["AWS", "Cloud", "Certification"],
    certificateUrl: "#", // replace with your actual verification link if available
  },
  {
    id: 2,
    title: "Connect and Protect: Networks and Network Security",
    description: "Networks and Network Security, gaining knowledge in network defense, security protocols, and system hardening.",
    image: "/projects/c2.png",
    tags: ["Network Infrastructure", "Cloud Security", "Network Security"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/LHHNIWKEFQOR",
  },
  {
    id: 3,
    title: "Play It Safe: Manage Security Risks",
    description: "mastering risk management, threat detection, SIEM tools, and incident response.",
    image: "/projects/c3.png",
    tags: ["SIEM", "Risk Analysis", "Threat Management"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/KAJDL01K0WT3",
  },
  {
    id: 4,
    title: "Assets, Threats, and Vulnerabilities",
    description: "gaining skills in classifying assets, threat modeling, vulnerability analysis, malware protection, and cyber threat intelligence.",
    image: "/projects/c4.png",
    tags: ["Threat Detection", "Data Security", "Incident Response"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/75MHTBR3H3UW",
  }, {
    id: 5,
    title: "Foundations of Cybersecurity",
    description: "mastering core security principles, security controls, ethical standards, network analysis, SIEM tools, incident response, and cyber risk management.",
    image: "/projects/c5.png",
    tags: ["Security Management", "Security Controls", "Project Management"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/0Q2XNYHTUVU4",
  }, {
    id: 6,
    title: "Tools of the Trade: Linux and SQL",
    description: "gaining practical skills in Linux command-line navigation, system management, and SQL database querying.",
    image: "/projects/c6.png",
    tags: ["Linux", "CLI", "Database Management"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/MJZPLKSWU9L7",
  },
  {
    id: 7,
    title: "React Native",
    description: "acquiring skills in cross-platform mobile development, UI design, and React.js for building native applications.",
    image: "/projects/c7.png",
    tags: ["React.js", "React Native", "Cross Platform Development"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/4W9RS6KNWUX9",
  },
  {
    id: 8,
    title: "React Basics",
    description: "This course, offered by Meta, provided foundational skills in front-end development and UI design.",
    image: "/projects/c8.png",
    tags: ["Javascript", "React.js", "Web Applications"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/E8JW7MZYEYA4",
  },
  {
    id: 9,
    title: "Programming Fundamentals in Kotlin",
    description: "Completed Meta’s Programming Fundamentals in Kotlin course, gaining skills in Kotlin, OOP, debugging, and mobile development.",
    image: "/projects/c9.png",
    tags: ["Kotlin", "Object Oriented Programming (OOP)", "Engineering Documentation"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/M5WQSDS5784J",
  },
  {
    id: 10,
    title: "C for Everyone: Programming Fundamentals",
    description: "This course taught the basics of C programming, including arrays, pointers, functions, control structures, and debugging.",
    image: "/projects/c10.png",
    tags: ["Algorithms", "C (Programming Language)", "Computational Thinking"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/QDLHY6C9K2MH",
  },
  {
    id: 11,
    title: "Ethics, Technology and Engineering",
    description: "Engineering practices, mediation, business ethics, and ethical standards and conduct.",
    image: "/projects/c11.png",
    tags: ["Ethical Standards And Conduct", "Research", "Engineering Practices"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/203GFW519KUX",
  },
  {
    id: 12,
    title: "Communication Skills for Engineers",
    description: "Developing essential communication skills for engineers: presentations, writing, teamwork, and global collaboration.",
    image: "/projects/c12.png",
    tags: ["Communication Strategies", "Report Writing", "Engineering Documentation"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/EZNXSFD9H3HN",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Here are some of the certifications I have earned to enhance my knowledge and skills in technology and project management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-36 overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.tags.map((tag) => (
                    <span className="px-1 py-0.5 text-[10px] font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {cert.description}
                </p>

                {cert.certificateUrl && (
                  <div className="flex justify-start items-center">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      View Certificate <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
