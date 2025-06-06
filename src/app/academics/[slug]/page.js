import NavBar from "@/components/utils/NavBar";
import FOOter from "@/components/utils/FOOter";
import Hero from "@/components/pages/academics/sub/Hero";
import Section_1 from "@/components/pages/academics/sub/Section_1";
import Section_2 from "@/components/pages/academics/sub/Section_2";

export const dynamicParams = false;

const ACADEMIC = {
  cybersecurity: {
    hero: {
      title: "Cyber Security",
      heading: "Explore Our Comprehensive Cyber Security Services",
    },
    section_1: {
      title:
        "These courses are designed for anyone looking to strengthen their understanding of digital safety. Whether you’re an employee, a small business owner, a student, or simply someone interested in enhancing your online security, this course provides essential knowledge and practical insights to help you stay safe in today’s digital world.",
    },
    section_2: {
      courses: [
        {
          title: "Cybersecurity Awareness",
          duration: "30 hours",
          level: "Beginner",
          description:
            "This course offers a comprehensive introduction to key cybersecurity principles, aimed at enhancing your understanding and readiness against cyber threats. It covers essential topics from basic concepts to advanced practices, equipping participants with the knowledge to safeguard against digital threats effectively.",
          features: [
            "Hands-on training with real-world scenarios",
            "Covers essential tools: firewalls, IDS, encryption",
            "Prepares for industry certifications",
            "Teaches threat detection and incident response",
            "Includes latest trends: cloud, mobile, and compliance",
          ],
          link: "/academics/CyberSecurityAwarenessCourse.pdf",
        },
        {
          title: "Certified Associate Pentester",
          duration: "60 hours",
          level: "Intermediate",
          description:
            "This is a premier security credential designed to build a strong foundation in penetration testing. It will equip you with essential skills and hands-on experience to excel in modern penetration testing across diverse IT environments. This course offers an immersive, real-world training experience, focusing on the core concepts and methodologies required to effectively assess and secure infrastructures, operating systems, and applications.",
          features: [
            "Quick, focused introduction to cybersecurity basics",
            "Learn key threats like phishing and malware",
            "Understand firewalls, VPNs, and secure networks",
            "Covers best practices for personal and workplace security",
            "Ideal for beginners and non-technical professionals",
          ],
          link: "/academics/Certified Associate Pentester - Ethical Hacking.pdf",
        },
        {
          title: "PG in Information Security",
          duration: "600 hours",
          level: "Advanced",
          description:
            "This Post-Graduation program is crafted to elevate your skills, offering hands-on experience with real-world projects and guidance from industry experts. This career-focused course is designed to equip you with the advanced knowledge and practical experience necessary to excel in high-impact cybersecurity roles and lead with confidence in a rapidly evolving digital landscape.This course offers a comprehensive introduction to key cybersecurity principles, aimed at enhancing your understanding and readiness against cyber threats. It covers essential topics from basic concepts to advanced practices, equipping participants with the knowledge to safeguard against digital threats effectively.",
          features: [
            "In-depth training from fundamentals to advanced topics",
            "Hands-on labs in ethical hacking, forensics, and defense",
            "Prepares for top certifications (CEH, CISSP, CompTIA)",
            "Real-world projects, simulations, and red vs. blue team exercises",
            "Career-ready skills for roles like analyst, pentester, and security engineer",
          ],
          link: "/academics/Post Graduation Certificate for Information Security (PGCIS).pdf",
        },
      ],
    },
  },
  datascience: {
    hero: {
      title: "Data Science",
      heading: "Unlock the Power of Data with Our Data Science Courses",
    },
    section_1: {
      title:
        "These courses are designed for anyone looking to strengthen their understanding of data science. Whether you’re an employee, a small business owner, a student, or simply someone interested in enhancing your data skills, this course provides essential knowledge and practical insights to help you thrive in today’s data-driven world.",
    },
    section_2: {
      courses: [
        {
          title: "Data Science Bootcamp",
          duration: "30 hours",
          level: "Beginner",
          description:
            "This course offers a comprehensive introduction to key data science principles, aimed at enhancing your understanding and readiness to work with data. It covers essential topics from basic concepts to advanced practices, equipping participants with the knowledge to effectively analyze and interpret data.",
          features: [
            "Hands-on training with real-world datasets",
            "Covers essential tools: Python, R, SQL",
            "Prepares for industry certifications",
            "Teaches data visualization and machine learning basics",
            "Includes latest trends: big data, AI, and cloud computing",
          ],
          link: "/academics/Data_Science_Bootcamp.pdf",
        },
        {
          title: "Certified Data Analyst",
          duration: "60 hours",
          level: "Intermediate",
          description:
            "This is a premier data analytics credential designed to build a strong foundation in data analysis. It will equip you with essential skills and hands-on experience to excel in modern data analytics across diverse industries. This course offers an immersive, real-world training experience, focusing on the core concepts and methodologies required to effectively analyze and interpret data.",
          features: [
            "Quick, focused introduction to data analysis basics",
            "Learn key techniques like regression and clustering",
            "Understand data cleaning, transformation, and visualization",
            "Covers best practices for data-driven decision making",
            "Ideal for beginners and non-technical professionals",
          ],
          link: "/academics/_Data Science Proficiency Course.pdf",
        },
        {
          title: "PG in Data Science",
          duration: "600 hours",
          level: "Advanced",
          description:
            "This Post-Graduation program is crafted to elevate your skills, offering hands-on experience with real-world projects and guidance from industry experts. This career-focused course is designed to equip you with the advanced knowledge and practical experience necessary to excel in high-impact data science roles and lead with confidence in a rapidly evolving digital landscape.",
          features: [
            "In-depth training from fundamentals to advanced topics",
            "Hands-on labs in machine learning, deep learning, and AI",
            "Prepares for top certifications (CDMP, DASCA)",
            "Real-world projects, simulations, and case studies",
            "Career-ready skills for roles like data scientist, analyst, and engineer",
          ],
          link: "/academics/Post_Graduation_Certificate_for_Data_Science.pdf",
        }
      ],
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(ACADEMIC).map((slug) => ({ slug }));
}

export default async function AcademicsPage({ params }) {
  const { slug } = await params;

  const academicsData = ACADEMIC[slug];

  if (!academicsData) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <Hero {...academicsData.hero} />
      <Section_1 {...academicsData.section_1} />
      <Section_2 {...academicsData.section_2} />
      <FOOter />
    </>
  );
}
