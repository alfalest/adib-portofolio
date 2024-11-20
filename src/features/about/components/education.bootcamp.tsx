// src/pages/About.tsx
import Education from "@/components/education";
import React from "react";

const EducationAndBootcamps: React.FC = () => {
  const formalEducation = {
    university: "University of Indonesia",
    gpa: 3.35,
    program: "Associate's Degree in Informatics Engineering",
    startDateCollege: "September 2018",
    endDateCollege: "Agustus 2021",
  };

  const bootcamps = [
    {
      name: "DNIIT Software Engineering - Java Technologies",
      startDate: "September 2021",
      endDate: "N/A",
      learnedSkills: ["Java", "Springboot", "Hibernate", "Server Faces"],
      certificateLink:
        "#",
    },
    {
      name: "Professional Programme",
      startDate: "September 2021",
      endDate: "N/A",
      learnedSkills: [
        "Java",
        "Springboot",
        "Hibernate",
        "Algorithms",
        "Database Query",
        "Server Faces",
      ],
      certificateLink:
        "https://drive.google.com/file/d/1fT0OmEjZ3VAeRXa6zzhflSE83c-kUdE7/view?usp=sharing",
    },
  ];

  return (
    <section>
      <Education formalEducation={formalEducation} bootcamps={bootcamps} />
    </section>
  );
};

export default EducationAndBootcamps;
