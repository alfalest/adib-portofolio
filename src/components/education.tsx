// src/components/Education.tsx
import React from "react";
import Bootcamp from "./bootcamp";

interface EducationProps {
  formalEducation: {
    university: string;
    gpa: number;
    program: string;
    startDateCollege: string; // Start date for college education
    endDateCollege: string; // End date for college education
  };
  bootcamps: {
    name: string;
    startDate: string;
    endDate: string;
    learnedSkills: string[];
    certificateLink: string;
  }[];
}

const Education: React.FC<EducationProps> = ({
  formalEducation,
  bootcamps,
}) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Education
      </h2>

      {/* Formal Education */}
      <div className="mt-4 rounded p-4 shadow-sm">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <h3 className="text-xl font-medium text-gray-600 dark:text-gray-200">
            {formalEducation.university}
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            {`${formalEducation.startDateCollege} - ${formalEducation.endDateCollege}`}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Program: {formalEducation.program}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          GPA: {formalEducation.gpa}
        </p>
      </div>

      {/* Bootcamps */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Certificate
        </h2>
        {bootcamps.map((bootcamp, index) => (
          <Bootcamp key={index} {...bootcamp} />
        ))}
      </div>
    </section>
  );
};

export default Education;
