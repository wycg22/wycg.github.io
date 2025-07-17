import ContentCard from '../components/ContentCard';
import company1Logo from '../assets/vandan_logo.png'; 
import company2Logo from '../assets/Elections-Canada_logo.png';
import company3Logo from '../assets/LTX_logo.jpg';
import company4Logo from '../assets/bestbuy_logo.jpg';

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer Intern",
      subtitle: "VanDan Power Wash",
      period: "March 2025 - May 2025",
      description: [
        "Initiated the development of a professional business website to enhance online presence",
        "Streamlined customer inquiries through a real-time quote request form",
        "Optimized UI/UX with intuitive navigation, compelling visuals, and a mobile-optimized design to attract local customers",
      ],
      image: company1Logo
    },
    {
      title: "Deputy Returning Officer",
      subtitle: "Elections Canada",
      period: "April 2025 - May 2025",
      description: [
        "Issued over 200 voting ballots a day in the 2025 Federal Election",
        "Verified voter identification and updated necessary voter records",
        "Conducted the final counting of ballots in a timely matter to inform the office of the results",
      ],
      image: company2Logo
    },
    {
      title: "Volunteer",
      subtitle: "Linux Tech Expo (LTX)",
      period: "June 2023",
      description: [
        "Assisted event operations and managed the GPU Repasting Station",
        "Responsible for the disassembly and replacement of thermal compound within the GPU",
        "Collaborated with a team of tech enthusiasts to ensure proper disassembly of attendees' assets"
      ],
      image: company3Logo
    },
    {
      title: "Mobile Advisor",
      subtitle: "Best Buy",
      period: "October 2021 - September 2022",
      description: [
        "Advised customers on cell phone plan options, encouraging a selection to best match the needs and preferences of each client",
        "Collaborated in a team of 8 to achieve and surpass mobile activation targets",
        "Provided technical support for customer devices, ensuring high levels of understanding and satisfaction"
      ],
      image: company4Logo
    }
  ];

  return (
    <div className="experience-page">
      <h1>Work Experience</h1>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <ContentCard
            key={index}
            title={exp.title}
            subtitle={exp.subtitle}
            period={exp.period}
            description={exp.description}
            image={exp.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;